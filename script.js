/* Welch Ave. Station landing page
   - Builds the day-of-week specials picker and opens it to today
   - "See Saturday/Sunday specials" buttons jump to that day
   - Logs the clicks we'd track as conversions (directions, call, specials) */

(function () {
  "use strict";

  // Specials from welchave.com/specials (as captured in our website audit).
  // Index matches JavaScript's Date.getDay(): 0 = Sunday ... 6 = Saturday.
  var SPECIALS = [
    { short: "Sun", name: "Sunday", hours: "noon–2 a.m.", title: "S.I.N. · Service Industry Night",
      deals: ["Employee prices all day for anyone who works for tips", "Happy-hour prices all day for everyone else"], pool: "" },
    { short: "Mon", name: "Monday", hours: "4 p.m.–2 a.m.", title: "Cure the Monday blahs",
      deals: ["$6 non-craft pitchers", "$4 double Jack Daniel's drinks", "$4.25 Long Islands"], pool: "Free pool before & after league" },
    { short: "Tue", name: "Tuesday", hours: "4 p.m.–2 a.m.", title: "Rock-bottom prices",
      deals: ["$1.50 Busch Light & High Life bottles", "$3.25 double wells", "$1 off all craft pints", "$3 off all craft pitchers"], pool: "Free pool open to close" },
    { short: "Wed", name: "Wednesday", hours: "4 p.m.–2 a.m.", title: "Pint Night",
      deals: ["$1.50 pints & bottles of Bud, Miller, Coors & PBR", "$1.50 off pints of every other beer"], pool: "Free pool until 8 p.m." },
    { short: "Thu", name: "Thursday", hours: "4 p.m.–2 a.m.", title: "Top Shelf Night",
      deals: ["$5.25 doubles from 150+ liquors", "$3.25 daiquiris"], pool: "" },
    { short: "Fri", name: "Friday", hours: "1 p.m.–2 a.m.", title: "F.A.C. · It's Friday",
      deals: ["$4 Long Islands", "$4 daiquiris"], pool: "" },
    { short: "Sat", name: "Saturday", hours: "11 a.m.–2 a.m.", title: "Game day at Welch",
      deals: ["Till 8 p.m.: $7.50 non-craft pitchers, $2.75 non-craft pints", "Open to close: $3.25 margaritas & Bloody Marys, $4 daiquiris"], pool: "" }
  ];

  var ORDER = [1, 2, 3, 4, 5, 6, 0]; // show Monday first
  var today = new Date().getDay();
  var tabsEl = document.getElementById("day-tabs");
  var panelEl = document.getElementById("day-panel");
  var hoursEl = document.getElementById("day-hours");
  if (!tabsEl || !panelEl) return;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  // Build the tab buttons once
  var buttons = ORDER.map(function (i) {
    var day = SPECIALS[i];
    var btn = el("button", "tab");
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.id = "tab-" + day.short.toLowerCase();
    btn.setAttribute("aria-controls", "day-panel");
    btn.dataset.day = String(i);
    btn.appendChild(document.createTextNode(day.short));
    if (i === today) btn.appendChild(el("span", "tonight", "Tonight"));
    btn.addEventListener("click", function () { show(i, true); });
    tabsEl.appendChild(btn);
    return btn;
  });

  // Arrow keys move between tabs (standard tablist behavior)
  tabsEl.addEventListener("keydown", function (e) {
    var idx = buttons.indexOf(document.activeElement);
    if (idx < 0) return;
    var next = null;
    if (e.key === "ArrowRight") next = (idx + 1) % buttons.length;
    if (e.key === "ArrowLeft") next = (idx - 1 + buttons.length) % buttons.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = buttons.length - 1;
    if (next !== null) {
      e.preventDefault();
      buttons[next].focus();
      show(Number(buttons[next].dataset.day), true);
    }
  });

  function show(i, track) {
    var day = SPECIALS[i];
    buttons.forEach(function (b) {
      var on = Number(b.dataset.day) === i;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });
    panelEl.setAttribute("aria-labelledby", "tab-" + day.short.toLowerCase());

    panelEl.innerHTML = "";
    panelEl.appendChild(el("div", "day", i === today ? day.name + " · Tonight" : day.name));
    panelEl.appendChild(el("div", "title", day.title));
    var list = el("ul");
    day.deals.forEach(function (d) { list.appendChild(el("li", "", d)); });
    panelEl.appendChild(list);
    if (day.pool) panelEl.appendChild(el("div", "pool", day.pool));

    if (hoursEl) hoursEl.textContent = (i === today ? "today " : day.name + " ") + day.hours;
    if (track) logEvent("view_specials_" + day.short.toLowerCase());
  }

  // Buttons elsewhere on the page that jump to a specific day
  Array.prototype.forEach.call(document.querySelectorAll("[data-pick-day]"), function (btn) {
    btn.addEventListener("click", function () {
      show(Number(btn.getAttribute("data-pick-day")), true);
      document.getElementById("specials").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Conversion tracking hook. With Google Analytics installed, replace console.log with:
  // gtag('event', name, { campaign: utm.utm_campaign, ad_size: utm.utm_content });
  var utm = {};
  new URLSearchParams(window.location.search).forEach(function (value, key) {
    if (key.indexOf("utm_") === 0) utm[key] = value;
  });
  function logEvent(name) {
    if (window.console) console.log("[landing event]", name, utm);
  }
  Array.prototype.forEach.call(document.querySelectorAll("[data-track]"), function (a) {
    a.addEventListener("click", function () { logEvent(a.getAttribute("data-track")); });
  });

  show(today, false);
})();
