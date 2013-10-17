define(['app/entity/WanConfiguration'], function (WanConfiguration) {

  return WanConfiguration.inherit('app.entity.PppoeWanConfiguration', {
    schema: {
      username: String,
      password: String
    },
    defaults: {
      type: 'pppoe',
      useDhcpDns: true
    }

  });

});