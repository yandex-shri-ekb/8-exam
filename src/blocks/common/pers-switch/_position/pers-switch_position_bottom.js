modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM) {
        DOM.decl({block: 'pers-switch', modName: 'position', modVal: 'bottom'},
            {
                onSetMod: {
                    js: function() {
                        this._initSuper();
                        this.bindTo(this.elem('item'), 'click', function() {
                            $('html, body').animate({scrollTop: 0}, 400);
                        });

                        this._page.trigger('change-state', {
                            type: ['yellow', 'red', 'blue'][Math.random() * 3 | 0]
                        });
                    }
                }
            }
        );

        provide(DOM);
    }
);