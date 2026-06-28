(function () {
  "use strict";

  var ROOT_DOMAIN = "007575.xyz";
  var projects = (window.PROJECTS || []).slice();

  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var search = document.getElementById("search");
  var filtersEl = document.getElementById("filters");
  var termList = document.getElementById("termList");
  var countNum = document.getElementById("countNum");

  var activeTag = "all";
  var query = "";

  function urlFor(p) { return "https://" + p.subdomain + "." + ROOT_DOMAIN; }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- engraving emblems (line-art, single color = currentColor) ----------
  function emblem(motif) {
    var s = '<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" ' +
            'stroke-width="1.25" color="' + "currentColor" + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true">';
    var cx = 100, cy = 75, i, a, x1, y1, x2, y2;

    if (motif === "orbit") {
      s += '<circle cx="100" cy="75" r="11" fill="currentColor"/>';
      [{ rx: 70, ry: 26, rot: 0 }, { rx: 70, ry: 26, rot: 60 }, { rx: 70, ry: 26, rot: 120 }]
        .forEach(function (o) {
          s += '<ellipse cx="100" cy="75" rx="' + o.rx + '" ry="' + o.ry +
               '" transform="rotate(' + o.rot + ' 100 75)"/>';
        });
      [0, 1, 2].forEach(function (k) {
        var ang = k * 2.1;
        s += '<circle cx="' + (cx + Math.cos(ang) * 64) + '" cy="' + (cy + Math.sin(ang) * 22) +
             '" r="3.5" fill="currentColor" stroke="none"/>';
      });
    } else if (motif === "compass") {
      s += '<circle cx="100" cy="75" r="52"/>';
      s += '<circle cx="100" cy="75" r="44"/>';
      for (i = 0; i < 24; i++) {
        a = (i / 24) * Math.PI * 2;
        var rr = i % 6 === 0 ? 36 : 41;
        s += '<line x1="' + (cx + Math.cos(a) * 44) + '" y1="' + (cy + Math.sin(a) * 44) +
             '" x2="' + (cx + Math.cos(a) * rr) + '" y2="' + (cy + Math.sin(a) * rr) + '"/>';
      }
      s += '<path d="M100 36 L112 75 L100 114 L88 75 Z" fill="currentColor" stroke="none"/>';
      s += '<path d="M100 36 L108 75 L100 75 Z" fill="currentColor"/>';
    } else if (motif === "eye") {
      s += '<path d="M40 75 Q100 30 160 75 Q100 120 40 75 Z"/>';
      s += '<circle cx="100" cy="75" r="20"/>';
      s += '<circle cx="100" cy="75" r="9" fill="currentColor"/>';
      for (i = 0; i < 16; i++) {
        a = (i / 16) * Math.PI * 2;
        s += '<line x1="' + (cx + Math.cos(a) * 22) + '" y1="' + (cy + Math.sin(a) * 22) +
             '" x2="' + (cx + Math.cos(a) * 30) + '" y2="' + (cy + Math.sin(a) * 30) + '"/>';
      }
    } else { // "sun"
      s += '<circle cx="100" cy="75" r="22" fill="currentColor"/>';
      for (i = 0; i < 32; i++) {
        a = (i / 32) * Math.PI * 2;
        var len = i % 2 === 0 ? 56 : 40;
        x1 = cx + Math.cos(a) * 28; y1 = cy + Math.sin(a) * 28;
        x2 = cx + Math.cos(a) * len; y2 = cy + Math.sin(a) * len;
        s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
      }
    }
    return s + "</svg>";
  }

  // ---- hero sunburst (cream radiating strokes) ----------------------------
  function buildSunburst() {
    var el = document.querySelector(".sunburst");
    if (!el) return;
    var cx = 300, cy = 300, parts = "", i, a;
    for (i = 0; i < 72; i++) {
      a = (i / 72) * Math.PI * 2;
      parts += '<line x1="' + cx + '" y1="' + cy +
               '" x2="' + (cx + Math.cos(a) * 460) + '" y2="' + (cy + Math.sin(a) * 460) +
               '" stroke="currentColor" stroke-width="' + (i % 3 === 0 ? 1.4 : 0.6) + '"/>';
    }
    parts += '<circle cx="300" cy="300" r="40" fill="none" stroke="currentColor" stroke-width="1.4"/>';
    parts += '<circle cx="300" cy="300" r="70" fill="none" stroke="currentColor" stroke-width="0.6"/>';
    el.innerHTML = parts;
    el.style.color = "var(--cream)";
  }

  // ---- card ----------------------------------------------------------------
  function cardFor(p, idx) {
    var a = document.createElement("a");
    a.className = "card";
    a.href = urlFor(p);
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var host = p.subdomain + "." + ROOT_DOMAIN;
    var st = (p.status || "live");
    var stLabel = st === "wip" ? "WIP" : st === "paused" ? "PAUSED" : "LIVE";
    var primaryTag = (p.tags && p.tags[0]) ? p.tags[0].toUpperCase() : "WEB";

    a.innerHTML =
      '<div class="card-index">' +
        "<span>#" + pad2(idx + 1) + "&nbsp;&middot;&nbsp;" + escapeHtml(primaryTag) + "</span>" +
        '<span class="tag-box ' + (st === "live" ? "is-live" : "") + '">' + stLabel + "</span>" +
      "</div>" +
      '<div class="emblem" style="color:var(--blue)">' + emblem(p.motif) + "</div>" +
      '<h3 class="card-name">' + escapeHtml(p.name) + "</h3>" +
      '<p class="card-tagline">' + escapeHtml(p.tagline || "") + "</p>" +
      '<div class="card-foot">' +
        '<span class="card-host">' + escapeHtml(host) + "</span>" +
        '<span class="card-go">VISIT&nbsp;&rarr;</span>' +
      "</div>";

    return a;
  }

  // ---- filtering -----------------------------------------------------------
  function matches(p) {
    if (activeTag !== "all" && (p.tags || []).indexOf(activeTag) === -1) return false;
    if (!query) return true;
    var hay = [p.name, p.tagline, p.subdomain].concat(p.tags || []).join(" ").toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function render() {
    grid.innerHTML = "";
    var shown = 0;
    projects.forEach(function (p, i) {
      if (matches(p)) { grid.appendChild(cardFor(p, i)); shown++; }
    });
    empty.hidden = shown !== 0;
  }

  // ---- filter chips --------------------------------------------------------
  function buildFilters() {
    var tags = { all: true };
    projects.forEach(function (p) { (p.tags || []).forEach(function (t) { tags[t] = true; }); });
    Object.keys(tags).forEach(function (t) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (t === "all" ? " chip-active" : "");
      btn.textContent = t === "all" ? "ALL" : t.toUpperCase();
      btn.addEventListener("click", function () {
        activeTag = t;
        Array.prototype.forEach.call(filtersEl.querySelectorAll(".chip"), function (c) {
          c.classList.remove("chip-active");
        });
        btn.classList.add("chip-active");
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  // ---- terminal "ls" output + copy ----------------------------------------
  function fillTerminal() {
    termList.textContent = projects.map(function (p) {
      return p.subdomain + "." + ROOT_DOMAIN;
    }).join("\n") + "\n";

    var liveCount = projects.filter(function (p) { return (p.status || "live") === "live"; }).length;
    if (countNum) countNum.textContent = pad2(liveCount);

    var copyBtn = document.getElementById("copyBtn");
    if (copyBtn && navigator.clipboard) {
      copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText("ls -1 *.007575.xyz").then(function () {
          copyBtn.textContent = "COPIED";
          copyBtn.classList.add("done");
          setTimeout(function () {
            copyBtn.textContent = "COPY";
            copyBtn.classList.remove("done");
          }, 1400);
        });
      });
    }
  }

  // ---- search wiring -------------------------------------------------------
  search.addEventListener("input", function () {
    query = search.value.trim().toLowerCase();
    render();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== search) {
      e.preventDefault();
      search.focus();
    }
    if (e.key === "Escape" && document.activeElement === search) {
      search.value = ""; query = ""; render(); search.blur();
    }
  });

  // ---- boot ----------------------------------------------------------------
  document.getElementById("year").textContent = new Date().getFullYear();
  buildSunburst();
  buildFilters();
  fillTerminal();
  render();
})();
