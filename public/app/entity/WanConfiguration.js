define(['js/data/Entity'], function (Entity) {


    return Entity.inherit('app.entity.WanConfiguration', {

        schema: {
            type: String,
            dnsServer1: {
                type: String,
                required: false
            },
            dnsServer2: {
                type: String,
                required: false
            },
            dnsServer3: {
                type: String,
                required: false
            },
            useDefaultMacAddress: Boolean,
            macAddress: {
                type: String,
                required: function () {
                    return !this.$.useDefaultMacAddress;
                }
            }
        },
        defaults: {
            useDefaultMacAddress: true
        }

    });


});