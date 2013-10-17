define(['app/entity/WanConfiguration'], function(WanConfiguration){


    return WanConfiguration.inherit('app.entity.StaticWanConfiguration', {

        defaults: {
            type: "static"
        },

        schema: {
          ipAddress:    String,
          netmask:      String,
          gateway:      String
        }
    });



});