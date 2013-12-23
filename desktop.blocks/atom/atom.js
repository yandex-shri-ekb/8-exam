modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('atom', {
        onSetMod: {
            'js': function() {
                this._calculateHeight();
                this._setRandomTheme();
            },
            'theme': function(modName, modVal) {
                this._activateTheme(modVal);
            }
        },

        _setRandomTheme: function() {
            var themes = ['yellow',  'red', 'blue'];
            var theme = themes[this._getRandomInt(0, 2)];
            this.setMod('theme', theme);
        },

        _activateTheme: function(theme) {
            this.setMod(this.elem('content'), 'theme', theme);
            var oldBlock = this.findBlockInside({'blockName': 'story', 'modName': 'active', modVal: 'yes'});
            oldBlock && oldBlock.setMod('active', 'no');

            var activeBlock = this.findBlockInside({'blockName': 'story', 'modName': 'theme', 'modVal': theme})
            this.elem('stories').height(this._getHeight(theme));
            activeBlock.setMod('active', 'yes');
        },

        _calculateHeight: function() {
            var list = [];
            this.findBlocksInside('story').forEach(function(item) {
                list[item.getMod('theme')] = item.domElem.height();
                item.setMod('show', 'no');
            });
            this._height = list;
        },

        _getHeight: function(theme) {
            return this._height[theme];
        },

        _getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });

    provide(BEMDOM);

});