modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-popup-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._popup = this.findBlockInside('popup');
                    this._page = this.findBlockOn('page');

                    this.bindTo('link', 'click', this._onLinkClick);
                    this.bindTo('popup', 'click', this._hidePopup);
                    this.bindTo('close', 'click', this._hidePopup);
                }
            }
        },
        _onLinkClick: function(e) {
            this._showPopup();
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
        // TODO: вынести в методы блока page
        _blockPage: function() {
            this._page.domElem.css({top: -$(window).scrollTop()});
            this._page.setMod('blocked', 'yes');
        },
        _unblockPage: function() {
            var top = -parseInt(this._page.domElem.css('top'));
            this._page.delMod('blocked');
            this._page.domElem.css({top: ''});
            $(window).scrollTop(top);
        }
    });

    provide(BEMDOM);

});

