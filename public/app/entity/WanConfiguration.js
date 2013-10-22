define(['js/data/Entity', 'app/validator/IpAddressValidator'], function (Entity, IpAddressValidator) {

  var whenStatic = function () {
    return this.$.mode === 'static';
  };
  var whenPPPoE = function () {
    return this.$.mode === 'pppoe';
  };
  var whenUseDhcpDns = function () {
    return !this.$.useDhcpDns;
  };
  var whenMacAddressOverride = function () {
    return this.$.overrideMacAddress;
  };


  return Entity.inherit('app.entity.WanConfiguration', {

    schema: {
      enableNat: Boolean,
      mode: String,
      staticIpAddress: {
        required: whenStatic,
        type: String
      },
      staticNetmask: {
        required: whenStatic,
        type: String
      },
      staticGateway: {
        required: whenStatic,
        type: String
      },
      pppoeUsername: {
        required: whenPPPoE,
        type: String
      },
      pppoePassword: {
        required: whenPPPoE,
        type: String
      },
      overrideMacAddress: Boolean,
      macAddress: {
        required: whenMacAddressOverride,
        type: String
      },
      'interface': String,
      useDhcpDns: Boolean,
      dnsServer1: {
        required: whenUseDhcpDns,
        type: String
      },
      dnsServer2: {required: false, type: String},
      dnsServer3: {required: false, type: String}
    },
    defaults: {
      enableNat: true,
      mode: 'dhcp',
      overrideMacAddress: false,
      'interface': 'eth0',
      useDhcpDns: true
    },
    validators: [
      new IpAddressValidator({field: "dnsServer1"}),
      new IpAddressValidator({field: "dnsServer2"}),
      new IpAddressValidator({field: "dnsServer3"}),
      new IpAddressValidator({field: "staticIpAddress"}),
      new IpAddressValidator({field: "staticNetmask"}),
      new IpAddressValidator({field: "staticGateway"})
    ],
    _commitMode: function(newMode, oldMode){
      if (newMode !== 'pppoe') {
        this.set('pppoeUsername', '');
        this.set('pppoePassword', '');
      } else if (newMode !== 'static') {
        this.set('staticIpAddress', '');
        this.set('staticNetmask', '');
        this.set('staticGateway', '');
      }
      if (newMode === 'static') {
        this.set('useDhcpDns', false);
      }
    }
  });

});
