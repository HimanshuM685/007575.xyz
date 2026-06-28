(function () {
  "use strict";

  var ROOT_DOMAIN = "007575.xyz";
  var projects = (window.PROJECTS || []).slice();

  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var search = document.getElementById("search");
  var filtersEl = document.getElementById("filters");

  var activeTag = "all";
  var query = "";

  function urlFor(p) {
    return "https://" + p.subdomain + "." + ROOT_DOMAIN;
  }

  function statusLabel(status) {
    if (status === "wip") return "WIP";
    if (status === "paused") return "Paused";
    return "Live";
  }

  // ---- build the card -----------------------------------------------------
  function cardFor(p) {
    var a = document.createElement("a");
    a.className = "card";
    a.href = urlFor(p);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("data-status", p.status || "live");
    if (p.accent) a.style.setProperty("--accent", p.accent);

    var host = p.subdomain + "." + ROOT_DOMAIN;

    a.innerHTML =
      '<div class="card-top">' +
        '<div class="card-icon">' + (p.emoji || "▸") + "</div>" +
        '<span class="badge badge-' + (p.status || "live") + '">' +
          '<span class="badge-dot"></span>' + statusLabel(p.status) +
        "</span>" +
      "</div>" +
      '<h2 class="card-name">' + escapeHtml(p.name) + "</h2>" +
      '<p class="card-tagline">' + escapeHtml(p.tagline || "") + "</p>" +
      '<div class="card-tags">' +
        (p.tags || []).map(function (t) {
          return '<span class="tag">' + escapeHtml(t) + "</span>";
        }).join("") +
      "</div>" +
      '<div class="card-foot">' +
        '<span class="card-host">' + escapeHtml(host) + "</span>" +
        '<span class="card-go">visit ↗</span>' +
      "</div>";

    return a;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- filtering ----------------------------------------------------------
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
        grid.appendChild(cardFor(p));
        shown++;
      }
    });
    empty.hidden = shown !== 0;
  }

  // ---- tag filter chips ---------------------------------------------------
  function buildFilters() {
    var tags = { all: true };
    projects.forEach(function (p) {
      (p.tags || []).forEach(function (t) { tags[t] = true; });
    });

    Object.keys(tags).forEach(function (t) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (t === "all" ? " chip-active" : "");
      btn.textContent = t === "all" ? "All" : t;
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

  // ---- stats --------------------------------------------------------------
  function fillStats() {
    var total = projects.length;
    var live = projects.filter(function (p) { return (p.status || "live") === "live"; }).length;
    countUp(document.getElementById("statTotal"), total);
    countUp(document.getElementById("statLive"), live);
  }

  function countUp(el, target) {
    if (!el) return;
    var start = 0;
    var steps = Math.max(1, target);
    var dur = 600;
    var t0 = performance.now();
    function tick(now) {
      var prog = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(prog * target);
      if (prog < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- theme toggle -------------------------------------------------------
  function initTheme() {
    var toggle = document.getElementById("themeToggle");
    var saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    if (toggle) {
      toggle.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        var next = cur === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      });
    }
  }

  // ---- search wiring ------------------------------------------------------
  search.addEventListener("input", function () {
    query = search.value.trim().toLowerCase();
    render();
  });

  // "/" focuses search
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

  // ---- boot ---------------------------------------------------------------
  document.getElementById("year").textContent = new Date().getFullYear();
  initTheme();
  buildFilters();
  fillStats();
  render();
})();
