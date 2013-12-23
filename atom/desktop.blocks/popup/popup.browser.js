modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        close: function() {
            this.elem('iframe').attr('src', '');
            this.delMod('showed');
        },
        show: function() {
            this.elem('iframe').attr('src', this.params.src);
            this.setMod('showed', 'yes');
        }
    });

    provide(BEMDOM);

});

