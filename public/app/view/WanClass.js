define(["js/ui/View", "js/core/I18n"], function(View, I18n) {

    return View.inherit({

        inject: {
            i18n: I18n
        },

        defaults: {
            wan: null,
            modes: null
        },

        /***
         * checks if the "type" wan configuration is active
         * @param type - the type to check
         * @returns {boolean}
         */
        isWanConfigurationActive: function (type) {
            return this.get("wan.type") === type;
        }.onChange("wan")

    });

});