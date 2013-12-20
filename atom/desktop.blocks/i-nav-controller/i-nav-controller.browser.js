modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-nav-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    var steps = this.findBlocksInside('steps'),
                        nav = this.findBlockInside('nav'),
                        self = this;

                    $(window).on('scroll', function() {
                        // TODO: брать только текущий steps
                        for(var i = 0, len_i = steps.length; i < len_i; i++) {
                            var items = steps[i].elem('item');
                            for(var j = 0, len_j = items.length; j < len_j; j++) {
                                var rect = items[j].getBoundingClientRect();
                                if (rect.top < 100 && rect.bottom > 100) {
                                    var num = steps[i].getMod($(items[j]), 'num');
                                    nav.setMod('num', num);
                                }
                            }
                        }
                    });
                }
            }
        }
    });

    provide(BEMDOM);

});

