modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('user', {
        onSetMod: {
            'js': function() {
                this._bindToClick();
            }
        },
        _bindToClick: function() {
            this.bindTo('icon', 'click', this._onClick);
        },
        _onClick: function() {
            alert(1);
        }
    }, {

    });

    provide(BEMDOM);

});