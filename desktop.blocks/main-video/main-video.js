modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    //? popup
    DOM.decl('main-video', {
        onSetMod : {

            show: {
                yes: function() {
                    //? findBlock
                    var overlay = $('.overlay').bem('overlay');

                    overlay.setMod('show', 'yes');
                }
            }
        }
    });

    provide(DOM);
});