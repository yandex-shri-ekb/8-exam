modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('content', {
        onSetMod: {
            js: {
                inited: function() {
                    var self = this;
                    this._aside = this.findBlockInside('aside');
                    this._setWidths();
                    this._setStatuses();

                    this.bindTo(this._aside.elem('button'), 'click', this._onButtonClick);
                    this.bindTo('history', 'click', this._onHistoryClick);
                    this.bindTo('aside', 'click', this._onAsideClick);

                    $(window).on('resize', function() {
                        clearTimeout(self.timer);
                        self.timer = setTimeout($.proxy(self._onResize, self), 200);
                    });
                }
            },
            aside: {
                opened: function() {
                    var left = $(window).width() - this.asideWidth;
                    this._moveAside(left > this.historyWidth ? this.historyWidth : left);
                },
                closed: function() {
                    this._moveAside(this.historyWidth);
                }
            },
            control: {
                disable: function() {
                    this._moveAside(this.historyWidth);
                },
                enable: function() {
                    this.setMod('aside', 'closed');
                }
            }
        },
        _onResize: function() {
            this._setStatuses();
            if(this.hasMod('control', 'enable') && this.hasMod('aside', 'opened')) {
                this._moveAside($(window).width() - this.asideWidth);
            }
        },
        _setWidths: function() {
            var content = this.elem('history'),
                asideItems = this._aside.findBlockInside('aside-items').elem('inner'),
                borderWidth = parseInt(content.css('border-right-width'));
            this.historyWidth = parseInt(content.outerWidth(true)) - borderWidth;
            this.asideWidth = parseInt(asideItems.outerWidth());
        },
        _setStatuses: function() {
            if($(window).width() < this.historyWidth + this.asideWidth) {
                this.setMod('control', 'enable');
                if(!this.hasMod('aside')) {
                    this.setMod('aside', 'closed');
                }
            } else {
                this.setMod('control', 'disable');
                if(!this.hasMod('aside')) {
                    this.setMod('aside', 'opened');
                }
            }
        },
        _onButtonClick: function() {
            if(this.hasMod('aside', 'closed')) {
                this.setMod('aside', 'opened');
            } else {
                this.setMod('aside', 'closed');
            }
            return false;
        },
        _onAsideClick: function() {
            if(this.hasMod('control', 'enable') && this.hasMod('aside', 'closed')) {
                this.setMod('aside', 'opened');
            }
        },
        _onHistoryClick: function() {
            if(this.hasMod('control', 'enable') && this.hasMod('aside', 'opened')) {
                this.setMod('aside', 'closed');
            }
        },
        _moveAside: function(left) {
            this._aside.domElem.animate({left: left});
        }
    });

    provide(BEMDOM);

});
