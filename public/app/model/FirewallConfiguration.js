define(['js/data/Model', 'app/entity/WanConfiguration', 'app/entity/LanConfiguration', 'app/entity/DhcpWanConfiguration', 'app/entity/StaticWanConfiguration', 'app/entity/PppoeWanConfiguration'],
  function (Model, WanConfiguration, LanConfiguration, DhcpWanConfiguration, StaticWanConfiguration, PppoeWanConfiguration) {

    return Model.inherit('app.model.FirewallConfiguration', {

        schema: {
            wan: WanConfiguration,
            lan: LanConfiguration
        },

        defaults: {
            wan: null,
            modes: null,
            lan: LanConfiguration
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