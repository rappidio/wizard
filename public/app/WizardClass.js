define(
  ["js/core/Application", "app/model/FirewallConfiguration"],
  function (Application, FirewallConfiguration) {

    return Application.inherit({
      /**
       *  initializes the application variables
       */
      defaults: {
        i18n: null,
        wizardSteps: null,
        currentStep: 0,
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

      next: function() {
        this.set('currentStep', this.get('currentStep') + 1);
      },

      back: function(){
        this.set('currentStep', this.get('currentStep') - 1);
      },

      hasPrevious: function() {
        return this.$.currentStep > 0;
      }.onChange('currentStep'),

      hasNext: function() {
        return this.$.currentStep < this.$.wizardSteps.$children.length - 1;
      }.onChange('currentStep')

    });
  }
);