define(["js/ui/View", 'js/core/I18n'], function (View, I18n) {

    var timeZones = [
        {key: 'tz_1', name: 'Berlin'}
    ];

    return View.inherit({

        inject: {
            i18n: I18n
        },
        /**
         *  initializes the application variables
         */
        defaults: {
            time: null,
            timeZones: timeZones
        }

    });
});