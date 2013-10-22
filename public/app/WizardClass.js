define(["js/core/Application", "app/model/FirewallConfiguration", "js/core/History"],
    function (Application, FirewallConfiguration, History) {

  return Application.inherit({
    defaults: {
      configuration: null,
      I18n: null,
      currentStep: 0,
      api: null,
      segmentedView: null
    },

    _initializationComplete: function () {
      this.callBase();

      var api = this.$.api;

      var config = api.createEntity(FirewallConfiguration);
//                var zones = api.createCollection(Collection.of(Zone));
//                zones.fetch({}, function(){
//
//                });
      this.set('configuration', config);
//                config.fetch({
//                    "fetchSubModels": ["zone",""]
//                }, function(err, config){
//                });
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

    hasNext: function () {
      return (this.$.currentStep < (this.$.segmentedView.$children.length - 1));
    }.onChange("currentStep"),

    hasPrevious: function () {
      return (this.$.currentStep > 0);
    }.onChange("currentStep"),

    stepsToValidate: function(stepNumber) {
      switch (stepNumber) {
        case 1:
          return "wan";
        case 2:
          return "lan";
        case 3:
          return "hostname";
      }
      return null;
    },

    validateCurrentStep: function (success) {
      var stepToValidate = this.stepsToValidate(this.$.currentStep);
      var self = this;
      if (stepToValidate) {
        this.$.configuration.validate({fields: stepToValidate}, function (err) {
          if (self.$.configuration.$[stepToValidate].isValid()) {
            success();
          }
        });
      } else {
        success();
      }
    },

    next: function () {
      var self = this;
      self.validateCurrentStep(function(){
        self.set('currentStep', self.$.currentStep + 1);
      });
    },

    save: function () {
      this.$.configuration.save();
    },

    previous: function () {
      this.set('currentStep', this.$.currentStep - 1);
    }

  });
});
