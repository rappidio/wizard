define(['js/data/Entity', 'app/validator/IpAddressValidator', 'app/validator/NetmaskAddressValidator'],
    function (Entity, IpAddressValidator, NetmaskAddressValidator) {

  var whenDhcpEnabled = function () {
    return this.$.enableDhcp;
  };

  return Entity.inherit('app.entity.LanConfiguration', {

    schema: {
      name: String,
      ipAddress: String,
      netmask: String,
      enableDhcp: Boolean,
      from: { required: whenDhcpEnabled, type: String},
      to:   { required: whenDhcpEnabled, type: String},
      enableDnsCache: Boolean,
      dnsServer1: {required: false, type: String},
      dnsServer2: {required: false, type: String}
    },

    defaults: {
      name: 'LAN',
      ipAddress: '2.2.2.2',
      netmask: '255.255.255.0',
      enableDhcp: false,
      enableDnsCache: false
    },
    validators: [
      new IpAddressValidator({field: "ipAddress"}),
      new NetmaskAddressValidator({field: "netmask"}),
      new IpAddressValidator({field: "from"}),
      new IpAddressValidator({field: "to"}),
      new IpAddressValidator({field: "dnsServer1"}),
      new IpAddressValidator({field: "dnsServer2"})
    ],

    _commitEnableDhcp: function (newDhcp) {
      if (newDhcp === false) {
        this.set('from', '');
        this.set('to', '');
        this.set('enableDnsCache', false);
        this.set('dnsServer1', '');
        this.set('dnsServer2', '');
      }
    }

  });

});
