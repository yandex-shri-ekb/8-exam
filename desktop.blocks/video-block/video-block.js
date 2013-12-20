modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('video-block', {
        onSetMod : {

            js : function() {
                this.bindTo('button', 'click', function() {
                    var mainVideo = $('.main-video').bem('main-video');

                    mainVideo.setMod('show', 'yes');
                });
            },

            color: function(mod, state) {
                var elemButton = this.elem('button');

                this.setMod(elemButton, 'color', state);
            }
        }
    });

    provide(DOM);
});