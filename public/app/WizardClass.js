define(["js/core/Application", "app/model/FirewallConfiguration"],
    function (Application, FirewallConfiguration) {

        return Application.inherit({
            defaults: {

                i18n: null,
                configuration: FirewallConfiguration
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

            isWanConfigurationActive: function(type) {
                console.log(type)
                return this.get("configuration.wan.type") === type;

            }.onChange("configuration.wan")
        });
    }
);