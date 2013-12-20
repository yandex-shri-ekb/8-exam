modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM) {
        DOM.decl('pers-switch',
            {
                onSetMod: {
                    js: this._initSuper
                },

                _initSuper: function () {
                    this._page = this.findBlockOutside('page');
                    this._page.on('change-state', this._onPageStateChanged, this);
                    this.bindTo(this.elem('item'), 'click', this._onItemClicked, this);
                },

                _onPageStateChanged: function (ev, data) {
                    this.delMod(this.elem('item'), 'selected');
                    this.setMod(this.elem('item', 'type', data.type), 'selected', true);
                },

                _onItemClicked: function(ev) {
                    this._page.emit('change-state', this.elemParams($(ev.currentTarget)));
                }
            }
        );

        provide(DOM);
    }
);