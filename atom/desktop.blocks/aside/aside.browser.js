/*
modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('aside', {
        onSetMod: {
            js: {
                inited: function() {
                    var self = this;
                    this._setWidths();
                    this._resetButtonVisibility();
                    this._content = this.findBlockOutside('content');

                    this.bindTo('button', 'click', this._onButtonClick);
                    this.bindTo('click', this._onAsideClick);

                    $(window).on('resize', function() {
                        clearTimeout(self.timer);
                        self.timer = setTimeout(function() {
                            self._resetButtonVisibility();
                            self._resetPosition();
                        }, 200);
                    });
                }
            },
            opened: {
                yes: function() {
                    this._resetPosition();
                },
                no: function() {
                    this.domElem.animate({left: this.historyWidth});
                }
            }
        },
        _setWidths: function() {
            var content = this.findBlockOutside('content').elem('history'),
                asideItems = this.findBlockInside('aside-items').elem('inner'),
                borderWidth = parseInt(content.css('border-right-width'));
            this.historyWidth = parseInt(content.outerWidth(true)) - borderWidth;
            this.asideWidth = parseInt(asideItems.outerWidth());
        },
        _onButtonClick: function() {
            if(this.hasMod('opened', 'no')) {
                this._open();
            } else {
                this._close();
            }
            return false;
        },
        _onAsideClick: function() {
            if(this.hasMod('opened', 'no') && $(window).width() < this.historyWidth + this.asideWidth) {
                this._open();
            }
        },
        _resetButtonVisibility: function() {
            var button = this.elem('button');
            if($(window).width() < this.historyWidth + this.asideWidth) {
                this.delMod(button, 'hide');
            } else {
                this.setMod(button, 'hide', 'yes');
                this._open();
            }
        },
        _resetPosition: function() {
            if(this.hasMod('opened', 'yes')) {
                var windowWidth = $(window).width(),
                    asideLeft = windowWidth - this.asideWidth;
                if(asideLeft > this.historyWidth) {
                    asideLeft = this.historyWidth;
                    this._close();
                }
                this.domElem.animate({left: asideLeft});
            }
        },
        _open: function() {
            this.setMod('opened', 'yes');
        },
        _close: function() {
            this.setMod('opened', 'no');
        }
    });

    provide(BEMDOM);
});
*/
