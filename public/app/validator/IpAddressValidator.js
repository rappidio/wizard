define(["js/data/validator/RegExValidator"], function(RegExValidator){

    return RegExValidator.inherit({

        defaults: {
            errorCode: "isNotIPAddressError",
            regEx: /(\d{1,3}\.){3}\d{1,3}/
        }

    });

});