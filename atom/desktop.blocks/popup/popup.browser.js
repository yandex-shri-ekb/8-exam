modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        close: function() {
            this.delMod('showed')
                .elem('iframe')
                .attr('src', '');
        },
        show: function() {
            this.setMod('showed', 'yes')
                .elem('iframe')
                .attr('src', this.params.src);
        }
    });

    provide(BEMDOM);

});

