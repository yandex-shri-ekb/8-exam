modules.define(
    'i-bem__dom',
    function (provide, DOM) {
        DOM.decl('page', {
            onSetMod: {
                js: function () {
                    this.on('change-state', function(ev, data) {
                        this.setMod('type', data.type);
                    });
                }
            }
        });

        provide(DOM);
    }
);
