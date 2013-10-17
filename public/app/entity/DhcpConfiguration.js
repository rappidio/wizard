define(['js/data/Entity'], function (Entity) {


    return Entity.inherit('app.entity.DhcpConfiguration', {

        schema: {
            from: String,
            to: String,
            enableDnsCache: Boolean,
            dnsServer1: {
                type: String,
                required: false
            },
            dnsServer2: {
                type: String,
                required: false
            }
        },

        defaults: {
            enableDnsCache: true
        }

    });


});