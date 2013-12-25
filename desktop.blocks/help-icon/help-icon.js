modules.define('i-bem__dom', function (provide, BEMDOM) {

    BEMDOM.decl('help-icon', {
        onSetMod: {
            'js': function () {
                this.bindTo('click', this._onClick);
                this.bindTo('mouseenter', this._onMouseChange);
                this.bindTo('mouseleave', this._onMouseChange);
            }
        },

        _onClick: function (e) {
            e.stopPropagation();
            this.findBlockOutside('atom-ledge').toggleMod('opened', 'yes');
        },

        _onMouseChange: function () {
            this.toggleMod('active', 'yes', 'no');
        }
    });

    provide(BEMDOM);

});