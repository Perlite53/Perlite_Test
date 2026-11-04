/* Perlite Premier — scroll reveal, count-up, scroll progress.
   Purely additive: if this file fails or motion is reduced, the page is fully visible and usable. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Scroll progress bar ---- */
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  var ticking = false;
  function updateBar() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateBar); }
  }, { passive: true });
  updateBar();

  /* ---- Hero stats count-up ---- */
  function countUp(el) {
    var m = /^(~?)(\d+(?:\.\d+)?)(%?)$/.exec(el.textContent.trim());
    if (!m) return;
    var end = parseFloat(m[2]);
    var dec = (m[2].split('.')[1] || '').length;
    var dur = 1600, t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + (end * e).toFixed(dec) + m[3];
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = m[1] + (0).toFixed(dec) + m[3];
    requestAnimationFrame(step);
  }
  if (!reduce) {
    setTimeout(function () {
      document.querySelectorAll('.hx-stats b').forEach(countUp);
    }, 700);
  }

  /* ---- Hero image parallax (mouse + scroll) ---- */
  var hero = document.querySelector('.hx');
  if (hero && !reduce) {
    var imgs = hero.querySelectorAll('.hx-media img');
    var mx = 0, my = 0, cx = 0, cy = 0, sy = 0, csy = 0, running = false;
    function frame() {
      cx += (mx - cx) * 0.07; cy += (my - cy) * 0.07; csy += (sy - csy) * 0.12;
      var W = hero.offsetWidth, H = hero.offsetHeight;
      var x = -cx * W * 0.022;
      var y = -cy * H * 0.014 + csy;
      y = Math.max(-H * 0.055, Math.min(H * 0.055, y));
      for (var i = 0; i < imgs.length; i++) imgs[i].style.translate = x.toFixed(1) + 'px ' + y.toFixed(1) + 'px';
      if (Math.abs(mx - cx) > 0.001 || Math.abs(my - cy) > 0.001 || Math.abs(sy - csy) > 0.2) {
        requestAnimationFrame(frame);
      } else { running = false; }
    }
    function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    }, { passive: true });
    hero.addEventListener('mouseleave', function () { mx = 0; my = 0; kick(); });
    window.addEventListener('scroll', function () {
      var r = hero.getBoundingClientRect();
      if (r.bottom > 0) { sy = Math.max(0, -r.top) * 0.18; kick(); }
    }, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  if (reduce || !('IntersectionObserver' in window)) return;

  var groups = [
    '.ov-media', '.ov-eyebrow', '.ov-title', '.ov-lead', '.ov-card', '.ov-close', '.ov-btns',
    '.hl-head', '.hl-media', '.hl-group',
    '.pr-head', '.pr-card',
    '.am-headtxt', '.am-card',
    '.fp-head', '.fp-tabs .nav-item', '.fp-cta', '.fp-stage',
    '.gl-head', '.gl-tile', '.gl-cta',
    '.lc-head', '.lc-list', '.loc-carousel-wrap',
    '.ct-about > *', '.ct-card',
    '.ft-top', '.ft-legal', '.ft-bottom'
  ];
  var targets = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      var idx = 0, s = el.previousElementSibling;
      while (s) { idx++; s = s.previousElementSibling; }
      el.style.setProperty('--d', Math.min(idx, 5) * 90 + 'ms');
      el.classList.add('rv');
      targets.push(el);
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();
