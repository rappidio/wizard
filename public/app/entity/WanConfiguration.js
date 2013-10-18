define(['js/data/Entity', 'app/validator/IpAddressValidator'], function (Entity, IpAddressValidator) {

  return Entity.inherit('app.entity.WanConfiguration', {

    schema: {
      enableNat: Boolean,
      type: String,
      overrideMacAddress: Boolean,
      macAddress: {required: function () {
        return this.$.overrideMacAddress;
      }, type: String},
      'interface': String,
      useDhcpDns: Boolean,
      dnsServer1: {
        required: function () {
          return !this.$.useDhcpDns;
        },
        type: String
      },
      dnsServer2: {required: false, type: String},
      dnsServer3: {required: false, type: String}
    },
    defaults: {
      enableNat: true,
      type: null,
      overrideMacAddress: false,
      'interface': 'eth0',
      enableDnsByDhcp: true
    },
    validators: [
      new IpAddressValidator({field: "dnsServer1"}),
      new IpAddressValidator({field: "dnsServer2"}),
      new IpAddressValidator({field: "dnsServer3"})
    ]
  });

});