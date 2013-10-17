define([
  'js/data/Model',
  'app/entity/WanConfiguration',
  'app/entity/DhcpWanConfiguration',
  'app/entity/StaticWanConfiguration',
  'app/entity/PppoeWanConfiguration',
  'app/entity/TimeConfiguration'],
  function (Model, WanConfiguration, DhcpWanConfiguration, StaticWanConfiguration, PppoeWanConfiguration, TimeConfiguration) {

    return Model.inherit('app.model.FirewallConfiguration', {

      schema: {
        wan: WanConfiguration,
        time: TimeConfiguration
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
      },

      _commitWan: function (wan) {
        console.log(this)
        if (!wan) {

        }
      }
    });
  });