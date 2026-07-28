import { quiz, scaleNames, recommendations } from "./questions.js";

let current = 0;
let scores = {};
let maxScores = {};
let thinkingCounts = {};
let answered = false;
let sessionQuestionCount = 0;

const root = document.getElementById("reasoning-quiz");
const QUESTIONS_PER_RUN = 15;
const lang = document.documentElement.lang.startsWith("en") ? "en" : "ru";
let lockedCardHeight = 0;
let cardResizeObserver = null;

const ui = {
  progress: {
    ru: (currentNumber, total) => `Вопрос ${currentNumber} из ${total}`,
    en: (currentNumber, total) => `Question ${currentNumber} of ${total}`
  },
  next: { ru: "Далее", en: "Next" },
  finish: { ru: "Завершить", en: "Finish" },
  count: {
    ru: count => {
      const last = count % 10;
      const lastTwo = count % 100;

      if (last === 1 && lastTwo !== 11) return `${count} раз`;
      if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return `${count} раза`;
      return `${count} раз`;
    },
    en: count => `${count} ${count === 1 ? "time" : "times"}`
  },
  levels: {
    strong: { ru: "сильная сторона", en: "strong area" },
    stable: { ru: "устойчиво", en: "stable" },
    attention: { ru: "требует внимания", en: "needs attention" },
    growth: { ru: "важная зона роста", en: "important growth area" }
  },
  resultReadyTitle: {
    ru: "Профиль рассуждений готов",
    en: "Reasoning profile ready"
  },
  resultReadyText: {
    ru: "Это не оценка знаний и не экзаменационная отметка. Результат показывает, какие элементы рассуждения проявились в ответах.",
    en: "This is not a knowledge score or an exam grade. The result shows which elements of reasoning appeared in your answers."
  },
  showProfile: { ru: "Показать профиль", en: "Show profile" },
  mainTraps: { ru: "Основные ловушки в ответах", en: "Main reasoning traps in your answers" },
  noTraps: {
    ru: "Вы редко переходили от наблюдений к неподтверждённым выводам.",
    en: "You rarely moved from observations to unsupported conclusions."
  },
  strengths: { ru: "Сильные стороны", en: "Strengths" },
  strengthObservation: {
    ru: "Вы хорошо удерживаетесь на уровне наблюдения.",
    en: "You stayed well anchored at the observation level."
  },
  strengthHypothesis: {
    ru: "Вы формулируете гипотезы без преждевременного превращения их в диагноз.",
    en: "You formulated hypotheses without prematurely turning them into diagnoses."
  },
  strengthCaution: {
    ru: "Вы сохраняете осторожность в выводах.",
    en: "You kept your conclusions cautious."
  },
  noStrengths: {
    ru: "Сильные стороны пока проявились точечно: полезно посмотреть, какие формулировки чаще уводили от наблюдения к выводу.",
    en: "Your strengths appeared in specific places so far: it is useful to review which formulations most often moved you from observation to conclusion."
  },
  recommended: { ru: "Рекомендуемые материалы", en: "Recommended reading" },
  recommendedText: {
    ru: "Эти тексты помогают разобрать принципы, на которых основаны задания.",
    en: "These texts explain the principles behind the tasks."
  },
  whatNext: { ru: "Что дальше?", en: "What next?" },
  whatNextText: {
    ru: "Можно переходить к более сложным заданиям: микроскопии, бактериологии и клиническим сценариям.",
    en: "You can move on to more complex tasks: microscopy, bacteriology, and clinical scenarios."
  },
  profileTitle: { ru: "Ваш профиль рассуждений", en: "Your reasoning profile" },
  profileIntro: {
    ru: "Это не итог. Это отправная точка. Диагностика начинается не с названия болезни, а с качества наблюдения и осторожности вывода.",
    en: "This is not a final verdict. It is a starting point. Diagnostics does not begin with the name of a disease, but with the quality of observation and caution in drawing conclusions."
  },
  draftProfile: { ru: "Черновой профиль рассуждения", en: "Draft reasoning profile" },
  draftProfileText: {
    ru: "Ниже показан черновой профиль по отдельным сторонам рассуждения. Он зависит от набора вопросов, попавших в текущую сессию.",
    en: "Below is a draft profile across several aspects of reasoning. It depends on the set of questions included in the current session."
  },
  restart: { ru: "Пройти ещё раз", en: "Try again" }
};

function localText(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || value.ru || "";
  }

  return value || "";
}

const thinkingLabels = {
  observation: { ru: "Корректное наблюдение", en: "Correct observation" },
  hypothesis: { ru: "Допустимая гипотеза", en: "Acceptable hypothesis" },
  interpretation: { ru: "Интерпретация", en: "Interpretation" },
  premature_conclusion: { ru: "Преждевременный вывод", en: "Premature conclusion" },
  premature_decision: { ru: "Преждевременное решение", en: "Premature decision" },
  authority: { ru: "Апелляция к авторитету", en: "Appeal to authority" },
  survivorship: { ru: "Ошибка выжившего", en: "Survivorship bias" },
  causality_error: { ru: "Подмена последовательности причинностью", en: "Mistaking sequence for causality" },
  method_error: { ru: "Ошибка понимания метода", en: "Misunderstanding the method" },
  data_limit: { ru: "Недостаточность данных", en: "Insufficient data" }
};

const problemThinkingKeys = [
  "premature_conclusion",
  "premature_decision",
  "authority",
  "survivorship",
  "causality_error",
  "method_error",
  "data_limit"
];

const thinkingRecommendations = {
  premature_conclusion: [
    ["Fossa Method", { ru: "/ru/posts/fossa-method/", en: "/en/posts/fossa-method/" }],
    [{ ru: "Летающий слон", en: "The Flying Elephant" }, { ru: "/ru/posts/elephantfly/", en: "/en/posts/elephantfly/" }]
  ],
  premature_decision: [
    ["Fossa Method", { ru: "/ru/posts/fossa-method/", en: "/en/posts/fossa-method/" }]
  ],
  authority: [
    [{ ru: "Научный метод", en: "Scientific Method" }, { ru: "/ru/posts/scientific-method/", en: "/en/posts/scientific-method/" }],
    [{ ru: "Летающий слон", en: "The Flying Elephant" }, { ru: "/ru/posts/elephantfly/", en: "/en/posts/elephantfly/" }]
  ],
  survivorship: [
    [{ ru: "Летающий слон", en: "The Flying Elephant" }, { ru: "/ru/posts/elephantfly/", en: "/en/posts/elephantfly/" }]
  ],
  causality_error: [
    [{ ru: "Летающий слон", en: "The Flying Elephant" }, { ru: "/ru/posts/elephantfly/", en: "/en/posts/elephantfly/" }]
  ],
  method_error: [
    [{ ru: "Диагностический конструктор", en: "Diagnostic Constructor" }, { ru: "/ru/tools/", en: "/en/tools/" }]
  ],
  data_limit: [
    ["Fossa Method", { ru: "/ru/posts/fossa-method/", en: "/en/posts/fossa-method/" }]
  ]
};

function shuffleArray(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function createQuizOrder() {
  const questions = shuffleArray(quiz).slice(0, Math.min(QUESTIONS_PER_RUN, quiz.length));
  sessionQuestionCount = questions.length;
  return questions;
}

let quizOrder = createQuizOrder();


function calculateMaxScores() {
  maxScores = {};

  Object.keys(scaleNames).forEach(key => {
    maxScores[key] = 0;
  });

  quizOrder.forEach(q => {
    Object.keys(scaleNames).forEach(key => {
      const best = Math.max(...q.answers.map(a => a.scores[key] || 0));
      maxScores[key] += best;
    });
  });
}

function addScores(answer) {
  Object.entries(answer.scores).forEach(([key, value]) => {
    scores[key] = (scores[key] || 0) + value;
  });
}

function addThinking(answer) {
  const key = answer.thinking || "unknown";
  thinkingCounts[key] = (thinkingCounts[key] || 0) + 1;
}

function getProblemThinkingEntries() {
  return problemThinkingKeys
    .map(key => ({
      key,
      label: thinkingLabels[key][lang],
      count: thinkingCounts[key] || 0
    }))
    .filter(item => item.count > 0);
}

function getProblemThinkingTotal() {
  return problemThinkingKeys.reduce((sum, key) => sum + (thinkingCounts[key] || 0), 0);
}

function formatCount(count) {
  return ui.count[lang](count);
}

function addUniqueLink(links, item) {
  if (!links.some(x => localText(x[1]) === localText(item[1]))) {
    links.push(item);
  }
}

function fadeRender(callback, options = {}) {
  root.classList.add("rq-fade-out");

  setTimeout(() => {
    callback();

    if (options.scrollToTop) {
      scrollQuizToTop();
    }

    root.classList.remove("rq-fade-out");
    root.classList.add("rq-fade-in");

    setTimeout(() => {
      root.classList.remove("rq-fade-in");
    }, 250);
  }, 180);
}

function getMotionBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function getQuizTopOffset() {
  return window.matchMedia("(max-width: 640px)").matches ? 10 : 24;
}

function scrollQuizToTop() {
  requestAnimationFrame(() => {
    const top = root.getBoundingClientRect().top + window.scrollY - getQuizTopOffset();

    window.scrollTo({
      top: Math.max(0, top),
      behavior: getMotionBehavior()
    });
  });
}

function scrollElementIntoComfortView(element) {
  if (!element) return;

  requestAnimationFrame(() => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const topLimit = getQuizTopOffset();
    const bottomLimit = viewportHeight - (window.matchMedia("(max-width: 640px)").matches ? 92 : 36);
    let delta = 0;

    if (rect.bottom > bottomLimit) {
      delta = rect.bottom - bottomLimit;
    } else if (rect.top < topLimit) {
      delta = rect.top - topLimit;
    }

    if (delta !== 0) {
      window.scrollBy({
        top: delta,
        behavior: getMotionBehavior()
      });
    }
  });
}

function updateLockedCardHeight() {
  const card = root.querySelector(".rq-card");

  if (!card) return;

  if (lockedCardHeight > 0) {
    card.style.minHeight = `${lockedCardHeight}px`;
  }

  const height = Math.ceil(card.getBoundingClientRect().height);

  if (height > lockedCardHeight) {
    lockedCardHeight = height;
    card.style.minHeight = `${lockedCardHeight}px`;
  }
}

function stabilizeCardHeight() {
  const card = root.querySelector(".rq-card");

  if (!card) return;

  if (lockedCardHeight > 0) {
    card.style.minHeight = `${lockedCardHeight}px`;
  }

  if ("ResizeObserver" in window) {
    if (!cardResizeObserver) {
      cardResizeObserver = new ResizeObserver(updateLockedCardHeight);
    }

    cardResizeObserver.disconnect();
    cardResizeObserver.observe(card);
  }

  requestAnimationFrame(() => {
    updateLockedCardHeight();
    requestAnimationFrame(updateLockedCardHeight);
  });
}

function renderQuestion() {
  answered = false;
  const q = quizOrder[current];
const answers = shuffleArray(q.answers);


  root.innerHTML = `
    <div class="rq-card">
      <div class="rq-progress">${ui.progress[lang](current + 1, sessionQuestionCount)}</div>

      <h2>${q.title[lang]}</h2>

    ${
  q.image
    ? `
      <figure class="rq-figure ${q.mediaType === "microscope" ? "rq-microscope" : ""}">
        <img class="rq-image" src="${q.image}" alt="">
        ${localText(q.caption) ? `<figcaption>${q.caption[lang]}</figcaption>` : ""}
      </figure>
    `
    : ""
}

      <p class="rq-question">${q.text[lang]}</p>

      <div class="rq-answers">
        ${answers.map((a, i) => `
          <button class="rq-answer" data-index="${i}">
            <span>${a.text[lang]}</span>
          </button>
        `).join("")}
      </div>

      <div id="rq-explain"></div>
    </div>
  `;

  stabilizeCardHeight();

  document.querySelectorAll(".rq-answer").forEach(btn => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const answer = answers[Number(btn.dataset.index)];
      addScores(answer);
      addThinking(answer);

      document.querySelectorAll(".rq-answer").forEach(b => {
        b.disabled = true;
      });

      btn.classList.add("selected");

      document.getElementById("rq-explain").innerHTML = `
        <div class="rq-explain ${answer.tone}">
          <div class="rq-level">${answer.level[lang]}</div>
          <p>${answer.explain[lang]}</p>

          <button id="rq-next">
            ${current + 1 < quizOrder.length ? ui.next[lang] : ui.finish[lang]}
          </button>
        </div>
      `;

      stabilizeCardHeight();
      scrollElementIntoComfortView(document.querySelector(".rq-explain"));

      document.getElementById("rq-next").addEventListener("click", () => {
        current++;

        if (current < quizOrder.length) {
          fadeRender(renderQuestion, { scrollToTop: true });
        } else {
          fadeRender(renderResultIntro, { scrollToTop: true });
        }
      });
    });
  });
}

function getLevel(percent) {
  if (percent >= 80) return ui.levels.strong[lang];
  if (percent >= 55) return ui.levels.stable[lang];
  if (percent >= 30) return ui.levels.attention[lang];
  return ui.levels.growth[lang];
}

function renderResultIntro() {
  root.innerHTML = `
    <div class="rq-card">
      <h2>${ui.resultReadyTitle[lang]}</h2>

      <p>
        ${ui.resultReadyText[lang]}
      </p>

      <button id="rq-show-result">${ui.showProfile[lang]}</button>
    </div>
  `;

  stabilizeCardHeight();

  document.getElementById("rq-show-result").addEventListener("click", () => {
    fadeRender(renderResult, { scrollToTop: true });
  });
}

function renderResult() {
  const rows = Object.entries(scaleNames).map(([key, name]) => {
    const value = scores[key] || 0;
    const max = maxScores[key] || 1;
    const percent = Math.round((value / max) * 100);
    const level = getLevel(percent);

    return `
      <div class="rq-scale">
        <div class="rq-scale-label">
          <span>${name[lang]}</span>
          <span>${level}</span>
        </div>

        <div class="rq-bar">
          <div class="rq-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }).join("");

  const problemEntries = getProblemThinkingEntries();
  const problemTotal = getProblemThinkingTotal();
  const trapBlock = problemEntries.length
    ? `
      <div class="rq-thinking-block">
        <h3>${ui.mainTraps[lang]}</h3>
        <ul class="rq-thinking-list">
          ${problemEntries.map(item => `
            <li>
              <span>${item.label}</span>
              <span>${formatCount(item.count)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `
    : `
      <div class="rq-thinking-block">
        <h3>${ui.mainTraps[lang]}</h3>
        <p>${ui.noTraps[lang]}</p>
      </div>
    `;

  const strengths = [];

  if ((thinkingCounts.observation || 0) >= Math.ceil(sessionQuestionCount * 0.35)) {
    strengths.push(ui.strengthObservation[lang]);
  }

  if ((thinkingCounts.hypothesis || 0) >= 2) {
    strengths.push(ui.strengthHypothesis[lang]);
  }

  if (problemTotal <= Math.max(2, Math.floor(sessionQuestionCount * 0.2))) {
    strengths.push(ui.strengthCaution[lang]);
  }

  const strengthBlock = strengths.length
    ? `
      <div class="rq-thinking-block">
        <h3>${ui.strengths[lang]}</h3>
        <ul class="rq-strength-list">
          ${strengths.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `
    : `
      <div class="rq-thinking-block">
        <h3>${ui.strengths[lang]}</h3>
        <p>${ui.noStrengths[lang]}</p>
      </div>
    `;

  const weakKeys = Object.keys(scaleNames).filter(key => {
    const percent = Math.round(((scores[key] || 0) / (maxScores[key] || 1)) * 100);
    return percent < 60;
  });

  const links = [];

  weakKeys.forEach(key => {
    (recommendations[key] || []).forEach(item => {
      addUniqueLink(links, item);
    });
  });

  problemEntries.forEach(({ key }) => {
    (thinkingRecommendations[key] || []).forEach(item => {
      addUniqueLink(links, item);
    });
  });

  const recBlock = links.length
    ? `
      <h3>${ui.recommended[lang]}</h3>
      <p>${ui.recommendedText[lang]}</p>

      <ul class="rq-links">
        ${links.map(([title, url]) => `
          <li><a href="${localText(url)}">${localText(title)}</a></li>
        `).join("")}
      </ul>
    `
    : `
      <h3>${ui.whatNext[lang]}</h3>
      <p>
        ${ui.whatNextText[lang]}
      </p>
    `;

  root.innerHTML = `
    <div class="rq-card">
      <h2>${ui.profileTitle[lang]}</h2>

      <p>
        ${ui.profileIntro[lang]}
      </p>

      ${trapBlock}

      ${strengthBlock}

      <div class="rq-scale-section">
        <h3>${ui.draftProfile[lang]}</h3>
        <p>
          ${ui.draftProfileText[lang]}
        </p>

        ${rows}
      </div>

      ${recBlock}

      <button id="rq-restart">${ui.restart[lang]}</button>
    </div>
  `;

  stabilizeCardHeight();

  setTimeout(() => {
    document.querySelectorAll(".rq-fill").forEach(el => {
      const width = el.style.width;
      el.style.width = "0";

      setTimeout(() => {
        el.style.width = width;
      }, 80);
    });
  }, 50);

document.getElementById("rq-restart").addEventListener("click", () => {
  current = 0;
  scores = {};
  thinkingCounts = {};
  quizOrder = createQuizOrder();
  calculateMaxScores();
  lockedCardHeight = 0;
  fadeRender(renderQuestion, { scrollToTop: true });
});
}

const style = document.createElement("style");

style.textContent = `
  #reasoning-quiz {
    max-width: 780px;
    margin: 2rem auto;
    scroll-margin-top: 24px;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  #reasoning-quiz.rq-fade-out {
    opacity: 0;
    transform: translateY(8px);
  }

  #reasoning-quiz.rq-fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .rq-card {
    box-sizing: border-box;
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 1.5rem;
    background: var(--entry);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .rq-card h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .rq-progress {
    opacity: 0.7;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  .rq-figure {
    margin: 1rem 0;
  }

  .rq-image {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    object-position: center;
    border-radius: 14px;
    background: rgba(128,128,128,0.08);
  }

  .rq-figure figcaption {
    margin-top: 0.45rem;
    font-size: 0.9rem;
    opacity: 0.7;
    text-align: center;
  }

  .rq-question {
    font-size: 1.15rem;
    line-height: 1.6;
  }

  .rq-answers {
    display: grid;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  .rq-answer {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(180, 220, 255, 0.18);
    border-radius: 12px;
    padding: 0.85rem 1rem;
    background: var(--theme);
    color: var(--primary);
    cursor: pointer;
    text-align: left;
    font-size: 1rem;
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .rq-answer::before {
    content: "";
    position: absolute;
    inset: -60%;
    z-index: 0;
    opacity: 0;
    pointer-events: none;
    border-radius: inherit;

    background: conic-gradient(
      transparent 0deg,
      transparent 255deg,
      rgba(90, 170, 255, 0.95) 300deg,
      transparent 345deg,
      transparent 360deg
    );

    animation: rq-answer-border-rotate 2.2s linear infinite;
    transition: opacity 0.18s ease;
  }

  .rq-answer::after {
    content: "";
    position: absolute;
    inset: 1px;
    z-index: 1;
    pointer-events: none;
    border-radius: inherit;
    background: var(--theme);
  }

  .rq-answer span {
    position: relative;
    z-index: 2;
  }

  .rq-answer:hover {
    transform: translateX(4px);
    border-color: rgba(90, 170, 255, 0.55);
  }

  .rq-answer:hover::before,
  .rq-answer.selected::before {
    opacity: 1;
  }

  .rq-answer.selected {
    border-color: rgba(90, 170, 255, 0.85);
    box-shadow: 0 0 0 3px rgba(90, 170, 255, 0.18);
  }

  .rq-answer:disabled {
    cursor: default;
    opacity: 0.85;
  }

  @keyframes rq-answer-border-rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .rq-explain {
    margin-top: 1.2rem;
    padding: 1rem;
    border-radius: 12px;
    background: rgba(128,128,128,0.12);
    border-left: 4px solid rgba(128,128,128,0.5);
  }

  .rq-explain.good {
    border-left-color: #4caf50;
  }

  .rq-explain.warn {
    border-left-color: #ffc107;
  }

  .rq-explain.bad {
    border-left-color: #f44336;
  }

  .rq-level {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  #rq-next,
  #rq-restart,
  #rq-show-result {
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.85rem 1rem;
    margin-top: 1rem;
    background: var(--theme);
    color: var(--primary);
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
  }

  #rq-next:hover,
  #rq-restart:hover,
  #rq-show-result:hover {
    filter: brightness(1.08);
  }

  .rq-thinking-block {
    margin-top: 1.4rem;
    padding-top: 0.2rem;
  }

  .rq-thinking-block h3,
  .rq-scale-section h3 {
    margin-bottom: 0.5rem;
  }

  .rq-thinking-list,
  .rq-strength-list {
    display: grid;
    gap: 0.55rem;
    margin-top: 0.7rem;
    padding-left: 1.2rem;
  }

  .rq-thinking-list li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .rq-thinking-list li span:last-child {
    white-space: nowrap;
    opacity: 0.72;
  }

  .rq-scale-section {
    margin-top: 1.6rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    opacity: 0.86;
  }

  .rq-scale {
    margin: 1.2rem 0;
  }

  .rq-scale-label {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }

  .rq-bar {
    height: 12px;
    border-radius: 999px;
    background: rgba(128,128,128,0.2);
    overflow: hidden;
  }

  .rq-fill {
    height: 100%;
    width: 0;
    background: var(--primary);
    transition: width 0.9s ease;
  }

  .rq-links {
    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    #reasoning-quiz {
      margin: 0.75rem auto 1rem;
      scroll-margin-top: 10px;
    }

    .rq-card {
      min-height: calc(100vh - 1.5rem);
      min-height: calc(100svh - 1.5rem);
      padding: 1rem;
      border-radius: 14px;
    }

    .rq-question {
      font-size: 1.05rem;
    }

    .rq-scale-label {
      display: block;
    }

    .rq-thinking-list li {
      display: block;
    }
  }
.rq-microscope {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
}

.rq-microscope .rq-image {
  animation: rqMicroscopeFocus 0.65s ease forwards;
}

.rq-microscope::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  border-radius: inherit;
  background:
    radial-gradient(
      circle at center,
      transparent 0%,
      transparent 46%,
      rgba(0, 0, 0, 0.25) 58%,
      rgba(0, 0, 0, 0.55) 100%
    );
  opacity: 0;
  animation: rqMicroscopeVignette 0.7s ease forwards;
}

.rq-microscope::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(180, 220, 255, 0.18) 48%,
    rgba(180, 220, 255, 0.22) 50%,
    transparent 54%,
    transparent 100%
  );
  transform: translateY(-100%);
  animation: rqMicroscopeScan 0.7s ease forwards;
}

@keyframes rqMicroscopeFocus {
  0% {
    filter: blur(10px) contrast(0.9);
    transform: scale(1.04);
    opacity: 0.65;
  }

  45% {
    filter: blur(4px) contrast(1);
    transform: scale(1.02);
    opacity: 0.9;
  }

  100% {
    filter: blur(0) contrast(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes rqMicroscopeVignette {
  0% {
    opacity: 0.9;
    clip-path: circle(18% at 50% 50%);
  }

  100% {
    opacity: 1;
    clip-path: circle(80% at 50% 50%);
  }
}

@keyframes rqMicroscopeScan {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  35% {
    opacity: 1;
  }

  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

`;

document.head.appendChild(style);

calculateMaxScores();
renderQuestion();
