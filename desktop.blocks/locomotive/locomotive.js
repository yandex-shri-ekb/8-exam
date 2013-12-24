modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('locomotive', {
        onSetMod: {
            'js': function() {
                this._themes = {};
                this._calculateLastStepHeight();
                this._bindToScroll();
                this._bindToClick();
            },

            'theme': function(modName, themeName) {
                !this._themes[themeName] && this._calculateSteps(themeName);
                this._activateThemeIcon(themeName);
                this._activateUserIcon(themeName);
                this._onScroll();
            }
        },

        _bindToScroll: function() {
            $(window).on('scroll', $.proxy(this._onScroll, this));
        },

        _bindToClick: function() {
            this.bindTo(this.elem('step-icon'), 'click', this._onClickStepIcon);
        },

        _onScroll: function(e) {
            var step = this._identifyStep();
            step ? this._changeStepIcons(step) : this._hide();
        },

        _onClickStepIcon: function(e) {
            var theme = $(e.currentTarget).bem('step-icon').getMod('theme');
            this._getBlockAtom().setMod('theme', theme);
        },

        _activateThemeIcon: function(theme) {
            this.findBlocksInside('step-icon').forEach(function(icon) {
                var modVal = icon.hasMod('theme', theme) ? 'yes' : 'no';
                icon.setMod('active', modVal);
            });
        },

        _activateUserIcon: function(theme) {
            this.findBlockInside('user-icon').setMod('theme', theme);
        },

        _identifyStep: function() {
            var stepNum = 0,
                windowTop = $(window).scrollTop(),
                steps = this._themes[this.getMod('theme')];

            steps.forEach(function(step, index) {
                if(step.start <= windowTop && windowTop <= step.end) {
                    stepNum = index;
                }
            });
            return stepNum;
        },

        _calculateSteps: function(themeName) {
            var theme = this._getBlockAtom().findBlockInside({
                    'blockName': 'story',
                    'modName': 'theme',
                    'modVal': themeName}
                ),
                steps = [],
                lastStep = 4,
                self = this;

            theme.findBlocksInside('step').forEach(function(step, i) {
                var $step = step.domElem,
                    start = $step.offset().top,
                    end = start + $step.height();

                i === lastStep -1 && (end -= self._lastStepHeight);
                steps[i+1] = { start: start, end: end };
            });
            this._themes[themeName] = steps;
        },

        _calculateLastStepHeight: function() {
            this._lastStepHeight = this._getBlockAtom().findBlockInside({
                    'blockName': 'users',
                    'modName': 'pos',
                    'modVal': 'bottom'
                }
            ).domElem.height() * 2;
        },

        _getBlockAtom: function() {
            if(!this._atom) {
                this._atom = this.findBlockOutside('atom');
            }
            return this._atom;
        },

        _changeStepIcons: function(step) {
            if(step > 0) {
                this.findBlocksInside('step-icon').forEach(function(icon) {
                    icon.setMod('step', step);
                });
            }
            this._show();
        },

        _show: function() {
            this.setMod('show', 'yes');
        },

        _hide: function() {
            this.setMod('show', 'no');
        }
    });

    provide(BEMDOM);

});