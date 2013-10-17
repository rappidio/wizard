define(['app/entity/WanConfiguration'], function(WanConfiguration){


    return WanConfiguration.inherit('app.entity.StaticWanConfiguration', {

        defaults: {
            type: "static",
            useDhcpDnsServer: false
        },

        schema: {
          ipAddress:    String,
          netmask:      String,
          gateway:      String
        },

        supportsDnsServerByDhcp: function() {
            return false;
        }
    });



});