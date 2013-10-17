define(
  ["js/core/Application", "app/model/FirewallConfiguration"],
  function (Application, FirewallConfiguration) {

    return Application.inherit({
      /**
       *  initializes the application variables
       */
      defaults: {
        configuration: FirewallConfiguration
      },
      /***
       * Starts the application
       * @param parameter
       * @param callback
       */
      start: function (parameter, callback) {
        // false - disables autostart
        this.callBase(parameter, false);

        callback();
      },

      isWanConfigurationActive: function(mode) {
        return this.get('configuration.wan.type') === mode;
      }.onChange('configuration.wan')
    });
  }
);