// ── Live coordinate ticker (decorative)
const coords = [
  "51.5074° N, 0.1278° W",
  "48.8566° N, 2.3522° E",
  "35.6762° N, 139.6503° E",
  "1.3521° N, 103.8198° E",
  "40.7128° N, 74.0060° W",
  "28.6139° N, 77.2090° E",
];

let coordIndex = 0;
const coordEl = document.getElementById("live-coords");

if (coordEl) {
  setInterval(() => {
    coordIndex = (coordIndex + 1) % coords.length;
    coordEl.style.opacity = "0";
    setTimeout(() => {
      coordEl.textContent = coords[coordIndex];
      coordEl.style.opacity = "1";
    }, 300);
  }, 3000);
  coordEl.style.transition = "opacity 0.3s";
}

// ── Filter logic (research page)
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".r-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all in same group
    const group = btn.closest(".filter-group");
    if (group) {
      group.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    } else {
      filterBtns.forEach(b => b.classList.remove("active"));
    }
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    // Collect all active filters across groups
    const activeFilters = Array.from(document.querySelectorAll(".filter-btn.active"))
      .map(b => b.dataset.filter)
      .filter(f => f && f !== "all");

    cards.forEach(card => {
      const tags = card.dataset.tags || "";
      if (activeFilters.length === 0 || filter === "all") {
        card.classList.remove("hidden");
      } else {
        const matches = activeFilters.every(f => tags.includes(f));
        card.classList.toggle("hidden", !matches);
      }
    });
  });
});