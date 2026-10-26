// Prints the example receipt once, then counts the savings up. Everything is already in the HTML, so this is optional.
(function () {
  var el = document.querySelector("[data-count]");
  if (!el || (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
  var end = parseFloat(el.getAttribute("data-count")), t0 = null, delay = 1300, dur = 1100;
  el.textContent = "$0.00";
  function tick(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min(Math.max((ts - t0 - delay) / dur, 0), 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = "$" + (end * e).toFixed(2);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
