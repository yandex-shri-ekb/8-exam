modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('aside', {
        historyWidth: 972,
        asideWidth: 860,
        onSetMod: {
            js: {
                inited: function() {
                    this.elem('button', this._onButtonClick);
                    this._resetButtonVisibility();
                    $(window).on('resize', $.proxy(this._resetButtonVisibility, this));
                }
            }
        },
        _onButtonClick: function() {
            if(this.hasMod('opened', 'yes')) {
                this.trigger('closeAside');
            } else {
                trigger('openAside');
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
    });

    provide(BEMDOM);
});
