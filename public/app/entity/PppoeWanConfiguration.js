define(['app/entity/WanConfiguration'], function(WanConfiguration){


    return WanConfiguration.inherit('app.entity.PppoeWanConfiguration', {

        defaults: {
            type: "pppoe",
            useDnsServer: false
        },

        schema: {
            username: String,
            password: String
        }

    });



});