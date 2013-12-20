modules.define(
    'i-bem__dom',
    ['jquery__lazyload'],
    function (provide, lazyload, DOM) {
        DOM.decl('image', {
            onSetMod: {
                js: function () {
                    this.domElem.lazyload({
                        threshold: 200,
                        effect: 'fadeIn'
                    });
                }
            }
        });

        provide(DOM);
    }
);
