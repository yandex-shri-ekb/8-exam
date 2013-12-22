/* Uncaught TypeError: Cannot call method 'decl' of undefined 


modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('page', {
        block: function() {
            this.domElem.css({top: -$(window).scrollTop()});
            this.setMod('blocked', 'yes');
        },
        unblock: function() {
            var top = -parseInt(this.domElem.css('top'));
            this.delMod('blocked');
            this.domElem.css({top: ''});
            $(window).scrollTop(top);
        }
    });

    provide(BEMDOM);

});
*/