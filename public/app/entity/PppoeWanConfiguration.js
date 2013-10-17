define(['app/entity/WanConfiguration'], function(WanConfiguration){


    return WanConfiguration.inherit('app.entity.PppoeWanConfiguration', {

        defaults: {
            type: "pppoe"
        },

        schema: {
            username: String,
            password: String
        }

    });



});