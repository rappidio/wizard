define(["js/ui/View", "js/core/I18n"], function (View, I18n) {

  var modes = ['dhcp', 'static', 'pppoe'];

  return View.inherit({
    inject: {
      i18n: I18n
    },

    defaults: {
      wan: null,
      modes: modes
    },

    is: function (mode) {
      return this.get('wan.mode') === mode;
    }.onChange("wan.mode")

  });
});
