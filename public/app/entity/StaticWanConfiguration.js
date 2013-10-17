define(['app/entity/WanConfiguration'], function (WanConfiguration) {

  return WanConfiguration.inherit('app.entity.StaticWanConfiguration', {

    schema: {
      ipAddress: String,
      gateway: String,
      netmask: String
    },

    defaults: {
      type: 'static'
    }

  });

});