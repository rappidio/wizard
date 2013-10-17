define(['js/data/Model', 'app/entity/WanConfiguration', 'app/entity/DhcpWanConfiguration', 'app/entity/StaticWanConfiguration', 'app/entity/PppoeWanConfiguration'],
  function (Model, WanConfiguration, DhcpWanConfiguration, StaticWanConfiguration, PppoeWanConfiguration) {

    return Model.inherit('app.model.FirewallConfiguration', {

        schema: {
            wan: WanConfiguration
        },

        defaults: {
            wan: null,
            modes: null
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