modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('atom', {
        onSetMod: {
            'js': function() {
                this._setRandomTheme();
            },
            'theme': function(modName, modVal) {
                this._activateTheme(modVal);
            }
        },

        _setRandomTheme: function() {
            var themes = ['yellow',  'red', 'blue'];
            var theme = themes[this.__getRandomInt(0, 2)];
            this.setMod('theme', theme);
        },

        _activateTheme: function(theme) {
            this.setMod(this.elem('content'), 'theme', theme);
            this.findBlockInside('stories').setMod('theme', theme);
            this.findBlockInside({'blockName': 'users', 'modName': 'pos', 'modVal': 'top'})
                .setMod('theme', theme);
            this.findBlockInside('locomotive').setMod('theme', theme);

            // right side
        },

        __getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });

    provide(BEMDOM);

});