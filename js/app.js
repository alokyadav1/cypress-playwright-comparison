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
  closeSidebar(); // Ensure sidebar closes on mobile after selection
  window.scrollTo(0, 0);
}

// Mobile Sidebar Logic
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("opacity-100"), 10);
  document.body.classList.add("overflow-hidden");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (!sidebar || !overlay) return;

  sidebar.classList.add("-translate-x-full");
  overlay.classList.remove("opacity-100");
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
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

  // Mobile Menu Event Listeners
  document
    .getElementById("mobile-menu-toggle")
    ?.addEventListener("click", openSidebar);
  document
    .getElementById("mobile-menu-close")
    ?.addEventListener("click", closeSidebar);
  document
    .getElementById("sidebar-overlay")
    ?.addEventListener("click", closeSidebar);
});
