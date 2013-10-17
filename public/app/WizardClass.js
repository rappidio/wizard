define(["js/core/Application", "app/model/FirewallConfiguration"],
    function (Application, FirewallConfiguration) {

        return Application.inherit({
            defaults: {
                /***
                 * @codeBehind
                 * @type js.core.I18n
                 */
                i18n: null,

                /***
                 * @codeBehind
                 * @type js.ui.SegmentedView
                 */
                steps: null,

                currentStep: 0,
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

            next: function() {
                this.set("currentStep", this.$.currentStep + 1);
            },

            previous: function() {
                this.set("currentStep", this.$.currentStep - 1);
            },

            hasNext: function() {
                return this.$.currentStep < this.$.steps.$children.length - 1;
            }.onChange("currentStep"),

            hasPrevious: function() {
                return this.$.currentStep > 0;
            }.onChange("currentStep")
        });
    }
);