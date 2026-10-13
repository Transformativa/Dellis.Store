/* Dellis site analytics.
 * Counts unique visitors, menu/section clicks and outbound link clicks into the Supabase table public.dellis_events. No cookies, no personal data: each browser
 * gets a random ID kept in localStorage. The key below is a public (publishable) key; the
 * table only allows inserts from the website, so nobody can read the data with it.
 *
 * To exclude your own visits, open the site once with ?notrack=1 (undo with ?notrack=0).
 */
(function () {
  "use strict";
  var URL_ = "https://wfycaivacjejoliyrzsz.supabase.co/rest/v1/dellis_events";
  var KEY = "sb_publishable_VGaGwFmj1dOWuM7ns3Bn0Q_eQXnnX4g";

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {}
    return null;
  }

  // Owner opt-out
  var m = /[?&]notrack=([01])/.exec(location.search);
  if (m) store("dellis_notrack", m[1] === "1" ? "1" : "");
  if (store("dellis_notrack")) return;

  // Skip local previews, headless browsers and obvious bots
  if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return;
  if (navigator.webdriver) return;
  if (/bot|crawl|spider|slurp|headless|preview|lighthouse/i.test(navigator.userAgent)) return;

  var vid = store("dellis_vid");
  if (!vid) {
    vid = (window.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2)).replace(/-/g, "").slice(0, 32);
    store("dellis_vid", vid);
  }

  var page = location.pathname.replace(/index\.html$/, "").slice(0, 120) || "/";
  var referrer = "";
  try { referrer = document.referrer ? new URL(document.referrer).hostname : ""; } catch (e) {}
  if (referrer === location.hostname) referrer = "";

  function send(event, target, label) {
    var body = JSON.stringify({
      visitor_id: vid, event: event, page: page,
      target: target ? String(target).slice(0, 200) : null,
      label: label ? String(label).replace(/\s+/g, " ").trim().slice(0, 120) : null,
      referrer: referrer ? referrer.slice(0, 200) : null
    });
    try {
      fetch(URL_, {
        method: "POST", keepalive: true,
        headers: { "apikey": KEY, "Content-Type": "application/json", "Prefer": "return=minimal" },
        body: body
      }).catch(function () {});
    } catch (e) {}
  }

  var SERVICES = [
    [/(^|\.)amazon\.|(^|\.)amzn\.|^link\.amazon$/, "Amazon"],
    [/spotify\.com$/, "Spotify"],
    [/music\.apple\.com$/, "Apple Music"],
    [/youtube\.com$|youtu\.be$/, "YouTube"],
    [/printful\./, "Printful"],
    [/printify\./, "Printify"],
    [/barnesandnoble\.com$/, "Barnes & Noble"],
    [/facebook\.com$/, "Facebook"],
    [/linkedin\.com$/, "LinkedIn"]
  ];
  function service(host) {
    for (var i = 0; i < SERVICES.length; i++) if (SERVICES[i][0].test(host)) return SERVICES[i][1];
    return host;
  }
  function sectionOf(el) {
    var s = el.closest("section[id]");
    if (s) return s.id;
    if (el.closest("footer")) return "footer";
    if (el.closest("header")) return "header";
    if (el.closest("aside")) return "dive-menu";
    return "page";
  }
  function textOf(a) {
    var h = a.querySelector("h3");
    return a.getAttribute("aria-label") || (h && h.textContent) || a.title || a.textContent || "";
  }

  // Page view
  send("pageview", null, null);

  // Clicks (capture phase so new-tab links are logged before leaving)
  document.addEventListener("click", function (e) {
    var el = e.target;
    if (!el || !el.closest) return;

    var a = el.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";

    if (href.charAt(0) === "#") {
      send("nav_click", href, textOf(a));
      return;
    }
    if (/^mailto:/i.test(href)) {
      send("outbound_click", "Email", sectionOf(a) + " · email");
      return;
    }
    var u;
    try { u = new URL(a.href, location.href); } catch (err) { return; }
    if (u.hostname && u.hostname !== location.hostname && u.hostname !== "dellis.store") {
      send("outbound_click", service(u.hostname), sectionOf(a) + " · " + textOf(a));
    } else if (u.pathname.indexOf("picks") !== -1) {
      send("nav_click", u.pathname + u.hash, textOf(a));
    }
  }, true);

})();
