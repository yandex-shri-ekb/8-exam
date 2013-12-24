modules.define('i-bem__dom', function (provide, BEMDOM) {

    BEMDOM.decl('list-info', {
        onSetMod: {
            'theme': function (modName, modVal) {
                this._activateTheme(modVal);
            }
        },

        _activateTheme: function (themeName) {
            this.findBlocksInside('info').forEach(function (item) {
                var modVal = item.hasMod('theme', themeName) ? 'yes' : 'no';
                item.setMod('show', modVal);
            });
            this._changeStepsHeight(themeName);
        },

        _changeStepsHeight: function (themeName) {
            var sections = this.findBlockInside({'blockName': 'info', 'modName': 'theme', 'modVal': themeName})
                .findBlocksInside('section');
            var stepsOffset = this.findBlockOutside('atom').getThemeStepsOffset(themeName);

            sections.forEach(function (item, i) {
                var newHeight = stepsOffset[i + 1].end - stepsOffset[i + 1].start;
                item.domElem.height(newHeight);
            });
        }
    });

    provide(BEMDOM);

});