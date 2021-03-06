define(["js/core/Application", "app/model/FirewallConfiguration", "js/core/History"],
    function (Application, FirewallConfiguration, History) {

  return Application.inherit({
    defaults: {
      configuration: null,
      I18n: null,
      currentStep: 0,
      highestStep: 0,
      api: null,
      segmentedView: null,
      fade: 'out',
      productName: 'NetworkProtector'
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
      this.set('fade', 'in');
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

    title: function(){
//      i18n.t('steps.welcome')
      switch(this.get('currentStep')) {
        case 0: return 'Welcome';
        case 1: return 'WAN Configuration';
        case 2: return 'LAN Configuration';
        case 3: return 'Time Configuration';
        case 4: return 'Summary';
      }
      return '';
    }.onChange("currentStep"),

    isStep: function(step) {
        return step == this.$.currentStep;
    }.onChange("currentStep"),

    progress: function () {
      switch (this.$.currentStep) {
        case 0: return 20;
        case 1: return 40;
        case 2: return 60;
        case 3: return 80;
      }
      return 100;
    }.onChange("currentStep"),

    isAllowedStep: function (step) {
      return step <= this.get('highestStep');
    }.onChange("highestStep"),

    hasNext: function () {
      return (this.$.currentStep < (this.$.segmentedView.$children.length - 1));
    }.onChange("currentStep"),

    hasPrevious: function () {
      return (this.$.currentStep > 0);
    }.onChange("currentStep"),

    nextButtonLabel: function () {
      return this.hasNext() ? 'Next' : 'Save';
    }.onChange("currentStep"),

    stepsToValidate: function(stepNumber) {
      switch (stepNumber) {
        case 0: return "hostname";
        case 1: return "wan";
        case 2: return "lan";
        case 3: return "time";
      }
      return null;
    },

    validateCurrentStep: function (success) {
      var stepToValidate = this.stepsToValidate(this.$.currentStep);
      var self = this;
      if (stepToValidate) {
        this.$.configuration.validate({fields: [stepToValidate]}, function (err) {
          if (self.$.configuration.$[stepToValidate].isValid()) {
            success();
          }
        });
      } else {
        success();
      }
    },

    next: function () {
      if (this.hasNext()){
        var self = this;
        self.validateCurrentStep(function () {
          self.set('currentStep', self.$.currentStep + 1);
          self.set('highestStep', Math.max(self.$.currentStep, self.$.highestStep));
        });
      } else {
        this.save();
      }
    },

    setCurrentStep: function (step) {
      if (this.isAllowedStep(step)) {
        this.set('currentStep', step);
      }
    },

    save: function () {
      this.$.configuration.save();
    },

    skip: function(){

    },

    previous: function () {
      this.set('currentStep', this.$.currentStep - 1);
    }

  });
});
