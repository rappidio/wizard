define(['js/data/Model', 'app/entity/WanConfiguration', 'app/entity/DhcpWanConfiguration', 'app/entity/StaticWanConfiguration', 'app/entity/PppoeWanConfiguration', 'app/entity/TimeConfiguration', 'app/entity/LanConfiguration'],
    function (Model, WanConfiguration, DhcpWanConfiguration, StaticWanConfiguration, PppoeWanConfiguration, TimeConfiguration, LanConfiguration) {

        return Model.inherit('app.model.FirewallConfiguration', {

            schema: {
                wan: WanConfiguration,
                lan: LanConfiguration,
                hostname: String,
                time: TimeConfiguration
            },

            defaults: {
                wan: null,
                lan: LanConfiguration,
                modes: null,
                time: TimeConfiguration
            },

            ctor: function () {
                this.callBase();
                this.set('modes', [
                    new DhcpWanConfiguration(),
                    new StaticWanConfiguration(),
                    new PppoeWanConfiguration()
                ])
            }
        });
    });