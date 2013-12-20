modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('story', {

        /**
         * Задержка переключения истории после клика
         */
        _delay: 100,

        onSetMod : {
            color: function(mod, state, oldState) {
                var storyPerson = this.findBlockInside('story-person');

                storyPerson.setMod('color', state);

                setTimeout(function() {
                    $('.story-' + oldState)
                        .stop()
                        .animate({
                            'left': '100%'
                        }, 600, function() {
                            $(this).hide();
                        });

                    $('.story-' + state)
                        .css({
                            'left': '-150%'
                        })
                        .show()
                        .stop()
                        .animate({
                            'left': '-265'
                        }, 600);
                }, this._delay);
            }
        }
    });

    provide(DOM);
});