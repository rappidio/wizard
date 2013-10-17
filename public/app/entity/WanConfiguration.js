define(['js/data/Entity'], function (Entity) {

  return Entity.inherit('app.entity.WanConfiguration', {

    schema: {
      enableNat: Boolean,
      type: String,
      macAddress: {required: false, type: String},
      'interface': String,
      useDhcpDns: Boolean,
      dnsServer1: String,
      dnsServer2: String,
      dnsServer3: String
    },

    defaults: {
      enableNat: true,
      type: null,
      'interface': 'eth0'
    }
  });

});