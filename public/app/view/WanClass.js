define(
    ["js/ui/View"],
    function (View) {

        return View.inherit({
            defaults: {
                wan: null,
                modes: null
            },

            isWanConfigurationActive: function (type) {
                return this.get('wan.type') === type;
            }.onChange("wan")

        });
    }
);