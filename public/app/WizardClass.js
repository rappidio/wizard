define(["js/core/Application", "app/model/FirewallConfiguration"],
    function (Application, FirewallConfiguration) {

        return Application.inherit({
            defaults: {
                /***
                 * @codeBehind
                 * @type js.core.I18n
                 */
                i18n: null,


                locales: null,
                configuration: FirewallConfiguration
            },

//            _commitChangedAttributes: function ($) {
//                console.log($);
//                this.callBase();
//
//            },

            /***
             * Starts the application
             * @param parameter
             * @param callback
             */
            start: function (parameter, callback) {

                this.set('locales', ["de", "en"]);

                // false - disables autostart
                this.callBase(parameter, false);

                callback();
            },

            /***
             * checks if the "type" wan configuration is active
             * @param type - the type to check
             * @returns {boolean}
             */
            isWanConfigurationActive: function (type) {
                return this.get("configuration.wan.type") === type;
            }.onChange("configuration.wan")
        });
    }
);