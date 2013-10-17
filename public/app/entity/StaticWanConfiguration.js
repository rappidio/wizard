define(['app/entity/WanConfiguration'], function (WanConfiguration) {


    return WanConfiguration.inherit('app.entity.StaticWanConfiguration', {

        schema: {
            type: String,
            ip: String,
            netmask: String,
            gateway: String
        },

        defaults: {
            type: "static"
        },

        configDnsServers: function(){
            return true;
        }

    });


});