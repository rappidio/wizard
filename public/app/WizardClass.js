define(
    ["js/core/Application", "app/model/FirewallConfiguration"],
    function (Application, FirewallConfiguration) {

        return Application.inherit({
            defaults: {
                configuration: FirewallConfiguration,
                I18n: null,
                overwriteMacAddress: false,
                currentStep: 0
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

            hasNext: function() {
                return (this.$.currentStep < (this.$.segmentedView.$children.length-1));
            }.onChange("currentStep"),

            hasPrevious: function() {
                return (this.$.currentStep > 0);
            }.onChange("currentStep"),

            next: function() {
                this.set('currentStep', this.$.currentStep + 1);
            },
            previous: function() {
                this.set('currentStep', this.$.currentStep - 1);
            }

        });
    }
);