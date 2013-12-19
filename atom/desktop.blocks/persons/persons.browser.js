modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('persons', {
        onSetMod : {
            js : {
                inited : function() {
                    this.bindTo('link', 'click', this._onLinkClick);
                },
            },
        },
        _onLinkClick: function(e) {
            var color = this.getMod([e.delegateTarget], 'color');
            this.trigger('colorChange', color);

            // var c = this.findBlockOutside('i-controller-user');
            // c.changeColor(color);
        },
    }, {

    });


    provide(BEMDOM);

});

