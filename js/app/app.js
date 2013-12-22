define(['jquery', 'app/image_preloader', 'app/utils/random'], function($, ImagePreloader, random) {
    'use strict';

    var $window = $(window),
        $body = $(document.body),
        charColors = ['yellow', 'red', 'blue'],
        bPageColors = ['b-page_yellow', 'b-page_red', 'b-page_blue'],
        $bPage = $('.b-page', $body),
        $switcherTop = $('.switcher-top'),
        $switcherBottom = $('.switcher-bottom'),
        $charFloated = $('.char-floated'),
        $switcherFloated = $('.switcher-floated'),
        $panel = $('.layout__floated'),
        panelLeft = $panel.offset().left,
        initedChars = [],
        coords = {
            // диапозон, в котором будет отображаться $charFloated
            charFloated: [0, 0]
        },
        storyParts = {
            yellow: [],
            red: [],
            blue: []
        };

    /**
     * @export app/app
     * @class App
     */
    function App() {
        /**
         * @type {Object}
         */
        this.config = {};
    }

    /**
     * @param {string} char red|blue|yellow
     */
    function _selectChar(char) {
        if($bPage.hasClass('b-page_' + char)) {
            return;
        }

        $bPage.removeClass(bPageColors.join(' '));
        $bPage.addClass('b-page_' + char);

        $('.char-text').hide();
        $('.char-text_' + char).show();

        // show story
        $('.story__char').hide();
        $('#story-' + char).show();

        // show info
        $('.info__char').hide();
        $('#info-' + char).show();

        // switcher
        var $char = $('.char');
        $.each(charColors, function(i, c) {
            $char.removeClass('char-' + c + '_selected');
        });
        $('.char-' + char).addClass('char-' + char + '_selected');

        // floated swicher
        var $floatedImage = $('.char-floated__image');
        $.each(charColors, function(i, c) {
            $floatedImage.removeClass('char-floated__image_' + c);
        });

        $floatedImage.addClass('char-floated__image_' + char);

        $bPage.addClass('b-page_' + char);

        // высота info блоков
        if(initedChars.indexOf(char) === -1) {
            _initChar(char);
        }

        // расчет диапозона
        coords.charFloated = [
            $switcherTop.offset().top + $switcherTop.height(),
            $switcherBottom.offset().top
        ];
    }

    /**
     */
    function _getCurrentChar()
    {
        var color = null;

        $.each(charColors, function(i, c) {
            if($bPage.hasClass('b-page_' + c)) {
                color = c;
            }
        });

        return color;
    }

    /**
     * @param {int} wYc
     */
    function _showRelatedState(wYc)
    {
        var char = _getCurrentChar(),
            parts = storyParts[char],
            minDif = null,
            closestState;

        $('.char-state', $switcherFloated).hide().removeClass('char-state_selected');

        $.each(parts, function(i, partData) {
            var dif = Math.abs(partData.center - wYc);
            if(minDif === null || dif < minDif) {
                minDif = dif;
                closestState = partData.state;
            }
        });

        $.each(charColors, function(i, c) {
            var $state = $('.char-state-' + c + '-' + closestState, $switcherFloated);
            $state.show();
            if(c === char) {
                $state.addClass('char-state_selected');
            }
        });
    }

    /**
     * @param {string} char red|blue|yellow
     */
    function _initChar(char)
    {
        $('#info-' + char).find('.info-part').each(function() {
            var $part = $(this),
                $related = $($part.data('related')),
                ph = $part.outerHeight(),
                partBottom = $part.offset().top + ph,
                relatedBottom = $related.offset().top + $related.outerHeight(),
                h = ph + (relatedBottom - partBottom);
            $part.height(h);
        });

        $('#story-' + char).find('.story__part').each(function() {
            var $part = $(this),
                state = $part.data('state'),
                center = $part.offset().top + $part.height() / 2;

            storyParts[char].push({
                $part: $part,
                state: state,
                center: center
            });
        });

        initedChars.push(char);
    }

    /**
     */
    function _onOpenBtnClicked() {
        var status = $panel.data('status');
        if(status) {
            $panel.animate({ left: panelLeft }, "fast");
            $panel.data('status', 0)
        }
        else {
            var newLeft = _calcPanelLeft();
            $panel.animate({ left: newLeft }, "fast");
            $panel.data('status', 1)
        }
    }

    /**
     */
    function _calcPanelLeft() {
        var ww = $window.width(),
            left = $panel.offset().left,
            w = ww - left;

        if(w < 0) {
            w = 0;
        }

        if(w > 870) {
            return panelLeft;
        }

        var availableW = ww - w - 200,
            requireW = 870 - w;

        availableW = availableW < 0 ? 0 : availableW;

        var addW = requireW <= availableW ? requireW : availableW;

        return left - addW;
    }

    /**
     */
    App.prototype.init = function() {

        _selectChar(charColors[random.getInt(0, 2)]);
        //_selectChar('blue');

        $('.switcher-top,.switcher-bottom').on('click', '.char', function() {
            var $char = $(this);

            switch(true) {
                case $char.hasClass('char-yellow'):
                    _selectChar('yellow');
                    break;
                case $char.hasClass('char-red'):
                    _selectChar('red');
                    break;
                case $char.hasClass('char-blue'):
                    _selectChar('blue');
                    break;
            }

            if($char.closest('.switcher-bottom').length > 0) {
                var scrollTo = $switcherTop.offset().top;
                // TODO возможно стоит отключать плавающий switcher
                $body.add('html').animate({ scrollTop: scrollTo }, "slow");
                // window.scrollTo(x-coord, y-coord);
            }

            return false;
        });

        // todo timer
        $window.scroll(function() {
            var
                wh = $window.height(),
                // верхняя граница
                wYt = $window.scrollTop(),
                // нижняя граница
                wYb = wYt + wh,
                // центр
                wYc = wYt + wh / 2;

            if( wYt > coords.charFloated[0] && wYb < coords.charFloated[1] ) {
                $charFloated.fadeIn('fast');
                $switcherFloated.fadeIn('fast');
                _showRelatedState(wYc);
            }
            else {
                $charFloated.fadeOut('fast');
                $switcherFloated.fadeOut('fast');
            }
        });

        $window.resize(function() {
            var status = $panel.data('status');
            if(status) {
                var newLeft = _calcPanelLeft();
                $panel.css({ left: newLeft + 'px' });
            }
        });

        $('.open-btn').on('click', _onOpenBtnClicked);

        // desc
        var $charText = $('.char-text');
        $('.char', $switcherTop).hover(
            function() {
                var $char = $(this),
                    charColor;

                $charText.hide();
                $.each(charColors, function(i, c) {
                    if($char.hasClass('char-' + c)) {
                        charColor = c;
                    }
                });

                $charText.filter('.char-text_' + charColor).show();
            },
            function() {
                var $char = $(this),
                    currentChar = _getCurrentChar();

                $charText.hide();
                $charText.filter('.char-text_' + currentChar).show();
            }
        );

        // floated states
        $('.char-state').on('click', function() {
            var currentChar = _getCurrentChar(),
                $state = $(this),
                selected = null;

            $.each(charColors, function(i, c) {
                if($state.attr('id').indexOf(c) !== -1) {
                    selected = c;
                }
            });

            if(currentChar !== selected) {
                _selectChar(selected);
                $('.char-state_selected').removeClass('char-state_selected');
                $state.addClass('char-state_selected');
            }
        });
    };

    return App;
});