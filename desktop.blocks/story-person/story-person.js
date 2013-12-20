modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('story-person', {
        onSetMod : {

            show: function(mod, state) {
                this.domElem.animate({
                    top: state === 'yes' ? '50%' : '200%'
                }, 250);
            }
        }
    });

    provide(DOM);
});