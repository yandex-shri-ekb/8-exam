modules.define(
    'i-bem__dom',
    ['jquery', 'functions__debounce', 'modernizr'],
    function (provide, $, debounce, modernizr, DOM) {

        /**
         * Описывает поведение плавающего блока с поясняющей информацией.
         */
        DOM.decl('drawer', {
            onSetMod: {
                js: function() {
                    this.$window = $(window);
                    this.$document = $(document);

                    this._minWidth = 800;
                    this._containerWidth = 972;

                    this._page = this.findBlockOutside('page');
                    this._container = this._page.findBlockInside('container');

                    this._initialize();

                    this._debounceOpen = debounce(this._open, 100);

                    this.bindTo(this.$window, 'resize', debounce(this._initialize, 150), this);
                    this.bindTo(this.elem('control'), 'click', this._toggle, this);

                    this.elem('block').each(function(i, el) {
                        var $el = $(el),
                            selector = $el.data('adjusted-to');

                        selector && $el.height($(selector).height() - 36);
                    });

                    this._page.on('change-state', $.proxy(this, 'disactive'));
                }
            },

            _initialize: function () {
                this.unbindFrom(this.domElem, 'click');

                if(this.$window.width() < this._containerWidth + this._minWidth) {
                    this.bindTo(this.domElem, 'click', this.active, this);
                    this.setMod('covered');
                } else {
                    this.delMod('covered');
                    this.disactive();
                }
            },

            _open: function() {
                var left = this.$window.width() - this._minWidth,
                    position = {left: left > 154 ? left : 154};

                if(modernizr.csstransitions) {
                    this.domElem.css(position);
                } else {
                    this.domElem.animate(position, 200);
                }

                this.setMod('opened', true);
                this.setMod(this.elem('control'), 'opened');
            },

            _close: function() {
                if(modernizr.csstransitions) {
                    this.domElem.removeAttr('style');
                } else {
                    this.domElem.animate({left: this._containerWidth}, 200);
                }

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
                this.bindTo(this.$window, 'resize', this._debounceOpen, this);
                this.bindTo(this.$document, 'keydown', this._disactiveOnKeypress, this);
            },

            disactive: function() {
                this._close();
                this._container.active();
                this.unbindFrom(this.$window, 'resize', this._debounceOpen);
                this.unbindFrom(this.$document, 'keydown', this._disactiveOnKeypress);
            }
        });

        provide(DOM);
    }
);
