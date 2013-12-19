modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('persons', {
        onSetMod : {
            js : {
                inited : function() {
                    this.bindTo('link', 'click', this._onLinkClick);
                    this.bindTo('item', 'mouseenter', this._onMouseEnter);
                    this.bindTo('item', 'mouseleave', this._onMouseLeave);
                },
            },
        },
        _onLinkClick: function(e) {
            var color = this.getMod($(e.delegateTarget), 'color');
            this.trigger('colorChange', { color: color, scroll: this.hasMod('bottom') ? true : false });
        },
        _onMouseEnter: function(e) {
            this.setMod($(e.delegateTarget), 'hovered', 'yes');
        },
        _onMouseLeave: function(e) {
            this.delMod($(e.delegateTarget), 'hovered');
        },
    }, {

    });

    provide(BEMDOM);

});

