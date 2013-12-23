modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('stories', {
        onSetMod: {
            'js': function() {
                this._listHeight = this._calculateHeight();
                this._hideStoriesInside();
            },

            'theme': function(modName, currentTheme, oldTheme) {
                this._activateTheme(currentTheme);
                oldTheme && this._deactivateTheme(oldTheme);
                this._changeHeight(currentTheme);
            }
        },

        _activateTheme: function(themeName) {
            var theme = this.__findStory(themeName);
            theme.setMod('show', 'yes');
            theme.domElem.animate({left: '+=' + 952}, 300);
        },

        _deactivateTheme: function(themeName) {
            var theme = this.__findStory(themeName);
            theme.domElem.animate({left: '+=' + 952}, {
                duration: 300,
                complete: function() {
                    theme.setMod('show', 'no');
                }
            });
        },

        __findStory: function(themeName) {
            return this.findBlockInside({'blockName': 'story', 'modName': 'theme', 'modVal': themeName});
        },

        _calculateHeight: function() {
            var list = [];
            this.findBlocksInside('story').forEach(function(item) {
                list[item.getMod('theme')] = item.domElem.height();
            });
            return list;
        },

        _hideStoriesInside: function() {
            this.findBlocksInside('story').forEach(function(item) {
                item.setMod('show', 'no');
            });
        },

        _getHeight: function(theme) {
            return this._listHeight[theme];
        },

        _changeHeight: function(theme) {
            this.domElem.height(this._getHeight(theme));
        }
    });

    provide(BEMDOM);

});