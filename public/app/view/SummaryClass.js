define(["js/ui/View", "js/core/I18n"], function (View, I18n) {

  return View.inherit({
    inject: {
      i18n: I18n
    },

    defaults: {
      configuration: null
    },

    labelNat: function(){
      return this.get('configuration.wan.enableNat') ? 'yes' : 'no';
    }.onChange('configuration.wan.enableNat'),

    labelDnsServer: function(){
      var dnsServers, dns2, dns3;
      dnsServers = [this.get('configuration.wan.dnsServer1')]
      if (dns2 = this.get('configuration.wan.dnsServer2')) dnsServers.push(dns2);
      if (dns3 = this.get('configuration.wan.dnsServer3')) dnsServers.push(dns3);
      return this.get('configuration.wan.useDhcpDns') ? 'over DHCP' : dnsServers.join(', ');
    }.onChange('configuration.wan.useDhcpDns', 'configuration.wan.dnsServer1', 'configuration.wan.dnsServer2', 'configuration.wan.dnsServer3')
  });
});
