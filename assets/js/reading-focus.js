/* Reading focus: click a paragraph (or list item) in the page body to
   highlight it while you read. Click it again, click another, or press
   Escape to clear. Clicks on links, buttons, code and form controls, and
   clicks that are part of a text selection, are left alone. */
(function () {
  "use strict";

  var content = document.querySelector(".page__content");
  if (!content) return;

  var FOCUS_CLASS = "is-reading";
  var current = null;

  function clear() {
    if (current) {
      current.classList.remove(FOCUS_CLASS);
      current = null;
    }
  }

  content.addEventListener("click", function (event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    // The sticky table of contents lives inside .page__content; skip it.
    if (event.target.closest(".sidebar__right, .toc, nav")) return;

    // Leave interactive elements and code blocks to their own behaviour.
    if (event.target.closest("a, button, input, textarea, select, label, summary, pre, code, figure, img, svg, table")) return;

    // Don't hijack a click that finishes a text selection.
    var selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;

    var block = event.target.closest(".page__content p, .page__content li");
    if (!block || !content.contains(block)) return;

    if (block === current) {
      clear();
      return;
    }
    clear();
    current = block;
    block.classList.add(FOCUS_CLASS);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") clear();
  });
})();
