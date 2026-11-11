// Shows one language at a time: #ar / #en in the link first, then the visitor's last choice,
// then the browser language (Arabic → Arabic, anything else → English).
// Loaded in <head> so the page never flashes both languages; without JavaScript both simply show.
(function () {
  var root = document.documentElement;
  var KEY = 'shahin.lang';

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode: fine */ }
  }

  function setRoot(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    var title = root.getAttribute('data-title-' + lang);
    if (title) document.title = title;
  }

  function setControls(lang) {
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(buttons[i].getAttribute('data-set-lang') === lang));
    }
    // Links to the other pages keep the chosen language.
    var links = document.querySelectorAll('a[data-keep-lang]');
    for (var j = 0; j < links.length; j++) {
      links[j].setAttribute('href', links[j].getAttribute('href').split('#')[0] + '#' + lang);
    }
  }

  var hash = location.hash.slice(1);
  var last = saved();
  var browser = (navigator.language || '').slice(0, 2) === 'ar' ? 'ar' : 'en';
  var lang = hash === 'ar' || hash === 'en' ? hash : last === 'ar' || last === 'en' ? last : browser;
  setRoot(lang);

  document.addEventListener('DOMContentLoaded', function () {
    setControls(lang);
  });

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('[data-set-lang]');
    if (!button) return;
    lang = button.getAttribute('data-set-lang');
    save(lang);
    setRoot(lang);
    setControls(lang);
    history.replaceState(null, '', '#' + lang);
  });
})();
