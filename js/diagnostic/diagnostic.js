const app = document.getElementById("fossa-diagnostic-app");

let model = null;
let state = {};
let currentProfile = "surgeonfish";
let diagnosticData = null;
let currentOrganId = null;
let previousAnatomyMode = "external";
let currentMode = "external";
const selectedByOrgan = {};
const selectedEffects = new Set();


function saveDiagnosticState() {
  localStorage.setItem(
    "fossaDiagnosticState",
    JSON.stringify({
      selectedByOrgan,
      currentProfile,
      currentMode
    })
  );
}

function loadDiagnosticState() {
  const saved = localStorage.getItem("fossaDiagnosticState");

  if (!saved) return;

  try {
    const data = JSON.parse(saved);

    if (data.selectedByOrgan) {
      Object.assign(selectedByOrgan, data.selectedByOrgan);
    }

    if (data.currentProfile) {
      currentProfile = data.currentProfile;
    }

    if (data.currentMode) {
      currentMode = data.currentMode;
    }

  } catch (e) {
    console.error("Failed to restore diagnostic state", e);
  }
}


const lang = location.pathname.startsWith("/en/") ? "en" : "ru";

const uiText = {
  ru: {
    noData: "Нет данных.",
    nothingSelected: "Пока ничего не выбрано.",
    noMechanisms: "Пока значимых механизмов не выбрано.",
    noPatterns: "Пока совпадений не найдено.",
    chooseOrgan: "Выберите орган",
    clickOrgan: "Нажмите на орган рыбы.",
    reset: "Сброс",
    confirmation: " + подтверждение",
    nextSteps: "Что проверить дальше:",
    native: " · натив",
    stained: " · окраска",

    tooltipExternalTitle: "Внешний осмотр",
    tooltipExternalText: "Осмотр кожи, плавников и других видимых изменений.",
    tooltipInternalTitle: "Вскрытие",
    tooltipInternalText: "Осмотр внутренних органов и патологических изменений.",
    tooltipNativeTitle: "Нативный препарат",
    tooltipNativeText: "Живые объекты. Движение паразитов, грибов и других структур.",
    tooltipStainedTitle: "Окрашенный мазок",
    tooltipStainedText: "Бактерии, клетки и микроскопические структуры после окраски."
  },

  en: {
    noData: "No data available.",
    nothingSelected: "Nothing selected yet.",
    noMechanisms: "No significant mechanisms selected yet.",
    noPatterns: "No matching patterns found.",
    chooseOrgan: "Select an organ",
    clickOrgan: "Click an organ on the fish.",
    reset: "Reset",
    confirmation: " + confirmed",
    nextSteps: "Next diagnostic steps:",
    native: " · native",
    stained: " · stained",

    tooltipExternalTitle: "External examination",
    tooltipExternalText: "Skin, fins, and other visible external changes.",
    tooltipInternalTitle: "Necropsy",
    tooltipInternalText: "Internal organs and pathological changes.",
    tooltipNativeTitle: "Native preparation",
    tooltipNativeText: "Live objects. Movement of parasites, fungi, and other structures.",
    tooltipStainedTitle: "Stained smear",
    tooltipStainedText: "Bacteria, cells, and microscopic structures after staining."
  }
};

const t = uiText[lang];





init();

async function init() {
  await loadModel();
  await loadDiagnosticData();

loadDiagnosticState();


  renderProfileSelector();
  setupModeSelector();
initModeTooltips();
initDiagnosticHelp();
   // renderModelBlocks();
  setupOrganClicks();
  setupReferenceClicks();

syncSelectedEffects();
updateDiagnosticMode();
renderSelectedObservations();
renderMechanismScores();
renderObservationText();
renderPatterns();

}

async function loadModel() {
  const response = await fetch("/data/diagnostic/model.json");
  model = await response.json();

  Object.keys(model.observations).forEach((key) => {
    const values = Object.keys(model.observations[key].values);
    state[key] = values[0];
  });
} 

async function loadDiagnosticData() {
  const response = await fetch(`/data/diagnostic/${lang}.json`);
  diagnosticData = await response.json();
}

function renderModelBlocks() {
  

  renderControls();
  renderResults();

}

function openOrganPanel(organId) {


  currentOrganId = organId;

document.querySelectorAll("[id^='zone-']").forEach((zone) => {
  zone.classList.remove("zone-selected");
});

const selectedZone = document.getElementById(organId);
if (selectedZone) {
  selectedZone.classList.add("zone-selected");
}

const source = getCurrentDataSource();
const organ = source[currentOrganId];

  if (!organ) {
    document.getElementById("organ-title").textContent = currentOrganId;
    document.getElementById("organ-panel").innerHTML = t.noData;
    return;
  }

  document.getElementById("organ-title").textContent = organ.title;
  document.getElementById("organ-panel").innerHTML = buildReferenceGrid(organ);

  restoreSelectedCardForCurrentOrgan();
}



function setupOrganClicks() {
  document.querySelectorAll('[id^="zone-"]').forEach((zone) => {
  zone.style.cursor = "pointer";
  zone.style.pointerEvents = "all";

  zone.querySelectorAll("*").forEach((child) => {
    child.style.pointerEvents = "all";
  });
});

  document.addEventListener("click", (event) => {
    const zone = event.target.closest('[id^="zone-"]');
    if (!zone) return;

    if (
  currentMode === "external" &&
  zone.id !== "zone-skin" &&
  zone.id !== "zone-fin"
) return;
    if (currentMode === "internal" && zone.id === "zone-skin") return;

openOrganPanel(zone.id);
event.stopPropagation();
  });

const fishMap = document.getElementById("fish-map");

if (fishMap) {
  fishMap.addEventListener("click", (event) => {
    if (currentMode !== "external") return;

    const zone = event.target.closest('[id^="zone-"]');

    if (zone) return;

    openOrganPanel("zone-skin");
  });
}

document.querySelectorAll("#hotspots [id^='zone-']").forEach((zone) => {
  zone.addEventListener("mouseenter", () => {
    zone.classList.add("zone-hover");
  });

  zone.addEventListener("mouseleave", () => {
    zone.classList.remove("zone-hover");
  });
});


}





function buildReferenceGrid(organ) {
  return `
    <div class="reference-grid">
      ${organ.references.map((ref) => `
        <div class="reference-card" data-reference-id="${ref.id}">
          <img src="https://fossamethod.ru/images/diagnostic/${organ.folder}/${ref.image}" alt="">
        </div>
      `).join("")}
    </div>
  `;
}

function setupReferenceClicks() {
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".reference-card");
    if (!card) return;

    if (!currentOrganId) return;

    const grid = card.closest(".reference-grid");

    grid.querySelectorAll(".reference-card").forEach((item) => {
      item.classList.remove("selected");
    });

    card.classList.add("selected");

    const img = card.querySelector("img");

    const referenceId = card.dataset.referenceId;

const selectionKey = getSelectionKey(currentOrganId);

if (
  selectedByOrgan[selectionKey] &&
  selectedByOrgan[selectionKey].referenceId === referenceId
) {
  delete selectedByOrgan[selectionKey];
} else {
  selectedByOrgan[selectionKey] = {
    organId: currentOrganId,
    mode: currentMode,
    referenceId,
    image: img.src
  };
}

saveDiagnosticState();

document.querySelectorAll("[id^='zone-']").forEach((zone) => {
  zone.classList.remove("zone-selected");
});

    syncSelectedEffects();
    updateDiagnosticMode();

    renderSelectedObservations();
    renderMechanismScores();
renderPatterns();
renderObservationText();

  });

document.addEventListener("click", function(event) {
  const btn = event.target.closest(".fish-profile-btn");
  if (!btn) return;

  currentProfile = btn.dataset.profileId;

saveDiagnosticState();

  document.querySelectorAll(".fish-profile-btn").forEach((item) => {
    item.classList.remove("selected");
  });

  btn.classList.add("selected");

  renderMechanismScores();
renderPatterns();
});

}

function restoreSelectedCardForCurrentOrgan() {
  const selectionKey = getSelectionKey(currentOrganId);
const selected = selectedByOrgan[selectionKey];

  if (!selected) return;

  const card = document.querySelector(
    `.reference-card[data-reference-id="${selected.referenceId}"]`
  );

  if (card) {
    card.classList.add("selected");
  }
}

function renderSelectedObservations() {
  const container = document.getElementById("selected-observations");

  const items = Object.entries(selectedByOrgan);

  if (items.length === 0) {
    container.innerHTML = t.nothingSelected;
    return;
  }
container.innerHTML = items.map(([selectionKey, data]) => {
  const organId =
    data.organId || selectionKey.replace(/^(native|stained):/, "");

  const source =
    data.mode === "native"
      ? diagnosticData.microscopy_native
      : data.mode === "stained"
        ? diagnosticData.microscopy_stained
        : diagnosticData.organs;

  const baseTitle =
    source?.[organId]?.title ||
    diagnosticData.organs?.[organId]?.title ||
    organId;

  const modeLabel =
    data.mode === "native"
      ? t.native
      : data.mode === "stained"
        ? t.stained
        : "";

const organTitle = baseTitle;

  return `
    <div class="selected-organ-block" data-organ-id="${selectionKey}">

      <div class="selected-organ-title">
        ${organTitle}
      </div>

      <div class="selected-thumb-card">
        <button class="selected-remove" data-organ-id="${selectionKey}">×</button>
        <img src="${data.image}" alt="">
      </div>

    </div>
  `;
}).join("");



const resetCard = document.createElement("div");
resetCard.className = "selected-thumb-card reset-card";

resetCard.innerHTML = `
  <strong>${t.reset}</strong>
  <div class="reset-thumb">↺</div>
`;

resetCard.addEventListener("click", clearDiagnosticSelections);

container.appendChild(resetCard);



document.querySelectorAll(".selected-remove").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();

    const organId = btn.dataset.organId;
    delete selectedByOrgan[organId];

    syncSelectedEffects();
    updateDiagnosticMode();
    renderSelectedObservations();
    renderObservationText();
    renderMechanismScores();
renderPatterns();
    saveDiagnosticState();

  });
});


}




function renderControls() {
  const container = document.getElementById("diagnostic-controls");

  container.innerHTML = Object.entries(model.observations)
    .map(([id, obs]) => {
      const options = Object.entries(obs.values)
        .map(([value, label]) => {
          const selected = state[id] === value ? "selected" : "";
          return `<option value="${value}" ${selected}>${label}</option>`;
        })
        .join("");

      return `
        <label class="diagnostic-control">
          <span>${obs.label}</span>
          <select data-observation="${id}">
            ${options}
          </select>
        </label>
      `;
    })
    .join("");

  container.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", (event) => {
      const id = event.target.dataset.observation;
      state[id] = event.target.value;
      renderResults();
    });
  });
}

function renderResults() {
  const scores = {};
  const activePatterns = [];

  Object.keys(model.signals).forEach((key) => {
    scores[key] = 0;
  });

  model.single_rules.forEach((rule) => {
    if (matches(rule.when)) {
      addScores(scores, rule.add);
    }
  });

  model.patterns.forEach((pattern) => {
    if (matches(pattern.when)) {
      addScores(scores, pattern.add);
      activePatterns.push(pattern);
    }
  });

  const sorted = Object.entries(scores)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1]);

  const results = document.getElementById("diagnostic-results");

  if (sorted.length === 0) {
    results.innerHTML = `<p class="diagnostic-muted">Пока значимых отклонений не выбрано.</p>`;
    return;
  }

  results.innerHTML = `
    <div class="diagnostic-score-list">
      ${sorted.map(([id, score]) => `
        <div class="diagnostic-score-row">
          <span>${model.signals[id]}</span>
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${activePatterns.length ? `
      <h3>Сработавшие паттерны</h3>
      ${activePatterns.map((pattern) => `
        <div class="diagnostic-pattern">
          <strong>${pattern.label}</strong>
          <p>${pattern.note}</p>
        </div>
      `).join("")}
    ` : ""}
  `;
}

function matches(conditions) {
  return Object.entries(conditions).every(([key, value]) => {
    if (Array.isArray(value)) {
      return value.includes(state[key]);
    }

    return state[key] === value;
  });
}

function addScores(scores, additions) {
  Object.entries(additions).forEach(([key, value]) => {
    scores[key] += value;
  });
}

function renderProfileSelector() {
  const container = document.getElementById("fish-profile-selector");
  if (!container) return;

  container.innerHTML = Object.entries(diagnosticData.profiles)
    .map(([profileId, profile]) => {
      const selected = profileId === currentProfile ? "selected" : "";

      return `
        <button class="fish-profile-btn ${selected}" data-profile-id="${profileId}">
          ${profile.title}
        </button>
      `;
    })
    .join("");
}

function calculateMechanismScores() {
  const scores = {};
  const profile = diagnosticData.profiles[currentProfile] || {};
  const multipliers = profile.multipliers || {};

  Object.entries(selectedByOrgan).forEach(([selectionKey, selected]) => {
    const organId =
      selected.organId || selectionKey.replace(/^(native|stained):/, "");

    let source = diagnosticData.organs || {};

    if (selected.mode === "native") {
      source = diagnosticData.microscopy_native || {};
    }

    if (selected.mode === "stained") {
      source = diagnosticData.microscopy_stained || {};
    }

    const organ = source[organId];
    if (!organ) return;

    const reference = organ.references.find((ref) => {
      return ref.id === selected.referenceId;
    });

    if (!reference || !reference.effects) return;

    Object.entries(reference.effects).forEach(([mechanismId, baseScore]) => {
      const multiplier = multipliers[mechanismId] ?? 1;
      const finalScore = baseScore * multiplier;

      scores[mechanismId] = (scores[mechanismId] || 0) + finalScore;
    });
  });

  return scores;
}


function renderMechanismScores() {
  const container = document.getElementById("diagnostic-mechanisms");

  const scores = calculateMechanismScores();

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  if (sorted.length === 0) {
    container.innerHTML = t.noMechanisms;
    return;
  }

  container.innerHTML = `
    <div class="diagnostic-score-list">
      ${sorted.map(([id, score]) => `
        <div class="diagnostic-score-row">
          <span>${diagnosticData.mechanisms[id] || id}</span>
          <strong>${score.toFixed(1)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}


function setupModeSelector() {
  document.querySelectorAll('#hotspots [id^="mode-"]').forEach((btn) => {
    btn.style.cursor = "pointer";
    btn.style.pointerEvents = "all";

    btn.addEventListener("click", (event) => {
      event.stopPropagation();

      currentMode = btn.id.replace("mode-", "");
if (currentMode === "external" || currentMode === "internal") {
  previousAnatomyMode = currentMode;
}

currentMode = btn.id.replace("mode-", "");

if (currentMode === "external" || currentMode === "internal") {
  previousAnatomyMode = currentMode;
}

saveDiagnosticState();
updateDiagnosticMode();
updateModeButtons();
restorePanelAfterModeSwitch();

    });
  });

  updateModeButtons();
}


function restorePanelAfterModeSwitch() {
  const anatomyMode = getAnatomyMode();

  if (
    currentOrganId &&
    (
      currentOrganId === "zone-wound" ||
      (anatomyMode === "external" &&
        (currentOrganId === "zone-skin" || currentOrganId === "zone-fin")) ||
      (anatomyMode === "internal" &&
        currentOrganId !== "zone-skin" &&
        currentOrganId !== "zone-fin" &&
        currentOrganId !== "zone-wound")
    )
  ) {
    openOrganPanel(currentOrganId);
    return;
  }

  if (anatomyMode === "external") {
    openOrganPanel("zone-skin");
    return;
  }

  document.getElementById("organ-title").textContent = t.chooseOrgan;
  document.getElementById("organ-panel").innerHTML = t.clickOrgan;
}


function updateModeButtons() {
  ["external", "internal", "native", "stained"].forEach((mode) => {
    document.getElementById(`mode-${mode}`)?.classList.remove("mode-active");
    document.getElementById(mode)?.classList.remove("mode-active");
  });

  const anatomyMode = getAnatomyMode();

  document.getElementById(`mode-${anatomyMode}`)?.classList.add("mode-active");
  document.getElementById(anatomyMode)?.classList.add("mode-active");

  if (currentMode === "native" || currentMode === "stained") {
    document.getElementById(`mode-${currentMode}`)?.classList.add("mode-active");
    document.getElementById(currentMode)?.classList.add("mode-active");
  }


}

function getCurrentDataSource() {
  if (currentMode === "native") {
    return diagnosticData.microscopy_native || {};
  }

  if (currentMode === "stained") {
    return diagnosticData.microscopy_stained || {};
  }

  return diagnosticData.organs;
}



function resetOrganPanel() {
  currentOrganId = null;

  const anatomyMode = getAnatomyMode();

  if (anatomyMode === "external") {
    openOrganPanel("zone-skin");
    return;
  }

  document.getElementById("organ-title").textContent = t.chooseOrgan;
  document.getElementById("organ-panel").innerHTML = t.clickOrgan;
}




function updateDiagnosticMode() {
  const organsLayer = document.getElementById("organs");
  const hotspotsLayer = document.getElementById("hotspots");

  const anatomyMode =
    currentMode === "external" || currentMode === "internal"
      ? currentMode
      : previousAnatomyMode || "external";

  if (hotspotsLayer) {
    hotspotsLayer.style.display = "inline";
    hotspotsLayer.style.pointerEvents = "auto";
  }

  if (organsLayer) {
    organsLayer.style.display =
      anatomyMode === "internal" ? "inline" : "none";

    organsLayer.style.pointerEvents = "none";
  }

  document.querySelectorAll('[id^="effect-"]').forEach((effect) => {
    const finNotSelected =
      !selectedByOrgan["zone-fin"] ||
      selectedByOrgan["zone-fin"].referenceId === "effect-fin_normal";

    const isFinLayer =
      effect.id === "effect-fin_normal" ||
      effect.id === "effect-fin_damage";

    const shouldShowFin =
      isFinLayer &&
      (
        selectedEffects.has(effect.id) ||
        (finNotSelected && effect.id === "effect-fin_normal")
      );

    const shouldShowSkinEffect =
      anatomyMode === "external" &&
      !isFinLayer &&
      selectedEffects.has(effect.id);

    effect.style.display =
      shouldShowFin || shouldShowSkinEffect ? "inline" : "none";

    effect.style.pointerEvents = "none";
  });

  document.querySelectorAll('[id^="zone-"]').forEach((zone) => {
    const active =
      (anatomyMode === "external" &&
        (zone.id === "zone-skin" || zone.id === "zone-fin")) ||

      (anatomyMode === "internal" &&
        zone.id !== "zone-skin" &&
        zone.id !== "zone-fin" &&
  zone.id !== "zone-wound");

    zone.style.pointerEvents = active ? "all" : "none";
    zone.style.cursor = active ? "pointer" : "default";

    zone.querySelectorAll("*").forEach((child) => {
      child.style.pointerEvents = active ? "all" : "none";
    });
  });

const woundZone = document.getElementById("zone-wound");

if (woundZone) {
  const woundSelected = selectedEffects.has("effect-wound");

  woundZone.style.display = woundSelected ? "inline" : "none";
  woundZone.style.pointerEvents = woundSelected ? "all" : "none";
  woundZone.style.cursor = woundSelected ? "pointer" : "default";
}

}



function getAnatomyMode() {
  if (currentMode === "external" || currentMode === "internal") {
    return currentMode;
  }

  return previousAnatomyMode || "external";
}

// НЕ переносим hotspots через appendChild
// порядок слоёв задаётся в самом SVG/Inkscape

function syncSelectedEffects() {
  selectedEffects.clear();

  Object.entries(selectedByOrgan).forEach(([organId, selected]) => {
    const organ = diagnosticData.organs[organId];
    if (!organ) return;

    const reference = organ.references.find((ref) => {
      return ref.id === selected.referenceId;
    });

    if (!reference) return;

    if (reference.id.startsWith("effect-")) {
      selectedEffects.add(reference.id);
    }
  });
}


function renderObservationText() {
  const container = document.getElementById("observation-text");
  if (!container) return;

  const items = Object.entries(selectedByOrgan);

  if (items.length === 0) {
    container.innerHTML = t.nothingSelected;
    return;
  }

  container.innerHTML = `
    <ul class="observation-text-list">
      ${items.map(([organId, selected]) => {
        const organ = diagnosticData.organs[organId];
        const organTitle = organ?.title || organId;

        const reference = organ?.references.find((ref) => {
          return ref.id === selected.referenceId;
        });

const imageName = reference?.image
  ? reference.image.replace(/\.[^/.]+$/, "")
  : selected.referenceId;

return `<li><strong>${organId}</strong> — <code>${imageName}</code></li>`;
      }).join("")}
    </ul>
  `;
}


function clearDiagnosticSelections() {
  localStorage.removeItem("fossaDiagnosticState");

  Object.keys(selectedByOrgan).forEach(key => {
    delete selectedByOrgan[key];
  });

  selectedEffects.clear();

  updateDiagnosticMode();
  renderSelectedObservations();
  renderMechanismScores();
renderPatterns();
  renderObservationText();
}



function getSelectionKey(organId) {
  if (currentMode === "native" || currentMode === "stained") {
    return `${currentMode}:${organId}`;
  }

  return organId;
}

function initModeTooltips() {
  let tooltip = document.getElementById("diagnostic-tooltip");

  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "diagnostic-tooltip";
    document.body.appendChild(tooltip);
  }
  const tips = {
  "mode-external": `
    <strong>${t.tooltipExternalTitle}</strong><br>
    ${t.tooltipExternalText}
  `,

  "mode-internal": `
    <strong>${t.tooltipInternalTitle}</strong><br>
    ${t.tooltipInternalText}
  `,

  "mode-native": `
    <strong>${t.tooltipNativeTitle}</strong><br>
    ${t.tooltipNativeText}
  `,

  "mode-stained": `
    <strong>${t.tooltipStainedTitle}</strong><br>
    ${t.tooltipStainedText}
  `
};

  Object.entries(tips).forEach(([id, text]) => {

    const el = document.getElementById(id);

    if (!el) return;

    el.addEventListener("mouseenter", (e) => {

      tooltip.innerHTML = text;

      tooltip.style.left = `${e.clientX + 15}px`;
      tooltip.style.top  = `${e.clientY + 15}px`;

      tooltip.style.opacity = "1";
      tooltip.style.transform = "translateY(0)";
    });

    el.addEventListener("mousemove", (e) => {

      tooltip.style.left = `${e.clientX + 15}px`;
      tooltip.style.top  = `${e.clientY + 15}px`;
    });

    el.addEventListener("mouseleave", () => {

      tooltip.style.opacity = "0";
      tooltip.style.transform = "translateY(4px)";
    });
  });
}

function getSelectedPatternKeys() {
  return Object.entries(selectedByOrgan).map(([selectionKey, selected]) => {
    const organId =
      selected.organId || selectionKey.replace(/^(native|stained):/, "");

    if (selected.mode === "native" || selected.mode === "stained") {
      return `${selected.mode}:${organId}:${selected.referenceId}`;
    }

    return `${organId}:${selected.referenceId}`;
  });
}

function matchesPatternGroup(group, selectedKeys) {
  if (!group) return false;

  if (group.all) {
    return group.all.every((key) => selectedKeys.has(key));
  }

  if (group.any) {
    return group.any.some((variant) => {
      if (Array.isArray(variant)) {
        return variant.every((key) => selectedKeys.has(key));
      }

      return selectedKeys.has(variant);
    });
  }

  return false;
}

function renderPatterns() {
  const container = document.getElementById("diagnostic-patterns");
  if (!container) return;

  const selectedKeys = new Set(getSelectedPatternKeys());
  const patterns = diagnosticData.patterns || [];

  const matched = patterns
    .map((pattern) => {

if (
  pattern.id === "intracellular_parasites_pattern" &&
  selectedKeys.has("stained:zone-spleen:acid_fast_bacteria")
) {
  return null;
}

      const mainMatched = matchesPatternGroup(pattern.match, selectedKeys);
      if (!mainMatched) return null;

      const reinforced = matchesPatternGroup(pattern.reinforcement, selectedKeys);

      return {
        ...pattern,
        reinforced
      };
    })
    .filter(Boolean);

  if (matched.length === 0) {
    container.innerHTML = t.noPatterns;
    return;
  }

  container.innerHTML = matched.map((pattern) => `
    <div class="diagnostic-pattern">
      <h3>${pattern.title}${pattern.reinforced ? t.confirmation : ""}</h3>
      <p>${pattern.meaning}</p>

      <strong>${t.nextSteps}</strong>
      <ul>
        ${(pattern.next_steps || []).map((step) => `<li>${step}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function initDiagnosticHelp() {
  const btn = document.getElementById("diagnostic-help-btn");
  const modal = document.getElementById("diagnostic-help-modal");
  const close = document.getElementById("diagnostic-help-close");

  if (!btn || !modal || !close) return;

  btn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.remove("show");
    }
  });
}


