/* Photo and video viewer for .gallery blocks. The only script on the site:
   without it, each thumbnail is a plain link to the full photo or video. */
(function () {
  "use strict";
  var galleries = document.querySelectorAll(".gallery");
  if (!galleries.length || typeof HTMLDialogElement !== "function") return;

  var dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.setAttribute("aria-label", "Media viewer");
  dlg.innerHTML =
    '<figure class="lb-stage"><div class="lb-media"></div><figcaption class="lb-caption"></figcaption></figure>' +
    '<p class="lb-count" aria-live="polite"></p>' +
    '<button type="button" class="lb-btn lb-prev" aria-label="Previous">&#8592;</button>' +
    '<button type="button" class="lb-btn lb-next" aria-label="Next">&#8594;</button>' +
    '<button type="button" class="lb-btn lb-close" aria-label="Close">&#215;</button>';
  document.body.appendChild(dlg);

  var media = dlg.querySelector(".lb-media");
  var caption = dlg.querySelector(".lb-caption");
  var count = dlg.querySelector(".lb-count");
  var items = [];
  var index = 0;

  function show(i) {
    index = (i + items.length) % items.length;
    var link = items[index];
    var thumb = link.querySelector("img");
    var text = link.getAttribute("data-caption") || (thumb ? thumb.alt : "");
    media.textContent = "";
    var el;
    if (link.getAttribute("data-type") === "video") {
      el = document.createElement("video");
      el.controls = true;
      el.autoplay = true;
      el.playsInline = true;
      el.preload = "metadata";
      if (thumb) el.poster = thumb.src;
      el.src = link.href;
      el.setAttribute("aria-label", text);
    } else {
      el = document.createElement("img");
      el.src = link.href;
      el.alt = thumb ? thumb.alt : "";
    }
    media.appendChild(el);
    caption.textContent = text;
    count.textContent = (index + 1) + " / " + items.length;
    var many = items.length > 1;
    dlg.querySelector(".lb-prev").hidden = !many;
    dlg.querySelector(".lb-next").hidden = !many;
  }

  function stop() { media.textContent = ""; }

  galleries.forEach(function (gallery) {
    var links = Array.prototype.slice.call(gallery.querySelectorAll("a"));
    links.forEach(function (link, i) {
      link.addEventListener("click", function (e) {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        items = links;
        show(i);
        dlg.showModal();
      });
    });
  });

  dlg.querySelector(".lb-prev").addEventListener("click", function () { show(index - 1); });
  dlg.querySelector(".lb-next").addEventListener("click", function () { show(index + 1); });
  dlg.querySelector(".lb-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("close", stop);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(index - 1);
    else if (e.key === "ArrowRight") show(index + 1);
  });

  var x0 = null;
  dlg.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener("touchend", function (e) {
    if (x0 === null || items.length < 2) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
