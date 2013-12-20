define(['jquery', 'app/image_preloader', 'app/utils/random'], function($, ImagePreloader, random) {
    'use strict';

    var $window = $(window),
        $body = $(document.body),
        charColors = ['yellow', 'red', 'blue'],
        bPageColors = ['b-page_yellow', 'b-page_red', 'b-page_blue'],
        $bPage = $('.b-page', $body);

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

    function _selectChar(charColor) {
        $bPage.removeClass(bPageColors.join(' '));
        $bPage.addClass('b-page_' + charColor);

        $('.char-text').hide();
        $('.char-text_' + charColor).show();

        //.char__image_selected
    }

    /**
     */
    App.prototype.init = function() {
        _selectChar(charColors[random.getInt(0, 2)]);

        setInterval(function() {
            _selectChar(charColors[random.getInt(0, 2)]);
        }, 5000)
    };

    return App;
});