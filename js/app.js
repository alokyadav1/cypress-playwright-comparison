import { pages, pageTemplates } from "./data.js";
import { initPerformanceChart, initBrowserChart } from "./charts.js";

const state = {
  apiKey: "", // Add Gemini API Key here
  currentPage: "page1",
};

function initNav() {
  const list = document.getElementById("nav-list");
  if (!list) return;

  list.innerHTML = pages
    .map(
      (p, i) => `
        <li data-page="${p.id}" class="px-8 py-4 cursor-pointer hover:bg-slate-50 flex items-center gap-4 transition-all ${state.currentPage === p.id ? "sidebar-active" : ""}">
            <span class="text-[10px] font-bold opacity-30">${(i + 1).toString().padStart(2, "0")}</span>
            ${p.title}
        </li>
    `,
    )
    .join("");

  // Event delegation for nav
  list.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => switchPage(li.dataset.page));
  });
}

function switchPage(id) {
  state.currentPage = id;
  initNav();
  renderPage();
  window.scrollTo(0, 0);
}

function renderPage() {
  const mount = document.getElementById("content-mount");
  if (!mount) return;

  mount.innerHTML = `<div class="transition-page">${pageTemplates[state.currentPage] || ""}</div>`;

  if (state.currentPage === "page3") initPerformanceChart();
  if (state.currentPage === "page4") initBrowserChart();
  if (state.currentPage === "ai-strategist") {
    const aiBtn = document.getElementById("ai-btn");
    if (aiBtn) aiBtn.addEventListener("click", askAI);
  }
}

async function askAI() {
  const input = document.getElementById("ai-input").value;
  const resBox = document.getElementById("ai-response");
  const btn = document.getElementById("ai-btn");

  if (!input || !resBox || !btn) return;

  btn.disabled = true;
  resBox.innerHTML = `
        <div class="space-y-4">
            <div class="h-4 w-full loading-shimmer rounded"></div>
            <div class="h-4 w-5/6 loading-shimmer rounded"></div>
            <div class="h-4 w-4/6 loading-shimmer rounded"></div>
        </div>`;

  const system =
    "You are a Principal Software Engineer and QA Architect. Analyze the user's constraints and provide a deep technical comparison between Cypress and Playwright. Focus on scalability, maintenance, TCO, and technical blockers. Use structured Markdown with bold headers.";
  const response = await callGemini(input, system);

  // Simple markdown to HTML conversion
  resBox.innerHTML = response
    .replace(/\n\g/, "<br/>")
    .replace(/### (.*)/g, '<h3 class="text-lg font-bold mt-4">$1</h3>')
    .replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>");

  btn.disabled = false;
}

async function callGemini(prompt, systemInstruction) {
  if (!state.apiKey) {
    return "<strong>Error:</strong> API Key is missing. Please add your Gemini API Key in <code>js/app.js</code>.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${state.apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error(err);
    return "System error: Failed to reach the architect model. Please check connection and API key.";
  }
}

// Global expose for sidebar link (if any inline onclick remains)
window.switchPage = switchPage;

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderPage();
});
