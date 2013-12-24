modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-nav-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._steps = this.findBlocksInside('steps');
                    this._nav = this.findBlockInside('nav');
                    this._page = this.findBlockOn('page');

                    $(window).on('scroll', $.proxy(this._onWindowScroll, this));
                }
            }
        },
        _onWindowScroll: function() {
            var currentColor = this._page.getMod('color'),
                steps = this._steps;

            for(var i = 0, iLen = steps.length; i < iLen; i++) {
                if(steps[i].getMod('color') !== currentColor)
                    continue;

                var items = steps[i].elem('item');
                for(var j = 0, jLen = items.length; j < jLen; j++) {
                    var rect = items[j].getBoundingClientRect();
                    if (rect.top < 100 && rect.bottom > 100) {
                        var num = steps[i].getMod($(items[j]), 'num');
                        this._nav.setMod('num', num);
                    }
                }
            }
        }
    });

    provide(BEMDOM);

});

