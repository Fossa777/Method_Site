/* FossaMethod embedded and per-specimen microscope controls.
   Each instance has independent state; no global IDs or pagewide camera selectors. */
(() => {
  if (window.__fossaModernControlsInitialized) return;
  window.__fossaModernControlsInitialized = true;
  function initialize() {
    document.querySelectorAll('.microscope-collection--modern').forEach(collection => {
      if (collection.dataset.modernReady) return;
      collection.dataset.modernReady = '1';
      const scope = collection.querySelector('.scope-container');
      const lens = scope?.querySelector('.scope-with-glow');
      const panel = lens?.querySelector('.scope-adjust');
      const actions = scope?.querySelector('.scope-photo-actions');
      const button = actions?.querySelector('.scope-photo-button');
      const ann = collection.querySelector('.collection-controls .annotation-toggle-btn');
      const wrapper = scope?.querySelector('.scope-wrapper');
      const viewport = wrapper?.querySelector('.dzi-viewer');
      const fullscreenBtn = actions?.querySelector('.fossa-shortcode-fullscreen');
      const infoControl = lens?.querySelector('.fossa-specimen-info-control');
      const infoButton = infoControl?.querySelector('.fossa-specimen-info-button');
      const infoText = infoControl?.querySelector('.fossa-specimen-info-panel__text');
      const description = scope?.querySelector('.specimen-description');
      if (!scope || !lens || !panel || !actions || !button || !wrapper || !viewport) return;
      if (ann) actions.insertBefore(ann,button);
      const russian = document.documentElement.lang.startsWith('ru') || location.pathname.startsWith('/ru/');
      const message = (ru,en) => russian ? ru : en;

      // Two independent analog controls for each microscope.
  const specs = {
    brightness: { min: 0.70, max: 1.30, step: 0.01, wheelStep: 0.01 },
    contrast:   { min: 0.40, max: 2.00, step: 0.01, wheelStep: 0.02 }
  };
  const settings = { brightness: 1, contrast: 1 };
  const clamp = (x, min, max) => Math.max(min, Math.min(max, x));

  function setValue(kind, next) {
    const s = specs[kind];
    if (!s || !Number.isFinite(next)) return;
    const value = Math.round(clamp(next, s.min, s.max) / s.step) * s.step;
    settings[kind] = Number(value.toFixed(2));
    const dial = panel.querySelector('[data-control="' + kind + '"]');
    if (!dial) return;
    const percent = Math.round(settings[kind] * 100);
    const angle = -65 + (settings[kind] - s.min) / (s.max - s.min) * 130;
    dial.style.setProperty('--scope-knob-angle', angle.toFixed(2) + 'deg');
    dial.querySelector('output').textContent = percent + '%';
    dial.setAttribute('aria-valuenow', String(percent));
    dial.setAttribute('aria-valuetext', percent + '%');

    scope.style.setProperty('--scope-brightness', String(settings.brightness));
    scope.style.setProperty('--scope-contrast', String(settings.contrast));
  }

  panel.querySelectorAll('.scope-knob').forEach(dial => {
    const kind = dial.dataset.control;
    const s = specs[kind];
    const svg = dial.querySelector('svg');
    if (!s || !svg) return;

    // Wheel events affect a dial only while the cursor is over it.
    let wheelTotal = 0;
    dial.addEventListener('wheel', event => {
      if (event.ctrlKey) return; // Preserve browser zoom.
      event.preventDefault();
      const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 400 : 1;
      wheelTotal -= event.deltaY * multiplier;
      const ticks = Math.trunc(wheelTotal / 45);
      if (!ticks) return;
      wheelTotal -= ticks * 45;
      setValue(kind, settings[kind] + ticks * s.wheelStep);
    }, { passive: false });

    // A true rotary gesture: move a mouse or finger around the dial.
    const rotaryValue = event => {
      const rect = svg.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * (68 / 110);
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);
      if (distance < rect.width * 0.13) return null;
      let degrees = Math.atan2(dy, dx) * 180 / Math.PI;
      if (degrees > 90) degrees -= 360;
      const angle = clamp(degrees + 90, -65, 65);
      return s.min + (angle + 65) / 130 * (s.max - s.min);
    };
    let dragging = false;
    svg.addEventListener('pointerdown', event => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;
      const value = rotaryValue(event);
      if (value === null) {
        setValue(kind, 1); // A tap on the small center resets this dial.
        return;
      }
      dragging = true;
      svg.setPointerCapture(event.pointerId);
      setValue(kind, value);
      event.preventDefault();
    });
    svg.addEventListener('pointermove', event => {
      if (!dragging) return;
      const value = rotaryValue(event);
      if (value !== null) setValue(kind, value);
    });
    const release = () => { dragging = false; };
    svg.addEventListener('pointerup', release);
    svg.addEventListener('pointercancel', release);
    svg.addEventListener('lostpointercapture', release);

    // Accessible keyboard control with original-value reset.
    dial.addEventListener('keydown', event => {
      const key = event.key;
      let value = settings[kind];
      if (key === 'ArrowUp' || key === 'ArrowRight') value += s.wheelStep;
      else if (key === 'ArrowDown' || key === 'ArrowLeft') value -= s.wheelStep;
      else if (key === 'Home') value = s.min;
      else if (key === 'End') value = s.max;
      else if (key === '0' || key === 'Enter') value = 1;
      else return;
      event.preventDefault();
      setValue(kind, value);
    });

    setValue(kind, 1);
  });

      // Photograph the currently visible viewport; black opaque PNG.
    function showError(reason) {
      console.warn('Microscope photo:', reason);
      alert(message(
        'Не удалось сохранить снимок. Убедитесь, что препарат загружен; если ошибка повторяется, проверьте доступность DZI-файлов на этом сайте.',
        'Could not save the image. Check that the specimen has loaded and its DZI tiles are accessible.'
      ));
    }

    function exportPhoto() {
      // OpenSeadragon 4.1.1 uses a rendered canvas in this viewer.
      const canvases = Array.from(viewport.querySelectorAll('canvas'))
        .filter(node => node.width > 0 && node.height > 0 && node.getClientRects().length);
      const source = canvases.sort((a, b) => b.width * b.height - a.width * a.height)[0];
      if (!source) throw new Error('No rendered OSD canvas');

      const bounds = viewport.getBoundingClientRect();
      if (bounds.width < 10 || bounds.height < 10) throw new Error('Viewport not ready');
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const factor = Math.max(1, ratio);
      const width = Math.round(bounds.width * factor);
      const height = Math.round(bounds.height * factor);
      const photo = document.createElement('canvas');
      photo.width = width;
      photo.height = height;
      const ctx = photo.getContext('2d', { alpha: false });
      if (!ctx) throw new Error('Canvas 2D unavailable');
      ctx.scale(width / bounds.width, height / bounds.height);

      // Opaque black background across the entire PNG, including outside the eyepiece.
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, bounds.width, bounds.height);

      // Circular microscope image above the black background.
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(bounds.width / 2, bounds.height / 2,
        bounds.width / 2, bounds.height / 2, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, bounds.width, bounds.height);

      // CSS filters are not part of source canvas pixels: reproduce them here.
      const b = getComputedStyle(scope).getPropertyValue('--scope-brightness').trim() || '1';
      const c = getComputedStyle(scope).getPropertyValue('--scope-contrast').trim() || '1';
      ctx.filter = `brightness(${b}) contrast(${c})`;
      const layer = source.getBoundingClientRect();
      ctx.drawImage(source, layer.left - bounds.left, layer.top - bounds.top,
        layer.width, layer.height);
      ctx.filter = 'none';

      // Overlay only the scale bar as actually laid out by the shortcode.
      const line = wrapper.querySelector('.scale-bar-line');
      const text = wrapper.querySelector('.scale-bar-text');
      if (line && text && text.textContent.trim() !== '—') {
        const lineStyle = getComputedStyle(line);
        const lineRect = line.getBoundingClientRect();
        if (lineRect.width && lineRect.height && lineStyle.display !== 'none') {
          ctx.save();
          ctx.globalAlpha = Number.parseFloat(lineStyle.opacity) || 1;
          ctx.fillStyle = lineStyle.backgroundColor || '#fff';
          const x = lineRect.left - bounds.left;
          const y = lineRect.top - bounds.top;
          const r = Math.min(lineRect.height / 2, 3);
          ctx.beginPath();
          ctx.roundRect(x, y, lineRect.width, lineRect.height, r);
          ctx.fill();
          ctx.restore();
        }
        const textStyle = getComputedStyle(text);
        const textRect = text.getBoundingClientRect();
        if (textRect.width && textStyle.display !== 'none') {
          ctx.save();
          ctx.font = `${textStyle.fontWeight} ${textStyle.fontSize} ${textStyle.fontFamily}`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = textStyle.color || '#fff';
          ctx.shadowColor = 'rgba(0,0,0,.85)';
          ctx.shadowBlur = 6;
          ctx.fillText(text.textContent.trim(),
            textRect.left + textRect.width / 2 - bounds.left,
            textRect.top + textRect.height / 2 - bounds.top);
          ctx.restore();
        }
      }

      // Retain visible ROI circles, when annotations are enabled.
      wrapper.querySelectorAll('.annotation-marker').forEach(marker => {
        const cs = getComputedStyle(marker);
        if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return;
        const r = marker.getBoundingClientRect();
        if (!r.width || !r.height) return;
        ctx.save();
        ctx.beginPath();
        ctx.arc(r.left + r.width/2 - bounds.left, r.top + r.height/2 - bounds.top,
          r.width/2 - 1, 0, 2*Math.PI);
        ctx.strokeStyle = cs.borderTopColor || '#f44';
        ctx.lineWidth = Number.parseFloat(cs.borderTopWidth) || 2;
        ctx.stroke();
        ctx.restore();
      });
      ctx.restore();

      // toDataURL is synchronous and keeps the download in the click gesture.
      const dataURL = photo.toDataURL('image/png');
      const name = scope.querySelector('.specimen-name')?.textContent.trim() || 'specimen';
      const safe = name.replace(/[^\p{L}\p{N}._-]+/gu, '_').slice(0, 55);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = `FossaMicroscope_${safe}_${timestamp}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      wrapper.classList.remove('scope-photo-flash');
      void wrapper.offsetWidth;
      wrapper.classList.add('scope-photo-flash');
      wrapper.addEventListener('animationend', () => wrapper.classList.remove('scope-photo-flash'), { once: true });
    }

    button.addEventListener('click', () => {
      if (button.disabled) return;
      button.disabled = true;
      try { exportPhoto(); }
      catch (error) { showError(error); }
      finally { button.disabled = false; }
    });


      // Hover/focus/click information popup; never changes specimen's visual scale.
      if (infoControl && infoButton && infoText && description) {
        let pinned = false;
        function showInfo(open) {
          const value=!!open;
          infoControl.classList.toggle('is-open',value);
          infoButton.setAttribute('aria-expanded',String(value));
        }
        function syncInfo() {
          infoText.textContent=description.textContent.trim();
          infoButton.disabled=!infoText.textContent;
          pinned=false;
          showInfo(false);
        }
        new MutationObserver(syncInfo).observe(description,{childList:true,subtree:true,characterData:true});
        syncInfo();
        infoControl.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&!infoButton.disabled) showInfo(true)});
        infoControl.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'&&!pinned)showInfo(false)});
        infoButton.addEventListener('click',()=>{pinned=!pinned;showInfo(pinned)});
        infoButton.addEventListener('focus',()=>{if(!infoButton.disabled)showInfo(true)});
        document.addEventListener('pointerdown',e=>{if(!infoControl.contains(e.target)){pinned=false;showInfo(false)}});
        document.addEventListener('keydown',e=>{if(e.key==='Escape'){pinned=false;showInfo(false)}});
      }
      if(fullscreenBtn){
        if(!document.fullscreenEnabled||typeof collection.requestFullscreen!=='function') fullscreenBtn.hidden=true;
        else {
          fullscreenBtn.addEventListener('click',async()=>{
            try { if(document.fullscreenElement===collection) await document.exitFullscreen();
              else await collection.requestFullscreen(); }
            catch(err){console.warn('Fullscreen unavailable:',err)}
          });
          document.addEventListener('fullscreenchange',()=>{
            const active=document.fullscreenElement===collection;
            fullscreenBtn.setAttribute('aria-pressed',String(active));
            const label=fullscreenBtn.querySelector('.fossa-shortcode-fullscreen-text');
            if(label)label.textContent=active?fullscreenBtn.dataset.exit:fullscreenBtn.dataset.enter;
            requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));
          });
        }
      }
    });
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',initialize,{once:true});
  else initialize();
})();
