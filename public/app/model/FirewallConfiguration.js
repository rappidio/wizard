define(['js/data/Model','app/entity/WANConfiguration', 'app/entity/DhcpConfiguration', 'app/entity/DhcpWanConfiguration', 'app/entity/StaticWanConfiguration'],
    function(Model, WANConfiguration, DhcpConfiguration, DhcpWanConfiguration, StaticWanConfiguration){

    return Model.inherit('app.model.FirewallConfiguration', {

        schema: {
            enableNat: Boolean,
            wan: WANConfiguration,
            ip: String,
            netmask: String,
            enableDhcp: Boolean,
            dhcp: DhcpConfiguration,
            hostname: String
        },

        defaults: {
            enableNat: true,
            enableDhcp: true,
            dhcp: DhcpConfiguration,

            wan: null
        },

        ctor: function() {
            this.callBase();
            this.$modes = [new DhcpWanConfiguration(), new StaticWanConfiguration()];
        },

        modes: function() {
            return this.$modes;
        }


    });



});