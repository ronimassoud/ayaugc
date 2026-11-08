// Optional. Keeps the footer year current on the Systeme.io funnel pages.
document.querySelectorAll("[data-aya-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
