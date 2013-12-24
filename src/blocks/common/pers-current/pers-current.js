modules.define(
    'i-bem__dom',
    ['pers-switch__state', 'modernizr'],
    function (provide, state, modernizr, DOM) {
        DOM.decl('pers-current', {
            onSetMod: {
                js: function() {
                    var page = this.findBlockOutside('page');

                    page.on('change-state', function(ev, data) {
                        this.setMod('type', data.type);
                    }, this);

                    state.emitter.on('show', function() {
                        !modernizr.cssanimations && this.domElem.fadeIn('100');
                        this.setMod('active');
                    }, this);

                    state.emitter.on('hide', function() {
                        !modernizr.cssanimations && this.domElem.hide();
                        this.delMod('active');
                    }, this);
                }
            }
        });

        provide(DOM);
    }
);
