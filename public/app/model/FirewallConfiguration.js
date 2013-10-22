define(['js/data/Model', 'app/entity/WanConfiguration', 'app/entity/TimeConfiguration', 'app/entity/LanConfiguration'],
    function (Model, WanConfiguration, TimeConfiguration, LanConfiguration) {

  return Model.inherit('app.model.FirewallConfiguration', {

    schema: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      hostname: String,
      time: TimeConfiguration
    },

    defaults: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      time: TimeConfiguration
    }

//    ctor: function () {
//      this.callBase();
//    }
  });
});
