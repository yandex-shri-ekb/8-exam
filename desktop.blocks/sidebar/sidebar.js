modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {
    DOM.decl('sidebar', {
        onSetMod : {

            js : function() {
                var self = this;

                this.changeFixed();

                this.bindTo('click', function() {
                    var toggleButton = $('.sidebar-toggle-button').bem('sidebar-toggle-button');

                    if (this.getMod('show') === 'no' && this.getMod('fixed') === 'no') {
                        this.setMod('show', 'yes');
                        toggleButton.setMod('state', 'close');
                    }
                });

                //?
                $(window).on('resize', function() {
                    self.changeFixed();
                    self.setMod('show', 'no');
                });
            },

            fixed: function(mod, state, oldState) {
                //? findBlock
                var sidebarToggleButton = $('.sidebar-toggle-button').bem('sidebar-toggle-button');

                sidebarToggleButton.setMod('show', oldState);
            },

            color: function(mod, state) {
                this.elem('story').hide();
                this.elem('story', 'color', state).show();
            },

            show: function(mod, state) {
                var layout = $('.layout').bem('layout');
                var storyToggler = $('.story-toggler').bem('story-toggler');
                var sidebarToggleButton = $('.sidebar-toggle-button').bem('sidebar-toggle-button');

                if (state === 'yes') {
                    var maxOffsetLeft = 970;
                    var offset = document.body.clientWidth - this._width;

                    this.domElem.animate({
                        'left' : offset < maxOffsetLeft ? offset : maxOffsetLeft
                    });

                    storyToggler.setMod('show', 'no');
                    layout.setMod('sidebar', 'show');
                    sidebarToggleButton.setMod('state', 'close');
                } else {
                    this.domElem.animate({
                        'left' : 970
                    });

                    storyToggler.setMod('show', 'yes');
                    layout.setMod('sidebar', 'hide');
                    sidebarToggleButton.setMod('state', 'help');
                }
            }
        },

        /**
         * Ширина сайдбара
         */
        _width: 850,

        /**
         * Проверка и установка фикрированного состояния
         */
        changeFixed: function() {
            var self = this;
            var maxOffsetLeft = 970;

            if (document.body.clientWidth - this._width > maxOffsetLeft) {
                self.setMod('fixed', 'yes');
            } else {
                self.setMod('fixed', 'no');
            }
        }
    });

    provide(DOM);
});