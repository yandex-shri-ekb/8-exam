modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('nav', {
        onSetMod: {
            js: {
                inited : function() {
                    this.bindTo('ico', 'click', this._onIcoClick);
                }
            },
            status: {
                showed: function() {
                    $(this.domElem).animate({top: 20}, 'fast');
                },
                hided: function() {
                    $(this.domElem).animate({top: -100}, 'fast');
                }
            }
        },
        _onIcoClick: function(e) {
            var color = this.getMod($(e.delegateTarget), 'color');
            this.trigger('colorChange', {color: color});
        }
    });

    provide(BEMDOM);

});
