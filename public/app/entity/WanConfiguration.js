define(['js/data/Entity'], function (Entity) {

  return Entity.inherit('app.entity.WanConfiguration', {

    schema: {
      enableNat: Boolean,
      type: String,
      overrideMacAddress: Boolean,
      macAddress: {required: false, type: String},
      'interface': String,
      enableDnsByDhcp: Boolean,
      dnsServer1: String,
      dnsServer2: String,
      dnsServer3: String
    },
    defaults: {
      enableNat: true,
      type: null,
      overrideMacAddress: false,
      'interface': 'eth0',
      enableDnsByDhcp: true
    }

  });

});