const root = document.getElementById("story-game");

let story = null;
let currentNode = null;
let flags = new Set();
let history = [];
let step = 1;

const ui = {
  loading: "Загрузка тренажёра...",
  loadError: "Не удалось загрузить игру.",
  missingNode: "Узел сценария не найден.",
  progress: value => `Шаг ${value}`,
  restart: "Начать заново",
  back: "Назад",
  final: "Разбор"
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function hasFlag(name) {
  return flags.has(name);
}

function normalizeConditions(conditions, key) {
  if (!conditions) return [];
  const list = Array.isArray(conditions) ? conditions : [conditions];

  return list
    .map(item => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object") return item[key] || item.ifCondition || item.notIfCondition;
      return "";
    })
    .filter(Boolean);
}

function optionIsAvailable(option) {
  const ifConditions = normalizeConditions(option.ifConditions || option.ifCondition, "ifCondition");
  const notIfConditions = normalizeConditions(option.notIfConditions || option.notIfCondition, "notIfCondition");

  return ifConditions.every(hasFlag) && notIfConditions.every(name => !hasFlag(name));
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function collectPassage(startNode) {
  const stitches = story?.data?.stitches || {};
  const parts = [];
  const visited = new Set();
  let nodeName = startNode;
  let options = [];
  let terminalNode = startNode;

  while (nodeName) {
    if (visited.has(nodeName)) break;
    visited.add(nodeName);

    const node = stitches[nodeName];
    if (!node) {
      parts.push({ type: "error", text: `${ui.missingNode}: ${nodeName}` });
      break;
    }

    terminalNode = nodeName;
    let divert = null;
    const nodeOptions = [];

    node.content.forEach(item => {
      if (typeof item === "string") {
        if (item.trim()) parts.push({ type: "text", text: item.trim() });
        return;
      }

      if (!isObject(item)) return;

      if (item.flagName) {
        flags.add(item.flagName);
      } else if (item.image) {
        parts.push({ type: "image", src: item.image });
      } else if (item.divert) {
        divert = item.divert;
      } else if (item.option && optionIsAvailable(item)) {
        nodeOptions.push(item);
      }
    });

    if (nodeOptions.length) {
      options = nodeOptions;
      break;
    }

    if (!divert) break;
    nodeName = divert;
  }

  return { parts: dedupeLeadTitle(parts), options, terminalNode };
}

function dedupeLeadTitle(parts) {
  if (parts.length < 2) return parts;
  const [first, second] = parts;

  if (
    first.type === "text" &&
    second.type === "text" &&
    first.text.replace(/\.$/, "") === second.text.split(/\n/)[0].replace(/\.$/, "")
  ) {
    return parts.slice(1);
  }

  return parts;
}

function renderTextBlock(text) {
  return text
    .split(/\n{2,}/)
    .map(block => {
      const lines = block.split("\n").map(line => line.trim()).filter(Boolean);
      const firstBullet = lines.findIndex(line => line.startsWith("- "));

      if (firstBullet >= 0) {
        const lead = lines.slice(0, firstBullet).join("<br>");
        const bullets = lines
          .slice(firstBullet)
          .filter(line => line.startsWith("- "))
          .map(line => `<li>${escapeHtml(line.replace(/^- /, ""))}</li>`)
          .join("");

        return `
          ${lead ? `<p>${escapeHtml(lead)}</p>` : ""}
          <ul class="sg-review-list">${bullets}</ul>
        `;
      }

      return `<p>${lines.map(escapeHtml).join("<br>")}</p>`;
    })
    .join("");
}

function renderPart(part) {
  if (part.type === "text") return renderTextBlock(part.text);

  if (part.type === "image") {
    return `
      <figure class="sg-figure">
        <img class="sg-image" src="${escapeHtml(part.src)}" alt="">
      </figure>
    `;
  }

  return `<p class="sg-error">${escapeHtml(part.text)}</p>`;
}

function render() {
  const { parts, options, terminalNode } = collectPassage(currentNode);
  const isFinal = terminalNode === "punctuatedStitch35" || options.length === 0;

  root.innerHTML = `
    <div class="sg-card">
      <div class="sg-progress">
        <span>${isFinal ? ui.final : ui.progress(step)}</span>
        <span>${escapeHtml(story.title || "")}</span>
      </div>

      <div class="sg-passage">
        ${parts.map(renderPart).join("")}
      </div>

      ${
        options.length
          ? `<div class="sg-options">
              ${options.map((option, index) => `
                <button class="sg-option" data-index="${index}">
                  <span>${escapeHtml(option.option)}</span>
                </button>
              `).join("")}
            </div>`
          : ""
      }

      <div class="sg-actions">
        ${history.length ? `<button class="sg-ghost" id="sg-back">${ui.back}</button>` : ""}
        <button class="sg-ghost" id="sg-restart">${ui.restart}</button>
      </div>
    </div>
  `;

  root.querySelectorAll(".sg-option").forEach(button => {
    button.addEventListener("click", () => {
      const option = options[Number(button.dataset.index)];
      history.push({
        node: currentNode,
        flags: [...flags],
        step
      });
      currentNode = option.linkPath;
      step += 1;
      fadeRender(render, true);
    });
  });

  const back = document.getElementById("sg-back");
  if (back) {
    back.addEventListener("click", () => {
      const previous = history.pop();
      currentNode = previous.node;
      flags = new Set(previous.flags);
      step = previous.step;
      fadeRender(render, true);
    });
  }

  document.getElementById("sg-restart").addEventListener("click", restart);
}

function fadeRender(callback, scrollToTop = false) {
  root.classList.add("sg-fade-out");

  setTimeout(() => {
    callback();
    root.classList.remove("sg-fade-out");
    root.classList.add("sg-fade-in");

    if (scrollToTop) {
      const offset = window.matchMedia("(max-width: 640px)").matches ? 10 : 24;
      const top = root.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    }

    setTimeout(() => root.classList.remove("sg-fade-in"), 220);
  }, 160);
}

function restart() {
  flags = new Set();
  history = [];
  step = 1;
  currentNode = story.data.initial;
  fadeRender(render, true);
}

async function init() {
  if (!root) return;

  root.innerHTML = `<div class="sg-card"><p>${ui.loading}</p></div>`;

  try {
    const source = root.dataset.storySrc || "/js/story-game/butterflyfish-3.json";
    const response = await fetch(source);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    story = await response.json();
    currentNode = story.data.initial;
    render();
  } catch (error) {
    root.innerHTML = `<div class="sg-card"><p class="sg-error">${ui.loadError}</p></div>`;
    console.error(error);
  }
}

init();
