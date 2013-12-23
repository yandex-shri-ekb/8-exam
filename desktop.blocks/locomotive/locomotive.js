modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('locomotive', {
        onSetMod: {
            'js': function() {

                this._steps = [];
                this._calculateThemeSteps();
                this._bindToScroll();
            },
            'show': function(modName, modVal) {
                this._activateThemeIcon();
                modVal === 'yes' && this._calculateThemeSteps();
            }
        },

        _bindToScroll: function() {
            $(window).on('scroll', $.proxy(this._onScroll, this));
        },

        _onScroll: function(e) {
            debugger;
            var step = this._identifyStep();
            step ? this._changeStepIcons(step) : this._hide();
        },

        _activateThemeIcon: function(theme) {
            var icons = this.elem('.step-icon');
            this.setMod(icons, 'active', 'no');
            // TODO не знаю как отфильтровать элементы
            var icon = this.findElem('step-icon', 'theme', theme);
            this.setMod(icon, 'active', 'yes')
        },

        _activateUserIcon: function(theme) {
            this.setMod(this.elem('user-icon'), 'theme', theme);
        },

        _identifyTheme: function() {
            return this.getMod('theme');
        },

        _identifyStep: function() {
            var stepNum = 0;
            var windowTop = $(window).scrollTop();

            this._steps.forEach(function(step, index) {
                if(step.start <= windowTop && windowTop <= step.end) {
                    stepNum = index;
                }
            });
            return stepNum;
        },

        _calculateThemeSteps: function() {
            var atom = this.findBlockOutside('atom');
            var theme = atom.findBlockInside(
                {
                    'blockName': 'story',
                    'modName': 'theme',
                    'modVal': atom.getMod('theme')}
                );

            var self = this;

            var lastStep = 4;

            theme.findBlocksInside('step').forEach(function(step, i) {
                var $step = step.domElem;
                var start = $step.offset().top;
                var end = start + $step.height();

                // TODO оптимизировать
                if(i === lastStep -1) {
                    var users = atom.findBlockInside(
                        {
                            'blockName': 'users',
                            'modName': 'pos',
                            'modVal': 'bottom'
                        }
                    );
                    end -= users.domElem.height() * 2;
                }
                self._steps[i+1] = { start: start, end: end };
            });
            this._steps = self._steps;
        },

        _changeStepIcons: function(step) {
            if(step > 0) {
                var icons = this.findBlocksInside('step-icon');
                icons.forEach(function(icon) {
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