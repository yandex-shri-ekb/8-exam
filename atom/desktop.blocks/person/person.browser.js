modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('person', {
        onSetMod: {
            status: {
                showed: function() {
                    $(this.domElem).animate({bottom: '50%'}, 'fast');
                },
                hided: function() {
                    $(this.domElem).animate({bottom: -220}, 'fast');
                },
            },
        },
    });

    provide(BEMDOM);

});

