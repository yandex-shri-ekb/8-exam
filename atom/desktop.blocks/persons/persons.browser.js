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
            // получить цвет из модификатора
            // var color = this.getMod('color')
            // var c = this.findBlockOutside('i-controller-user');
            // c.changeColor(color);
        },
    }, {

    });


    provide(BEMDOM);

});

