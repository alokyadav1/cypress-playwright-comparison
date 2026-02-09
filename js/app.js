import { pages, pageTemplates } from "./data.js";
import { initPerformanceChart, initBrowserChart } from "./charts.js";

const state = {
  currentPage: "page1", // Default page
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
}

// Global expose for sidebar link (if any inline onclick remains)
window.switchPage = switchPage;

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderPage();
});
