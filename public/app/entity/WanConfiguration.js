define(['js/data/Entity'], function (Entity) {

    return Entity.inherit('app.entity.WanConfiguration', {

        schema: {
            enableNat: Boolean,
            type: String,
            macAddress: {
                required: function () {
                    return this.$.overwriteMacAddress;
                },
                type: String
            },
            'interface': String,
            dnsServer1: String,
            dnsServer2: String,
            dnsServer3: String
        },
        defaults: {
            enableNat: true,
            type: null,
            'interface': 'eth0',
            overwriteMacAddress: false
        },
        _commitOverwriteMacAddress: function (value) {
            // clear mac address from wan configuration
            if (!value) {
                this.set('macAddress', null);
            }
        }

    });

});