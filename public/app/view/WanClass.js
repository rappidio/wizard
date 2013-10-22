define(["js/ui/View", "js/core/I18n"], function (View, I18n) {

    return View.inherit({
      inject: {
        i18n: I18n
      },

      defaults: {
        wan: null,
        modes: ['dhcp', 'static', 'pppoe']
      },

      isStatic: function () {
        return this.get('wan.mode') === 'static';
      }.onChange("wan.mode"),

      isPppoe: function () {
        return this.get('wan.mode') === 'pppoe';
      }.onChange("wan.mode")

    });
  }
);
