modules.define(
    'i-bem__dom',
    ['jquery', 'functions__debounce'],
    function (provide, $, debounce, DOM) {

        /**
         * Описывает поведение плавающего блока с поясняющей информацией.
         */
        DOM.decl('drawer', {
            onSetMod: {
                js: function() {
                    this.$window = $(window);
                    this.$document = $(document);

                    this._container = this.findBlockOutside('page').findBlockInside('container');

                    this._initialize();

                    this.bindTo(this.$window, 'resize', debounce(this._initialize, 150), this);
                    this.bindTo(this.elem('control'), 'click', this._toggle, this);

                    this.elem('block').each(function(i, el) {
                        var $el = $(el),
                            selector = $el.data('adjusted-to');

                        selector && $el.height($(selector).height() - 36);
                    });
                }
            },

            _initialize: function () {
                if(this.$window.width() < 972 + 800) {
                    this.bindTo(this.domElem, 'click', this.active, this);
                    this.setMod('covered');
                } else {
                    this.unbindFrom(this.domElem, 'click');
                    this.delMod('covered');
                    this.disactive();
                }
            },

            _open: function() {
                var left = this.$window.width() - 800;
                this.domElem.css({left: left > 154 ? left : 154});
                this.setMod('opened', true);
                this.setMod(this.elem('control'), 'opened');
            },

            _close: function() {
                this.domElem.removeAttr('style');
                this.delMod('opened');
                this.delMod(this.elem('control'), 'opened');
            },

            _disactiveOnKeypress: function(ev) {
                ev.which === 27 && this.disactive();
            },

            _toggle: function() {
                this.hasMod('opened') ? this.disactive() : this.active();
                return false;
            },

            active: function() {
                this._open();
                this._container.disactive();
                this.bindTo(this.$window, 'resize', this._open, this);
                this.bindTo(this.$document, 'keydown', this._disactiveOnKeypress, this);
            },

            disactive: function() {
                this._close();
                this._container.active();
                this.unbindFrom(this.$window, 'resize', this._open);
                this.unbindFrom(this.$document, 'keydown', this._disactiveOnKeypress);
            }
        });

        provide(DOM);
    }
);
