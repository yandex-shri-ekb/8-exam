modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('person', {
        onSetMod : {

            js :  function() {
                var self = this;
                var layout = this.findBlockOutside('layout');
                var persons = this.findBlockOutside('persons');

                this.bindTo('image name', 'click', function() {
                    var color = self.getMod('color');

                    layout.setMod('color', color);

                    if (persons.getMod('position') === 'bottom') {
                        var startOffsetTop = $('.persons_position_top').offset().top;

                        //? ie
                        $('body, html').animate({ scrollTop: startOffsetTop - 18 }, 500);
                    }
                });

                this.bindTo('image name', 'mouseenter mouseleave', function(e) {
                    var personColor = self.getMod('color');
                    var layoutColor = layout.getMod('color');

                    if (e.type === 'mouseenter') {
                        persons.expand(personColor, 0);
                    } else {
                        persons.expand(layoutColor, 500);
                    }
                });
            }
        }
    });

    provide(DOM);
});