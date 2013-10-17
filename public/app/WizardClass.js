define(["js/core/Application", "app/model/FirewallConfiguration", "js/core/History"], function (Application, FirewallConfiguration, History) {

        return Application.inherit({
            defaults: {
                configuration: null,
                I18n: null,
                overwriteMacAddress: false,
                currentStep: 0,
                api: null,
                segmentedView: null
            },

            inject: {
                history: History
            },

            _initializationComplete: function(){
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
//
//
//
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

            defaultRoute: function(routeContext) {
                routeContext.navigate("step/1");
            }.async(),

            _commitCurrentStep: function(step, oldStep) {
                this.$.history.navigate("step/" + (step + 1), true, false);
            },

            showStep: function(routeContext, step) {

                if (step > 0 && step < (this.$.segmentedView.$children.length - 1)) {

                    if (step - 2 === this.$.currentStep) {

                        // can navigate forward -> validate
                        var self = this;
                        this.validateStep(this.$.currentStep, function(err, validationErrors) {
                            if (err || (validationErrors && validationErrors.length > 0)) {
                                window.history.back();
                            } else {
                                self.set("currentStep", step - 1);
                            }
                        });

                    } else if (step <= this.$.currentStep) {
                        // backward navigation
                        this.set("currentStep", step - 1);
                    }

                } else {
                    routeContext.navigate("", false);
                }
            },

            validateStep: function(step, callback) {
                var fields;

                switch (step) {
                    case 1:
                        fields = ["wan"];
                        break;
                    case 2:
                        fields = ["lan"];
                        break;
                    case 3:
                        fields = ["hostname"];
                        break;
                    case 4:
                        fields = ["time"];
                        break;
                }

                if (fields) {
                    this.$.configuration.validate({
                        fields: fields
                    }, callback);
                } else {
                    callback();
                }
            },

            navigateLink: function(offset) {
                return "step/" + (this.$.currentStep + offset + 1) ;
            }.onChange("currentStep"),

            next: function () {
                var self = this;

                this.validateStep(this.$.currentStep, function(err) {
                    if (self.$.configuration.isValid()) {
                        self.set('currentStep', self.$.currentStep + 1);
                    }
                });
            },

            save: function(){
                this.$.configuration.save();
            },

            previous: function () {
                this.set('currentStep', this.$.currentStep - 1);
            }

        });
    }
);