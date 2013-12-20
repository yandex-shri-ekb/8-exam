modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('persons', {
        onSetMod : {

            color:  function(mod, state) {
                var persons = this.findBlocksInside('person');

                for (var i = 0, l = persons.length; i < l; i++) {
                    if (persons[i].getMod('color') === state) {
                        persons[i].setMod('active');
                        persons[i].setMod('expand');
                    } else {
                        persons[i].delMod('active');
                    }
                }
            }
        },

        /**
         * Раскрыть информацию о человечке
         * @param color цвет человечка
         * @param delay задержка появления информации
         */
        expand: function(color, delay) {
            var self = this;

            var persons = this.findBlocksInside('person');

            for (var i = 0, l = persons.length; i < l; i++) {
                if (persons[i].getMod('color') === color) {
                    if (delay === 0) clearTimeout(self.timer);

                    (function(i) {
                        self.timer = setTimeout(function() {
                            persons[i].setMod('expand');
                        }, delay);
                    })(i);

                } else {
                    persons[i].delMod('expand');
                }
            }
        },

        /**
         * Таймер задержки автоматического сброса информации у человечка
         */
        timer: null
    });

    provide(DOM);
});