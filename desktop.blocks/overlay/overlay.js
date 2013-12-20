modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('overlay', {
        onSetMod : {

            js : function() {
                this.bindTo('click', function() {
                    //? findBlock
                    var mainVideo = $('.main-video').bem('main-video');

                    this.setMod('show', 'no');
                    mainVideo.setMod('show', 'no');
                });
            }
        }
    });

    provide(DOM);
});