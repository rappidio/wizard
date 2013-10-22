define(['js/data/Entity'], function (Entity) {

  var whenDhcpEnabled = function () {
    return this.$.enableDhcp;
  };

  return Entity.inherit('app.entity.LanConfiguration', {

    schema: {
      ipAddress: String,
      netmask: String,
      enableDhcp: Boolean,
      from: { required: whenDhcpEnabled, type: String},
      to: { required: whenDhcpEnabled, type: String},
      enableDnsCache: Boolean,
      dnsServer1: {required: false, type: String},
      dnsServer2: {required: false, type: String}
    },

    defaults: {
      enableDhcp: false,
      enableDnsCache: false

    },
    _commitEnableDhcp: function (newDhcp) {
      if (newDhcp === false) {
        this.set('from', '');
        this.set('to', '');
        this.set('enableDnsCache', false);
      }
    },
    _commitEnableDnsCache: function (newDnsCache) {
      if (newDnsCache === false) {
        this.set('dnsServer1', '');
        this.set('dnsServer2', '');
      }
    }

  });

});
