define(['js/ui/View', 'js/core/I18n'], function(View, I18n){

    return View.inherit('app.view.WelcomeClass', {

        inject: {
            i18n: I18n
        }
    });
});