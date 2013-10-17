define(['js/data/Entity'], function(Entity){


    return Entity.inherit('app.entity.WanConfiguration', {

        defaults: {
            type: null,
            "interface": "eth0",
            useDhcpDnsServer: true
        },

        schema: {
            enableNat:  Boolean,
            type:       String,
            macAddress: {required: false, type: String},
            "interface":  String,
            dnsServer1: String,
            dnsServer2: String,
            dnsServer3: String
        },

        supportsDnsServerByDhcp: function() {
            return true;
        }
    });

});