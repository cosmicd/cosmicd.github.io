(function(n, s, d) {
  (n.show = function(i) {
    i.hasClass("hidden") && i.removeClass("hidden");
  }),
    (n.hide = function(i) {
      i.hasClass("hidden") || i.addClass("hidden");
    }),
    (n.clearforms = function(n) {
      for (i = 0; i < n.length; i++) document.forms[n[i]].reset();
    });
})((window.misc = window.misc || {}), jQuery);
