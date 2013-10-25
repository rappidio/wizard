define(["js/data/validator/RegExValidator"], function (RegExValidator) {

  return RegExValidator.inherit({

    defaults: {
      errorCode: "isNotNetmaskAddressError",
      regEx:/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/
    }

  });

});
