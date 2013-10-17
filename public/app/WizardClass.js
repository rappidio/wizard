define(["js/core/Application", "app/model/FirewallConfiguration"],
    function (Application, FirewallConfiguration) {

        return Application.inherit({
            defaults: {
                currentStep: 0,
                config: FirewallConfiguration
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

            gotoNextStep: function(){
                this.set('currentStep', this.$.currentStep + 1);
            },

            isWanConfigType: function(type){
                return this.get('config.wan.type') == type;
            }.onChange("config.wan")
        });
    }
);