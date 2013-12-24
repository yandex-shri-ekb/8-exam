modules.define('i-bem__dom', ['jquery'], function (provide, $, BEMDOM) {

    BEMDOM.decl('locomotive', {
        onSetMod: {
            'js': function () {
                this._bindToScroll();
                this._bindToClick();
            },

            'theme': function (modName, themeName) {
                this._activateThemeIcon(themeName);
                this._activateUserIcon(themeName);
                this.setMod('active', 'yes');
                this._changeLocomotive();
            },

            'active': function (modName, modVal) {
                modVal === 'no' && this.setMod('show', 'no');
                this._onScroll();
            }
        },

        _bindToScroll: function () {
            $(window).on('scroll', $.proxy(this._onScroll, this));
        },

        _bindToClick: function () {
            this.bindTo(this.elem('step-icon'), 'click', this._onClickStepIcon);
        },

        _onScroll: function () {
            this._changeLocomotive();
        },

        _changeLocomotive: function () {
            if (this.hasMod('active', 'yes')) {
                var step = this._identifyStep();
                step ? this._changeStepIcons(step) : this._hide();
            }
        },

        _onClickStepIcon: function (e) {
            var theme = $(e.currentTarget).bem('step-icon').getMod('theme');
            this._getBlockAtom().setMod('theme', theme);
        },

        _activateThemeIcon: function (theme) {
            this.findBlocksInside('step-icon').forEach(function (icon) {
                var modVal = icon.hasMod('theme', theme) ? 'yes' : 'no';
                icon.setMod('active', modVal);
            });
        },

        _activateUserIcon: function (theme) {
            this.findBlockInside('user-icon').setMod('theme', theme);
        },

        _identifyStep: function () {
            var stepNum = 0,
                windowTop = $(window).scrollTop(),
                theme = this.getMod('theme'),
                steps = this._getBlockAtom().getThemeStepsOffset(theme);

            steps.forEach(function (step, index) {
                // TODO change
                var end = index === 4 ? step.end - 600 : step.end;
                if (step.start <= windowTop && windowTop <= end) {
                    stepNum = index;
                }
            });
            return stepNum;
        },

        _getBlockAtom: function () {
            if (!this._atom) {
                this._atom = this.findBlockOutside('atom');
            }
            return this._atom;
        },

        _changeStepIcons: function (step) {
            if (step > 0) {
                this.findBlocksInside('step-icon').forEach(function (icon) {
                    icon.setMod('step', step);
                });
            }
            this._show();
        },

        _show: function () {
            this.setMod('show', 'yes');
        },

        _hide: function () {
            this.setMod('show', 'no');
        }
    });

    provide(BEMDOM);

});