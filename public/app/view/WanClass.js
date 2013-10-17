define(['js/ui/View', 'js/core/I18n'], function(View, I18n){


    return View.inherit('app.view.WanClass', {

        defaults: {
            modes: null
        },

        inject: {
            i18n: I18n
        },

        isWanConfigurationActive: function(type) {
            return this.get("wan.type") === type;

        }.onChange("wan")
    });
});