modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('story', {
        onSetMod: {
            'active': function(modName, modVal) {
                modVal === 'yes' ? this._activateTheme() : this._deactivateTheme();
            },
            'show': {
                'no': function() {
                    this.domElem.css({left: '-952px', top: 0});
                }
            }
        },

        _activateTheme: function() {
            this.setMod('show', 'yes');
            this.domElem.animate({left: '+=' + 952}, 300);
        },

        _deactivateTheme: function() {
            var self = this;
            debugger;
            this.domElem.animate({left: '+=' + 952}, {
                duration: 300,

                complete: function() {
                    self.setMod('show', 'no');
                }
            });
        }
    });

provide(BEMDOM);

});