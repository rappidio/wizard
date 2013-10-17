define(["js/core/Application", "app/model/FirewallConfiguration"],
    function (Application, FirewallConfiguration) {

        return Application.inherit({
            defaults: {

                i18n: null,
                configuration: FirewallConfiguration,
                currentStep: 0

            },
             /***
             * Starts the application
             * @param parameter
             * @param callback
             */
            start:function (parameter, callback) {
                // false - disables autostart
                this.callBase(parameter, false);

                callback();
            },

            next: function() {
                this.set("currentStep", this.$.currentStep + 1)
            },
            previous: function() {
                this.set("currentStep", this.$.currentStep - 1)
            }
        });
    }
);