define(['jquery', 'app/image_preloader', 'app/utils/random'], function($, ImagePreloader, random) {
    'use strict';

    var $window = $(window),
        $body = $(document.body),
        charColors = ['yellow', 'red', 'blue'],
        bPageColors = ['b-page_yellow', 'b-page_red', 'b-page_blue'],
        $bPage = $('.b-page', $body),
        infoPartInited = [];

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
        $('.char').removeClass('char_selected');
        $('.char_' + char).addClass('char_selected');

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
    }

    /**
     */
    App.prototype.init = function() {
        //_selectChar(charColors[random.getInt(0, 2)]);
        _selectChar('blue');

        /*setInterval(function() {
            _selectChar(charColors[random.getInt(0, 2)]);
        }, 5000);*/

        $('.switcher-top,.switcher-bottom').on('click', '.char', function() {
            var $char = $(this);

            switch(true) {
                case $char.hasClass('char_yellow'):
                    _selectChar('yellow');
                    break;
                case $char.hasClass('char_red'):
                    _selectChar('red');
                    break;
                case $char.hasClass('char_blue'):
                    _selectChar('blue');
                    break;
            }

            if($char.closest('.switcher-bottom').length > 0) {
                var scrollTo = $('.switcher-top').offset().top;
                $body.add('html').animate({ scrollTop: scrollTo }, "slow");
                // window.scrollTo(x-coord, y-coord);
            }

            return false;
        });

        /*
        * $(window).scroll(function(){
         if ($(this).scrollTop() > 100) {
         $('.scrollup').fadeIn();
         } else {
         $('.scrollup').fadeOut();
         }
         });*/

        $('.open-btn').on('click', function() {
            var $btn = $(this);
            $bPage.toggleClass('dev');
        });
    };

    return App;
});