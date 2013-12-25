modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-popup-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._popup = this.findBlockInside('popup');
                    this._page = this.findBlockOn('page');

                    this.bindTo('link', 'click', this._showPopup)
                        .bindTo('popup', 'click', this._hidePopup)
                        .bindTo('close', 'click', this._hidePopup);
                }
            }
        },
        _showPopup: function() {
            this._blockPage();
            this._popup.show();
        },
        _hidePopup: function() {
            this._unblockPage();
            this._popup.close();
            return false;
        },
        _blockPage: function() {
            this._page
                .setMod('blocked', 'yes')
                .domElem
                .css({top: -$(window).scrollTop()});
        },
        _unblockPage: function() {
            var top = -parseInt(this._page.domElem.css('top'));
            this._page
                .delMod('blocked')
                .domElem
                .css({top: ''});
            $(window).scrollTop(top);
        }
    });

    provide(BEMDOM);

});

