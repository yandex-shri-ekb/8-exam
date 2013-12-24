modules.define('i-bem__dom', function (provide, BEMDOM) {

    BEMDOM.decl('atom', {
        onSetMod: {
            'js': function () {
                this._themes = {};
                this.setMod('active', 'no');
                this._setRandomTheme();
            },

            'theme': function (modName, themeName) {
                this._activateTheme(themeName);
            },

            'active': function () {
                this.findBlockInside('locomotive').toggleMod('active', 'yes', 'no');
            }
        },

        _setRandomTheme: function () {
            var themes = ['yellow', 'red', 'blue'];
            var theme = themes[this._getRandomInt(0, 2)];
            this.setMod('theme', theme);
        },

        _activateTheme: function (theme) {
            this.setMod(this.elem('content'), 'theme', theme);
            this.findBlockInside('stories').setMod('theme', theme);
            this.findBlockInside('video-icon').setMod('theme', theme);
            this.findBlockInside({'blockName': 'users', 'modName': 'pos', 'modVal': 'top'}).setMod('theme', theme);
            this.findBlockInside('locomotive').setMod('theme', theme);
            this.findBlockInside('list-info').setMod('theme', theme);
        },

        getThemeStepsOffset: function (themeName) {
            !this._themes[themeName] && this._calculateSteps(themeName);
            return this._themes[themeName];
        },

        _calculateSteps: function (themeName) {
            var theme = this.findBlockInside({'blockName': 'story', 'modName': 'theme', 'modVal': themeName}),
                steps = [];

            theme.findBlocksInside('step').forEach(function (step, i) {
                var $step = step.domElem,
                    start = $step.offset().top,
                    end = start + $step.height();

                steps[i + 1] = { start: start, end: end };
            });
            this._themes[themeName] = steps;
        },

        _getRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });

    provide(BEMDOM);

});