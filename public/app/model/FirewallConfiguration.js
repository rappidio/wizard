define(['js/data/Model', 'app/entity/HostnameConfiguration', 'app/entity/WanConfiguration', 'app/entity/LanConfiguration'],
    function (Model, HostnameConfiguration, WanConfiguration, LanConfiguration) {

  return Model.inherit('app.model.FirewallConfiguration', {

    schema: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      hostname: HostnameConfiguration
    },

    defaults: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      hostname: HostnameConfiguration
    }

//    ctor: function () {
//      this.callBase();
//    }
  });
});
