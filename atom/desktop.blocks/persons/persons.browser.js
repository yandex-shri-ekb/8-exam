modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('persons', {
        onSetMod : {
            js : {
                inited : function() {
                    this.bindTo('link', 'click', this._onLinkClick);
                },
            },
        },
        _onLinkClick: function(e) {
            var color = this.getMod($(e.delegateTarget), 'color');
            this.trigger('colorChange', color);
        },
    }, {

    });

    provide(BEMDOM);

});

