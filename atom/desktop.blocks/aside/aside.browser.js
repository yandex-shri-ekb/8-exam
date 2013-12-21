modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('aside', {
        historyWidth: 972,
        asideWidth: 860,
        onSetMod: {
            js: {
                inited: function() {
                    this._resetButtonVisibility();
                    this.bindTo('button', 'click', this._onButtonClick);
                    $(window).on('resize', $.proxy(this._resetButtonVisibility, this));
                    $(window).on('resize', $.proxy(this._resetAsidePosition, this));
                    this.on('openAside', this._openAside);
                    this.on('closeAside', this._closeAside);
                }
            },
            opened: {
                yes: function() {
                    this._resetAsidePosition();
                },
                no: function() {
                    this.domElem.animate({left: this.historyWidth});
                }
            }
        },
        _onButtonClick: function() {
            if(this.hasMod('opened', 'yes')) {
                this.trigger('closeAside');
            } else {
                this.trigger('openAside');
            }
        },
        _resetButtonVisibility: function() {
            var button = this.elem('button');
            if($(window).width() < this.historyWidth + this.asideWidth) {
                this.delMod(button, 'hide');
            } else {
                this.setMod(button, 'hide', 'yes');
            }
        },
        _resetAsidePosition: function() {
            if(this.hasMod('opened', 'yes')) {
                var windowWidth = $(window).width(),
                    asideLeft = windowWidth - this.asideWidth;
                if(asideLeft > this.historyWidth) {
                    asideLeft = this.historyWidth;
                    this._closeAside();
                }
                this.domElem.animate({left: asideLeft});
            }
        },
        _openAside: function() {
            this.setMod('opened', 'yes');
        },
        _closeAside: function() {
            this.setMod('opened', 'no');
        }
    });

    provide(BEMDOM);
});
