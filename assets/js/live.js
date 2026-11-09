// Fills in the live numbers on the home page and the changelog on the What's new page from Steam Value Checker's public feed.
// Everything has a plain fallback in the HTML, so if the feed is slow or down the pages still read fine.
(function () {
  var FEED = "https://steamvaluechecker.com/api/public/site";
  var wantsStats = document.getElementById("live-stats"), wantsNews = document.getElementById("news-list");
  if (!wantsStats && !wantsNews) return;

  function fmt(n) { return Number(n).toLocaleString("en-US"); }

  // The changelog marks **bold** and `code`; turn those into real elements without ever using innerHTML.
  function richText(text) {
    var frag = document.createDocumentFragment();
    String(text).split(/(\*\*[^*]+\*\*|`[^`]+`)/).forEach(function (part) {
      if (!part) return;
      var el;
      if (part.slice(0, 2) === "**") { el = document.createElement("strong"); el.textContent = part.slice(2, -2); }
      else if (part[0] === "`") { el = document.createElement("code"); el.textContent = part.slice(1, -1); }
      else { el = document.createTextNode(part); }
      frag.appendChild(el);
    });
    return frag;
  }

  function showStats(stats) {
    if (!wantsStats || !stats) return;
    var any = false;
    [["servers", "servers"], ["gamesWatched", "games watched"], ["alerts24h", "alerts in the last day"]].forEach(function (pair) {
      var v = stats[pair[0]];
      var cell = wantsStats.querySelector('[data-stat="' + pair[0] + '"]');
      if (cell && v != null) { cell.querySelector("b").textContent = fmt(v); cell.hidden = false; any = true; }
    });
    if (any) wantsStats.hidden = false;
  }

  function showNews(entries) {
    if (!wantsNews || !entries || !entries.length) return;
    wantsNews.textContent = "";
    entries.forEach(function (e) {
      var box = document.createElement("article"), h = document.createElement("h2"), when = document.createElement("p"), ul = document.createElement("ul");
      h.textContent = e.title;
      when.className = "news-date";
      var d = new Date(e.date + "T12:00:00");
      when.textContent = (isNaN(d) ? e.date : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })) + " · v" + e.version;
      (e.items || []).forEach(function (t) { var li = document.createElement("li"); li.appendChild(richText(t)); ul.appendChild(li); });
      box.appendChild(h); box.appendChild(when); box.appendChild(ul);
      wantsNews.appendChild(box);
    });
  }

  fetch(FEED, { credentials: "omit" })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) { showStats(d.stats); showNews(d.changelog); })
    .catch(function () { /* the fallback text stays */ });
})();
