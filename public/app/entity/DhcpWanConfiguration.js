define(['app/entity/WanConfiguration'], function (WanConfiguration) {

  return WanConfiguration.inherit('app.entity.DhcpWanConfiguration', {

    defaults: {
      type: 'dhcp',
      useDhcpDns: true

    }

  });

});