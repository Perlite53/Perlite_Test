/* Phone-only behaviour: collapsible sections + "read more". Desktop is untouched. */
(function () {
  if (!window.matchMedia || !window.matchMedia('(max-width: 767px)').matches) return;
  function wire(head, box, open) {
    head.setAttribute('role', 'button'); head.setAttribute('tabindex', '0');
    head.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) box.classList.add('m-open');
    function tog() {
      var o = box.classList.toggle('m-open');
      head.setAttribute('aria-expanded', o ? 'true' : 'false');
    }
    head.addEventListener('click', tog);
    head.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(); } });
  }
  function init() {
    document.documentElement.classList.add('m-js');
    document.querySelectorAll('.hl-group').forEach(function (g, i) {
      var h = g.querySelector('.hl-gh'); if (h) wire(h, g, i === 0);
    });
    document.querySelectorAll('.lc-group').forEach(function (g, i) {
      var h = g.querySelector('.lc-gh'); if (h) wire(h, g, i === 0);
    });
    var about = document.querySelector('.ct-about');
    if (about) {
      about.classList.add('m-clamp');
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'm-more'; b.textContent = 'Read more';
      var first = about.querySelector('p:last-of-type');
      var ps = about.querySelectorAll('p'); var last = ps[ps.length - 1];
      last.parentNode.insertBefore(b, last.nextSibling);
      b.addEventListener('click', function () {
        var o = about.classList.toggle('m-expanded');
        b.textContent = o ? 'Show less' : 'Read more';
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
