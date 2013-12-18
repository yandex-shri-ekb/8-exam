modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('video', {
        onSetMod : {
            js : {
                inited : function() {
                    this.bindTo('link', 'click', this._onLinkClick);
                },
            },
        },
        _onLinkClick: function(e) {
            alert('Открыть попап');
            // TODO: Почему-то не находит
            // var popup = this.findBlockOutside('popup');
            // popup.setMod('showed', 'yes');
        },
    }, {

    });

    provide(BEMDOM);

});

