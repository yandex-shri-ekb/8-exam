modules.define(
    'i-bem__dom',
    ['jquery', 'pers-switch__state'],
    function(provide, $, state, DOM) {
        DOM.decl({block: 'pers-switch', modName: 'position', modVal: 'fixed'},
            {
                onSetMod: {
                    js: function() {
                        this._initSuper();

                        state.emitter.on('show', function() {
                            this.setMod('active', true);
                        }, this);

                        state.emitter.on('hide', function() {
                            this.delMod('active');
                        }, this);
                    }
                },

                changeState: function(data) {
                    this.setMod('area', data.area);
                }
            }
        );

        provide(DOM);
    }
);