modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('click', this._close);
                    this.bindTo('close', 'click', this._close);
                }
            }
        },
        _close: function() {
            this.delMod('showed');
        }
    });

    provide(BEMDOM);

});

