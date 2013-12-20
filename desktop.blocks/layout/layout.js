modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('layout', {
        onSetMod : {

            js : function() {
                var colors = ['yellow', 'red', 'blue'];
                var layoutColor = colors[Math.floor(Math.random() * colors.length)];

                this.setMod('color', layoutColor);

                this.bindTo('click', function() {
                    //? findBlock
                    var sidebar = $('.sidebar').bem('sidebar');

                    if (this.getMod('sidebar') === 'show') {
                        this.delMod('sidebar');
                        sidebar.setMod('show', 'no');
                    }
                });
            },

            //? layout vs page
            color:  function(mod, state) {
                var story = this.findBlockInside('story');
                var persons = this.findBlockInside('persons');
                var storyToggler = this.findBlockInside('story-toggler');
                var videoBlock = this.findBlockInside('video-block');
                var sidebar = $('.sidebar').bem('sidebar');

                story.setMod('color', state);
                persons.setMod('color', state);
                storyToggler.setMod('color', state);
                sidebar.setMod('color', state);
                videoBlock.setMod('color', state);

                persons.expand(state, 0);
            }
        }
    });

    provide(DOM);
});