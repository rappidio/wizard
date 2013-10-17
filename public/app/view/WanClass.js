define(
  ["js/ui/View", 'js/core/I18n'],
  function (View, I18n) {

    return View.inherit({

      inject: {
        i18n: I18n
      },
      /**
       *  initializes the application variables
       */
      defaults: {
        wan: null,
        modes: null
      },


      /***
       * Starts the application
       * @param parameter
       * @param callback
       */
//      start: function (parameter, callback) {
//        // false - disables autostart
//        this.callBase(parameter, false);
//
//        callback();
//      },

      isWanConfigurationActive: function(mode) {
        return this.get('wan.type') === mode;
      }.onChange('wan'),

      _commitOverrideMacAddress: function(value) {
        if (!value) {
          var wan = this.get('configuration.wan');
          if (wan) {
            wan.set('macAddress', null)
          }
        }
      }
    });
  }
);