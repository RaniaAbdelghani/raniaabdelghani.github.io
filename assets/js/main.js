(function () {
  "use strict";

  /* ----- mobile nav ----- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- scroll-spy nav highlight ----- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-menu a[href^='#']"));
  var sections = links
    .map(function (l) { return document.getElementById(l.getAttribute("href").slice(1)); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ----- email (assembled to avoid scraping) ----- */
  var user = "rania.abdelghani";
  var host = ["uni", "tuebingen"].join("-") + ".de";
  var addr = user + "@" + host;
  document.querySelectorAll(".email-slot").forEach(function (slot) {
    var a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.textContent = addr;
    slot.appendChild(a);
  });
  document.querySelectorAll(".mailto-link").forEach(function (l) {
    l.setAttribute("href", "mailto:" + addr);
  });

  /* ----- click-to-load YouTube (privacy-enhanced) ----- */
  var facade = document.getElementById("defense-video");
  if (facade) {
    var play = function () {
      if (facade.classList.contains("playing")) return;
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/6RQIQZORWro?autoplay=1";
      iframe.title = "PhD defense: Conversational agents to train curiosity and metacognition in learners";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "");
      facade.classList.add("playing");
      facade.replaceChildren(iframe);
      facade.removeAttribute("role");
      facade.removeAttribute("tabindex");
    };
    facade.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; /* let the YouTube link work normally */
      play();
    });
    facade.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); }
    });
  }
})();
