const ACCENT = '#e8b84b';
const AC = { r:126, g:203, b:90 };

// ── Live coordinate ticker
const coords = [
  "51.5074° N, 0.1278° W","48.8566° N, 2.3522° E","35.6762° N, 139.6503° E",
  "1.3521° N, 103.8198° E","40.7128° N, 74.0060° W","28.6139° N, 77.2090° E",
];
let coordIndex = 0;
const coordEl = document.getElementById("live-coords");
if (coordEl) {
  coordEl.style.transition = "opacity 0.3s";
  setInterval(() => {
    coordIndex = (coordIndex + 1) % coords.length;
    coordEl.style.opacity = "0";
    setTimeout(() => { coordEl.textContent = coords[coordIndex]; coordEl.style.opacity = "1"; }, 300);
  }, 3000);
}

// ── Pure clean map pin: filled circle + filled triangle below. Nothing else.
function drawMarker(ctx, cx, cy, r, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = ACCENT;

  // circle (pin head)
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  // triangle (pin tail) — starts just below circle, points down
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.5, cy + r * 0.6);
  ctx.lineTo(cx + r * 0.5, cy + r * 0.6);
  ctx.lineTo(cx,           cy + r * 2.2);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

// ── FULL-PAGE background canvas only
const mapCanvas = document.getElementById('map-canvas');
if (mapCanvas) {
  const wrap = mapCanvas.parentElement;
  const mctx = mapCanvas.getContext('2d');
  let bgMarkers = [];

  function initBgMarkers(w, h) {
    bgMarkers = [];
    const count = Math.max(20, Math.floor((w * h) / 14000));
    for (let i = 0; i < count; i++) {
      bgMarkers.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 3 + Math.random() * 5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
        minA: 0.05 + Math.random() * 0.08,
        maxA: 0.35 + Math.random() * 0.40,
      });
    }
  }

  function resizeBgCanvas() {
    mapCanvas.width  = wrap.offsetWidth;
    mapCanvas.height = Math.max(wrap.offsetHeight, 600);
    initBgMarkers(mapCanvas.width, mapCanvas.height);
  }

  function animateBg(t) {
    mctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
    const now = t * 0.001;
    bgMarkers.forEach(m => {
      const pulse = (Math.sin(now * m.speed + m.phase) + 1) / 2;
      drawMarker(mctx, m.x, m.y, m.r, m.minA + pulse * (m.maxA - m.minA));
    });
    requestAnimationFrame(animateBg);
  }

  resizeBgCanvas();
  requestAnimationFrame(animateBg);
  new ResizeObserver(resizeBgCanvas).observe(wrap);
}

// ── Filter logic
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const group = btn.closest(".filter-group");
    if (group) group.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const activeFilters = Array.from(document.querySelectorAll(".filter-btn.active"))
      .map(b => b.dataset.filter).filter(f => f && f !== "all");
    document.querySelectorAll(".r-card").forEach(card => {
      const tags = card.dataset.tags || "";
      if (activeFilters.length === 0 || btn.dataset.filter === "all") {
        card.classList.remove("hidden");
      } else {
        card.classList.toggle("hidden", !activeFilters.every(f => tags.includes(f)));
      }
    });
  });
});