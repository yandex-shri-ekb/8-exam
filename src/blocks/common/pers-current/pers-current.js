modules.define(
    'i-bem__dom',
    ['pers-switch__state'],
    function (provide, state, DOM) {
        DOM.decl('pers-current', {
            onSetMod: {
                js: function() {
                    var page = this.findBlockOutside('page');

                    page.on('change-state', function(ev, data) {
                        this.setMod('type', data.type);
                    }, this);

                    state.emitter.on('show', function() {
                        this.setMod('active');
                    }, this);

                    state.emitter.on('hide', function() {
                        this.delMod('active');
                    }, this);
                }
            }
        });

        provide(DOM);
    }
);
