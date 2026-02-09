export function initPerformanceChart() {
  const canvas = document.getElementById("perfChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Local Runner", "CI (4 workers)", "CI (8 workers)"],
      datasets: [
        {
          label: "Cypress",
          data: [52, 38, 35],
          backgroundColor: "#4F46E5",
          borderRadius: 6,
        },
        {
          label: "Playwright",
          data: [38, 14, 8],
          backgroundColor: "#F43F5E",
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Time (s)", font: { size: 10 } },
        },
      },
    },
  });
}

export function initBrowserChart() {
  const canvas = document.getElementById("browserChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Chromium", "Firefox", "WebKit", "Edge", "Mobile App"],
      datasets: [
        {
          label: "Playwright",
          data: [100, 95, 100, 100, 30],
          borderColor: "#F43F5E",
          backgroundColor: "rgba(244, 63, 94, 0.1)",
          pointBackgroundColor: "#F43F5E",
        },
        {
          label: "Cypress",
          data: [100, 85, 45, 95, 10],
          borderColor: "#4F46E5",
          backgroundColor: "rgba(79, 70, 229, 0.1)",
          pointBackgroundColor: "#4F46E5",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { r: { suggestMin: 0, suggestMax: 100 } },
      plugins: { legend: { position: "bottom" } },
    },
  });
}
