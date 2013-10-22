define(['js/data/Model', 'app/entity/WanConfiguration', 'app/entity/LanConfiguration'],
    function (Model, WanConfiguration, LanConfiguration) {

  return Model.inherit('app.model.FirewallConfiguration', {

    schema: {
      wan: WanConfiguration,
      lan: LanConfiguration,
      hostname: String
    },

    defaults: {
      wan: WanConfiguration,
      lan: LanConfiguration
    }

//    ctor: function () {
//      this.callBase();
//    }
  });
});
