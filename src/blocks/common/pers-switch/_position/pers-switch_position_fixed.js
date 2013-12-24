modules.define(
    'i-bem__dom',
    ['jquery', 'pers-switch__state', 'modernizr'],
    function(provide, $, state, modernizr, DOM) {
        DOM.decl({block: 'pers-switch', modName: 'position', modVal: 'fixed'},
            {
                onSetMod: {
                    js: function() {
                        this._initSuper();

                        state.emitter.on('show', function() {
                            !modernizr.cssanimations && this.domElem.fadeIn('100');
                            this.setMod('active', true);
                        }, this);

                        state.emitter.on('hide', function() {
                            !modernizr.cssanimations && this.domElem.hide();
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