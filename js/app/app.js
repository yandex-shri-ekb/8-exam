define(['jquery', 'app/image_preloader'], function($, ImagePreloader) {
    'use strict';

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
     */
    App.prototype.init = function() {
        this.$window = $(window);
        this.$body = $(document.body);
    };

    return App;
});