modules.define(
    'i-bem__dom',
    ['jquery', 'functions__debounce'],
    function (provide, $, debounce, DOM) {
        DOM.decl('popup', {
            onSetMod: {
                js: function() {
                    this.bindTo(this.elem('overlay'), 'click', this.close, this);
                    this.$document = $(document);
                }
            },

            open: function(content) {
                this.setMod('opened', true);
                var contentElem = this.elem('content').html(content);

                contentElem.css({
                    'margin-top': -contentElem.height()/2,
                    'margin-left': -contentElem.width()/2
                });

                this.bindTo(this.$document, 'keydown', this._closeOnKeypress, this);
            },

            close: function () {
                this.elem('content').empty();
                this.delMod('opened');

                this.unbindFrom(this.$document, 'keydown', this._closeOnKeypress);
            },

            _closeOnKeypress: function(ev) {
                ev.which === 27 && this.close();
            }
        });

        provide(DOM);
    }
);
