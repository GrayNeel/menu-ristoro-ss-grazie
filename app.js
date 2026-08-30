(function () {
  "use strict";

  var nav = document.getElementById("site-nav");

  document.body.addEventListener("click", function (e) {
    var langBtn = e.target.closest("[data-lang-btn]");
    if (langBtn) {
      var lang = langBtn.getAttribute("data-lang-btn");
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang", lang);
      document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === lang));
      });
      return;
    }

    var toggleBtn = e.target.closest("[data-toggle-id]");
    if (toggleBtn) {
      var item = document.getElementById(toggleBtn.getAttribute("data-toggle-id"));
      if (!item) return;
      var open = !item.classList.contains("open");
      item.classList.toggle("open", open);
      toggleBtn.setAttribute("aria-expanded", String(open));
      return;
    }

    var scrollBtn = e.target.closest("[data-scroll-to]");
    if (scrollBtn) {
      var target = document.getElementById(scrollBtn.getAttribute("data-scroll-to"));
      if (!target) return;
      var navHeight = nav ? nav.getBoundingClientRect().height : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  });
})();
