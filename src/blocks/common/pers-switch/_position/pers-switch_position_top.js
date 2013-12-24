modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM) {
        DOM.decl({block: 'pers-switch', modName: 'position', modVal: 'top'},
            {
                onSetMod: {
                    js: function() {
                        var self = this;

                        this._initSuper();

                        this.setMod('unhovered', true);
                        this.elem('item').hover(
                            function() {
                                self.delMod('unhovered');
                            },
                            function() {
                                self.setMod('unhovered', true);
                            }
                        );
                    }
                }
            }
        );

        provide(DOM);
    }
);