(function () {
  var S = window.SITE || {};
  var body = document.body;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function withBreaks(lines) {
    var frag = document.createDocumentFragment();
    lines.forEach(function (line, i) {
      frag.appendChild(document.createTextNode(line));
      if (i < lines.length - 1) frag.appendChild(el("br"));
    });
    return frag;
  }

  function linkList(links) {
    var wrap = el("div", { class: "link-list" });
    links.forEach(function (l) {
      wrap.appendChild(
        el("div", { class: "link-row" }, [
          el("span", { class: "link-label", text: l.label }),
          el("a", {
            class: "ig-link",
            href: l.href,
            target: "_blank",
            rel: "noopener",
            "data-ig": l.ig || "",
            text: l.text,
          }),
        ])
      );
    });
    return wrap;
  }

  /* =================================================
     PROFILE (left column + mobile home)
     ================================================= */
  function renderProfile() {
    document.title = S.title || S.name || document.title;

    var nameEl = document.getElementById("site-name");
    if (nameEl) nameEl.textContent = S.name || "";

    var bioEl = document.getElementById("site-bio");
    if (bioEl && S.bio) bioEl.appendChild(withBreaks(S.bio));

    var cur = document.getElementById("site-currently");
    if (cur && S.currently) {
      cur.textContent = S.currently.label;
      cur.href = S.currently.href;
    }

    var hero = document.getElementById("hero-image");
    if (hero && S.heroImage) hero.src = S.heroImage;

    var ml = document.getElementById("mobile-links");
    if (ml && S.links) ml.appendChild(linkList(S.links));
  }

  /* =================================================
     SELECTED WORKS
     ================================================= */
  function renderFilters() {
    var bar = document.getElementById("category-filter");
    if (!bar) return;
    (S.filters || []).forEach(function (f) {
      bar.appendChild(
        el("button", {
          class: "filter-option",
          type: "button",
          role: "tab",
          "data-filter": f.key,
          text: f.label,
        })
      );
    });
  }

  function renderProjects() {
    var host = document.getElementById("projects");
    if (!host) return;

    (S.projects || []).forEach(function (p) {
      var media;
      if (p.video) {
        var video = el("video", {
          class: "media",
          src: p.video,
          poster: p.image || "",
          playsinline: "",
          loop: "",
          muted: "",
          preload: "metadata",
          controls: "",
        });
        video.muted = true;
        video.setAttribute("muted", "");
        media = video;
      } else {
        var img = el("img", { src: p.image, alt: p.title, loading: "lazy", decoding: "async" });
        media = p.href
          ? el("a", { class: "media", href: p.href, target: "_blank", rel: "noopener" }, [img])
          : el("div", { class: "media" }, [img]);
      }

      var titleCol = el("div", { class: "column-unit project-caption" }, [
        el("span", { class: "title" }, [
          p.href ? el("a", { href: p.href, target: "_blank", rel: "noopener", text: p.title }) : p.title,
        ]),
        p.year ? el("span", { class: "year", text: "(" + p.year + ")" }) : null,
      ]);
      var descCol = el("div", { class: "column-unit project-caption", text: p.description || "" });

      var container = el(
        "div",
        { class: "project-container fade-in", "data-category": (p.categories || []).join(" ") },
        [media, el("div", { class: "column-set" }, [titleCol, descCol])]
      );

      host.appendChild(el("div", { class: "project-block" }, [container, el("div", { class: "divider-line" })]));
    });
  }

  function initFilter() {
    var STORAGE_KEY = "selectedCategory";
    var bar = document.getElementById("category-filter");
    var blocks = document.querySelectorAll(".project-block");
    if (!bar || !blocks.length) return;
    var buttons = bar.querySelectorAll(".filter-option");

    function applyFilter(category) {
      blocks.forEach(function (block) {
        var c = block.querySelector(".project-container");
        var cats = (c && c.getAttribute("data-category") || "").split(" ").filter(Boolean);
        var show = category === "all" || cats.indexOf(category) !== -1;
        if (show) block.removeAttribute("hidden");
        else block.setAttribute("hidden", "");
      });
      buttons.forEach(function (b) {
        var on = b.dataset.filter === category;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      try { localStorage.setItem(STORAGE_KEY, category); } catch (e) {}
      requestFadeCheck();
    }

    var saved = "all";
    try { saved = localStorage.getItem(STORAGE_KEY) || "all"; } catch (e) {}
    var known = Array.prototype.some.call(buttons, function (b) { return b.dataset.filter === saved; });
    applyFilter(known ? saved : "all");

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        if (this.dataset.filter) applyFilter(this.dataset.filter);
      });
    });
  }

  /* =================================================
     SCROLL FADE IN / OUT
     ================================================= */
  var fadeObserver = null;
  function initScrollFadeIns() {
    var targets = document.querySelectorAll(".project-container.fade-in");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("in-view"); });
      return;
    }

    fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
          var video = entry.target.querySelector("video");
          if (video) {
            if (entry.isIntersecting) video.play().catch(function () {});
            else video.pause();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    targets.forEach(function (t) { fadeObserver.observe(t); });
  }

  function requestFadeCheck() {
    if (!fadeObserver) return;
    var targets = document.querySelectorAll(".project-container.fade-in");
    targets.forEach(function (t) {
      fadeObserver.unobserve(t);
      fadeObserver.observe(t);
    });
  }

  /* =================================================
     CV
     ================================================= */
  function renderCV() {
    var host = document.getElementById("cv-blocks");
    if (!host) return;
    (S.cv || []).forEach(function (block, i) {
      var lines = el("div", { class: "column-unit" });
      (block.lines || []).forEach(function (line) {
        if (line && typeof line === "object") {
          lines.appendChild(
            el("span", { class: "cv-line" }, [
              el("a", {
                class: "ig-link",
                href: line.href,
                target: "_blank",
                rel: "noopener",
                "data-ig": line.ig || "",
                text: line.text,
              }),
            ])
          );
        } else {
          lines.appendChild(el("span", { class: "cv-line", text: line }));
        }
      });
      host.appendChild(
        el("div", { class: "cv-block" }, [
          el("div", { class: "column-set" }, [el("div", { class: "column-unit", text: block.label }), lines]),
          el("br"),
          i < S.cv.length - 1 ? el("hr") : null,
        ])
      );
    });
  }

  /* =================================================
     THEME
     ================================================= */
  function initTheme() {
    var btn = document.getElementById("theme-toggle");

    function applyTheme() {
      var saved = "light";
      try { saved = localStorage.getItem("theme") || "light"; } catch (e) {}
      body.classList.toggle("light-mode", saved === "light");

      if (window.innerWidth < 768) {
        body.classList.add("light-mode");
      }
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", body.classList.contains("light-mode") ? "#ffffff" : "#000000");
    }

    applyTheme();

    if (btn) {
      btn.addEventListener("click", function () {
        var isLight = body.classList.toggle("light-mode");
        try { localStorage.setItem("theme", isLight ? "light" : "dark"); } catch (e) {}
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", isLight ? "#ffffff" : "#000000");
      });
    }

    window.addEventListener("resize", applyTheme);
  }

  /* =================================================
     OVERLAYS (About / Contact)
     ================================================= */
  function overlayContent(kind) {
    if (kind === "contact") {
      var c = S.contact || {};
      return el("div", { class: "overlay-grid" }, [
        el("div", {}, [
          el("div", { class: "overlay-heading", id: "overlay-title", text: c.heading || "Contact" }),
          el("br"),
          el("p", {}, [withBreaks(c.lines || [])]),
        ]),
        el("div", {}, [el("br"), linkList(S.links || [])]),
      ]);
    }

    var a = S.about || {};
    var left = el("div", {}, [
      el("div", { class: "overlay-heading", id: "overlay-title", text: a.heading || "About" }),
      el("br"),
    ]);
    (a.paragraphs || []).forEach(function (p) { left.appendChild(el("p", { text: p })); });
    if (S.currently) {
      left.appendChild(el("p", {}, [el("a", { href: S.currently.href, target: "_blank", rel: "noopener", text: S.currently.label })]));
    }

    var right = el("div", {}, [el("br")]);
    if (a.listening) {
      right.appendChild(el("span", { class: "link-label", text: a.listening.label }));
      right.appendChild(el("br"));
      right.appendChild(document.createTextNode("♫ " + a.listening.line1));
      right.appendChild(el("br"));
      right.appendChild(document.createTextNode(a.listening.line2));
      right.appendChild(el("br"));
      right.appendChild(el("br"));
    }
    right.appendChild(linkList(S.links || []));

    return el("div", { class: "overlay-grid" }, [left, right]);
  }

  function initOverlays() {
    var overlay = document.getElementById("overlay");
    var bodyHost = document.getElementById("overlay-body");
    if (!overlay || !bodyHost) return;
    var lastFocus = null;

    function open(kind) {
      bodyHost.innerHTML = "";
      bodyHost.appendChild(overlayContent(kind));
      overlay.removeAttribute("hidden");
      body.style.overflow = "hidden";
      lastFocus = document.activeElement;
      var closeBtn = overlay.querySelector(".overlay-close");
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      overlay.setAttribute("hidden", "");
      body.style.overflow = "";
      if (history.state && history.state.overlay) history.back();
      else if (location.hash === "#about" || location.hash === "#contact") {
        history.replaceState(null, "", location.pathname + location.search);
      }
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-overlay]");
      if (trigger) {
        e.preventDefault();
        var kind = trigger.getAttribute("data-overlay");
        history.pushState({ overlay: kind }, "", "#" + kind);
        open(kind);
        return;
      }
      if (e.target.closest("[data-close]")) {
        e.preventDefault();
        close();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hasAttribute("hidden")) close();
    });

    window.addEventListener("popstate", function () {
      var h = location.hash.replace("#", "");
      if (h === "about" || h === "contact") open(h);
      else if (!overlay.hasAttribute("hidden")) {
        overlay.setAttribute("hidden", "");
        body.style.overflow = "";
      }
    });

    var initial = location.hash.replace("#", "");
    if (initial === "about" || initial === "contact") open(initial);
  }

  /* =================================================
     MOBILE NAV (WORK / ABOUT / CV / CONTACT)
     ================================================= */
  function initMobileNav() {
    var links = document.querySelectorAll(".mobile-nav [data-nav]");
    if (!links.length) return;

    function setView(view) {
      body.setAttribute("data-view", view);
      links.forEach(function (l) { l.classList.toggle("active", l.dataset.nav === view); });
      window.scrollTo(0, 0);
      requestFadeCheck();
    }

    links.forEach(function (l) {
      l.addEventListener("click", function (e) {
        e.preventDefault();
        setView(this.dataset.nav);
        history.replaceState(null, "", "#" + this.dataset.nav);
      });
    });

    var h = location.hash.replace("#", "");
    setView(h === "work" || h === "cv" ? h : "home");
  }

  /* =================================================
     BOOT
     ================================================= */
  function initInstagramLinks() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a[data-ig]");
      var user = a && a.getAttribute("data-ig");
      if (!user) return;
      var mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (!mobile) return;
      e.preventDefault();
      var web = a.href;
      var start = Date.now();
      window.location.href = "instagram://user?username=" + user;
      setTimeout(function () {
        if (!document.hidden && Date.now() - start < 1600) window.location.href = web;
      }, 900);
    });
  }

  function boot() {
    renderProfile();
    renderFilters();
    renderProjects();
    renderCV();
    initTheme();
    initFilter();
    initScrollFadeIns();
    initOverlays();
    initMobileNav();
    initInstagramLinks();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
