modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('i-popup-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._popup = this.findBlockOn('popup', 'popup');
                    this.bindTo('link', 'click', this._onLinkClick);
                },
            },
        },
        _onLinkClick: function(e) {
            this._showPopup();
        },
        _showPopup: function() {
            this._popup.setMod('showed', 'yes');
        },
    });

    provide(BEMDOM);

});

