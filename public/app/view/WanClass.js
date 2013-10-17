define(['js/ui/View'], function(View){


    return View.inherit('app.view.WanClass', {

        defaults: {
            modes: null
        },

        isWanConfigurationActive: function(type) {
            return this.get("wan.type") === type;

        }.onChange("wan")
    });
});