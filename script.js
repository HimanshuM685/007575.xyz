(function () {
  "use strict";

  var ROOT_DOMAIN = "007575.xyz";
  var projects = (window.PROJECTS || []).slice();

  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var search = document.getElementById("search");
  var caret = document.getElementById("caret");
  var filtersEl = document.getElementById("filters");
  var statusLeft = document.getElementById("statusLeft");
  var statusRight = document.getElementById("statusRight");

  var activeTag = "all";
  var query = "";

  function urlFor(p) {
    return "https://" + p.subdomain + "." + ROOT_DOMAIN;
  }

  function statusLabel(status) {
    if (status === "wip") return "[ WIP ]";
    if (status === "paused") return "[PAUSED]";
    return "[ LIVE ]";
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- build one icon ------------------------------------------------------
  function iconFor(p) {
    var a = document.createElement("a");
    a.className = "icon";
    a.href = urlFor(p);
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var host = p.subdomain + "." + ROOT_DOMAIN;

    a.innerHTML =
      '<div class="icon-head">' +
        '<span class="icon-glyph">' + escapeHtml(p.glyph || "*") + "</span>" +
        "<span>" +
          '<span class="icon-name">' + escapeHtml(p.name) + "</span>" +
          '<div class="icon-status">' + statusLabel(p.status) + "</div>" +
        "</span>" +
      "</div>" +
      '<div class="icon-tagline">' + escapeHtml(p.tagline || "") + "</div>" +
      '<div class="icon-foot">' +
        '<span class="icon-host">' + escapeHtml(host) + "</span>" +
        '<span class="icon-go">OPEN &gt;</span>' +
      "</div>";

    return a;
  }

  // ---- filtering -----------------------------------------------------------
  function matches(p) {
    if (activeTag !== "all" && (p.tags || []).indexOf(activeTag) === -1) {
      return false;
    }
    if (!query) return true;
    var hay = [p.name, p.tagline, p.subdomain]
      .concat(p.tags || [])
      .join(" ")
      .toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function render() {
    grid.innerHTML = "";
    var shown = 0;
    projects.forEach(function (p) {
      if (matches(p)) {
        grid.appendChild(iconFor(p));
        shown++;
      }
    });
    empty.hidden = shown !== 0;

    statusLeft.textContent =
      shown + (shown === 1 ? " item" : " items") +
      (shown !== projects.length ? " / " + projects.length : "");
    statusRight.textContent = shown ? "--More--" : "** empty **";
  }

  // ---- tag filter chips ----------------------------------------------------
  function buildFilters() {
    var tags = { all: true };
    projects.forEach(function (p) {
      (p.tags || []).forEach(function (t) { tags[t] = true; });
    });

    Object.keys(tags).forEach(function (t) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (t === "all" ? " chip-active" : "");
      btn.textContent = t === "all" ? "all" : t;
      btn.addEventListener("click", function () {
        activeTag = t;
        Array.prototype.forEach.call(
          filtersEl.querySelectorAll(".chip"),
          function (c) { c.classList.remove("chip-active"); }
        );
        btn.classList.add("chip-active");
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  // ---- fake terminal caret follows the text field --------------------------
  function syncCaret() {
    caret.textContent = "_";
    caret.style.display = document.activeElement === search ? "" : "inline";
  }

  // ---- invert video toggle -------------------------------------------------
  function initInvert() {
    var btn = document.getElementById("invertBtn");
    var desktop = document.getElementById("desktop");
    if (!btn || !desktop) return;
    if (localStorage.getItem("invert") === "1") desktop.classList.add("invert");
    btn.addEventListener("click", function () {
      desktop.classList.toggle("invert");
      localStorage.setItem("invert", desktop.classList.contains("invert") ? "1" : "0");
    });
  }

  // ---- search wiring -------------------------------------------------------
  search.addEventListener("input", function () {
    query = search.value.trim().toLowerCase();
    render();
  });
  search.addEventListener("focus", syncCaret);
  search.addEventListener("blur", syncCaret);

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== search) {
      e.preventDefault();
      search.focus();
    }
    if (e.key === "Escape" && document.activeElement === search) {
      search.value = "";
      query = "";
      render();
      search.blur();
    }
  });

  // ---- boot ----------------------------------------------------------------
  document.getElementById("year").textContent = new Date().getFullYear();
  initInvert();
  buildFilters();
  render();
  syncCaret();
})();
