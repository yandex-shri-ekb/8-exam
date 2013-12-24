modules.define(
    'i-bem__dom',
    ['jquery', 'functions__debounce', 'pers-switch__state'],
    function (provide, $, debounce, state, DOM) {
        var $window = $(window);

        var isVisible = function($el, direction) {
            var docViewTop = $window.scrollTop(),
                docViewBottom = docViewTop + $window.height(),
                elemTop = $el.offset().top,
                elemBottom = elemTop + $el.height();

            var bottomIsVisible = elemBottom >= docViewTop,
                topIsVisible = elemTop <= docViewBottom;

            return direction === 'down'
                ? bottomIsVisible
                : direction === 'up'
                    ? topIsVisible
                    : topIsVisible && bottomIsVisible;
        };

        /**
         * Oписывает поведение элементов при скроле.
         * Вызывает события, основываясь на видимости элементов.
         */
        DOM.decl('area', {
            onSetMod: {
                js: function() {
                    this._page = this.findBlockOutside('page');

                    this.currentPers = this._page.findBlockInside('pers-current');
                    this.fixedSwitch = this._page.findBlockInside({
                        block: 'pers-switch',
                        modName: 'position',
                        modVal: 'fixed'
                    });

                    this._onPersonalScrolled = debounce(function () {
                        isVisible(this.domElem) && this.fixedSwitch.changeState(this.params);
                    }, 100);

                    this._onCommonScrolled = debounce(function () {
                        state.changeState(this.params, isVisible(this.domElem, this.params.direction));
                    }, 100);

                    if(this.params.type === 'common') {
                        $window.on('scroll', $.proxy(this, '_onCommonScrolled'));
                    } else {
                        this._page.on('change-state', this._onPageStateChanged, this);
                    }
                }
            },

            _onPageStateChanged: function(ev, data) {
                var handler = $.proxy(this, '_onPersonalScrolled');
                $window[this.params.type === data.type ? 'on' : 'off']('scroll', handler);
            }
        });

        provide(DOM);
    }
);
