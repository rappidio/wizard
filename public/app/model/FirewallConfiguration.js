define(['js/data/Model', 'app/entity/HostnameConfiguration', 'app/entity/WanConfiguration',
  'app/entity/LanConfiguration', 'app/entity/TimeConfiguration'],
    function (Model, HostnameConfiguration, WanConfiguration, LanConfiguration, TimeConfiguration) {

  return Model.inherit('app.model.FirewallConfiguration', {

    schema: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      hostname: HostnameConfiguration,
      time: TimeConfiguration
    },

    defaults: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      hostname: HostnameConfiguration,
      time: TimeConfiguration
    }

//    ctor: function () {
//      this.callBase();
//    }
  });
});
