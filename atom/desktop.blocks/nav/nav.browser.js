modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('nav', {
        onSetMod: {
            status: {
                showed: function() {
                    $(this.domElem).animate({top: 20}, 'fast');
                },
                hided: function() {
                    $(this.domElem).animate({top: -100}, 'fast');
                },
            },
        },
    });

    provide(BEMDOM);

});
