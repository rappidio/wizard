define(['js/data/Model', 'app/entity/WanConfiguration'], function (Model, WanConfiguration) {

  return Model.inherit('app.model.FirewallConfiguration', {

    schema: {
      wan: WanConfiguration
    },

    defaults: {

    }



  });

});