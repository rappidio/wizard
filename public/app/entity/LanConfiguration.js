define(['js/data/Entity'], function(Entity){


    return Entity.inherit('app.entity.LanConfiguration', {

        schema: {
            ipAddress: String,
            netmask: String,
            enableDhcp: Boolean,
            from: { required: function() {return !this.$.enableDhcp;}, type: String},
            to: { required: function() {return !this.$.enableDhcp;}, type: String},
            enableDnsCache: Boolean,
            dnsServer1: {required: false, type: String},
            dnsServer2: {required: false, type: String}
        },

        defaults: {
            enableDhcp: true,
            enableDnsCache: true

        }

    });



});