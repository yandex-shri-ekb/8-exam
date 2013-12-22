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
        infoPartInited = [],
        coords = {
            // диапозон, в котором будет отображаться $charFloated
            charFloated: [0, 0]
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
        if(infoPartInited.indexOf(char) === -1) {
            $('#info-' + char).find('.info-part').each(function() {
                var $part = $(this),
                    $related = $($part.data('related')),
                    ph = $part.outerHeight(),
                    partBottom = $part.offset().top + ph,
                    relatedBottom = $related.offset().top + $related.outerHeight(),
                    h = ph + (relatedBottom - partBottom);
                $part.height(h);
            });

            infoPartInited.push(char);
        }

        // расчет диапозона
        coords.charFloated = [
            $switcherTop.offset().top + $switcherTop.height(),
            $switcherBottom.offset().top
        ];
    }

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
     */
    App.prototype.init = function() {

        _selectChar(charColors[random.getInt(0, 2)]);
        //_selectChar('blue');

        /*setInterval(function() {
            _selectChar(charColors[random.getInt(0, 2)]);
        }, 5000);*/

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
            var wY1 = $window.scrollTop(),
                wY2 = wY1 + $window.height();
            if( wY1 > coords.charFloated[0] && wY2 < coords.charFloated[1] ) {
                $charFloated.fadeIn('fast');
            }
            else {
                $charFloated.fadeOut('fast');
            }
        });

        $('.open-btn').on('click', function() {
            var $btn = $(this);
            $bPage.toggleClass('dev');
        });

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
    };

    return App;
});