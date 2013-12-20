modules.define('i-bem__dom', ['jquery'], function (provide, $, DOM) {
    DOM.decl('story-toggler', {

        //? == persons
        onSetMod: {
            js: function() {
                var self = this;
                var offsetTopScroll;

                $(window).on('scroll', function() {
                    offsetTopScroll = window.pageYOffset || document.documentElement.scrollTop;

                    if (self._permissionShow()) {
                        self.setMod('show', 'yes');
                    } else {
                        self.setMod('show', 'no');
                    }

                    //? hardcode
                    if (offsetTopScroll >= self.startOffsetTop && offsetTopScroll <= 2000) {
                        self.setMod('block', '1');
                    } else if (offsetTopScroll > 2000 && offsetTopScroll <= 2800) {
                        self.setMod('block', '2');
                    } else if (offsetTopScroll > 2800 && offsetTopScroll <= 3600) {
                        self.setMod('block', '3');
                    } else if (offsetTopScroll > 3600) {
                        self.setMod('block', '4');
                    }
                });
            },

            color: function(mod ,state) {
                var elem = this.elem('toggle-item', 'color', state);

                this._setActive(elem);
            },

            show: function(mod, state) {
                var storyPerson = $('.story-person').bem('story-person');

                if (state === 'yes') {
                    if (this._permissionShow()) {
                        this._show();
                        storyPerson.setMod('show', 'yes');
                    }
                } else {
                    this._hide();
                    storyPerson.setMod('show', 'no');
                }
            }
        },

        startOffsetTop: $('.story').offset().top,

        endOffsetTop: $('.persons_position_bottom').offset().top,

        /**
         * Разрешение на показ
         * @returns {boolean}
         * @private
         */
        _permissionShow: function() {
            var windowHeight = $(window).height();
            var offsetTopScroll = window.pageYOffset || document.documentElement.scrollTop;
            var sidebar = $('.sidebar').bem('sidebar');

            //Для того, чтобы показать блок нужно чтобы:
            //позиция скролла больше старта показа блока
            //позиция скролла меньше конца показа блока
            //сайдбар был закрыт
            return (offsetTopScroll >= this.startOffsetTop
                && offsetTopScroll <= this.endOffsetTop - windowHeight)
                && sidebar.getMod('show') === 'no';
        },

        /**
         * Показать блок
         * @private
         */
        _show: function() {
            this.domElem.animate({
                top: 30
            }, 150);
        },

        /**
         * Скрыть блок
         * @private
         */
        _hide: function() {
            this.domElem.animate({
                top: -100
            }, 150);
        },

        /**
         * Установить активным элемент блока
         * @param elem
         * @private
         */
        _setActive: function(elem) {
            this.delMod(this.elem('toggle-item'), 'active');
            this.setMod(elem, 'active');
        }

    },
    {
        live : function() {
            this.liveBindTo('toggle-item', 'click', function(e) {
                var elem = e.currentTarget;
                var color = this.getMod(elem, 'color');
                var layout = this.findBlockOutside('layout');

                this._setActive(elem);
                layout.setMod('color', color);
            });
        }
    });

    provide(DOM);
});