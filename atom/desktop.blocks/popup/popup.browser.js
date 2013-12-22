modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        close: function() {
            this.delMod('showed');
        },
        show: function() {
            this.setMod('showed', 'yes');
        }
    });

    provide(BEMDOM);

});

