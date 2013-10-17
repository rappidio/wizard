define(['js/data/Entity'], function(Entity){


    return Entity.inherit('app.entity.LanConfiguration', {

        schema: {
            ipAddress: String,
            netmask: String,
            enableDhcp: Boolean,
            from: String,
            to: String,
            enableDnsCache: Boolean, //{required: false, type: String},
            dnsServer1: {required: false, type: String},
            dnsServer2: {required: false, type: String}
        },

        defaults: {
            enableDhcp: true,
            enableDnsCache: true

        }

    });



});