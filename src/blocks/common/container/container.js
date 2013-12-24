modules.define(
    'i-bem__dom',
    function (provide, DOM) {
        DOM.decl('container', {
            onSetMod: {
                js: function() {
                    this._page = this.findBlockOutside('page');
                    this._drawer = this._page.findBlockInside('drawer');
                    this._page.on('change-state', this._onPageStateChanged, this);
                }
            },

            _onPageStateChanged: function(ev, data) {
                this.setMod('type', data.type);
            },

            disactive: function() {
                this.setMod('disactive', true);
                this.bindTo(this.domElem, 'click', function() {
                    this._drawer.disactive();
                    this.active();
                });
            },

            active: function () {
                this.delMod('disactive');
                this.unbindFrom(this.domElem, 'click');
            }
        });

        provide(DOM);
    }
);
