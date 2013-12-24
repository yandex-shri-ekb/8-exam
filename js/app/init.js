define(['app/app', 'jquery', 'app/modal'], function(App, $, Modal) {
    'use strict';

    var app = new App();

    $(function() {
        app.init();

        _initModal();
    });

    function _initModal() {
        var modal = new Modal($('#modal'));
        $('.video-btn__btn').click(function() {
            modal.show();
        });
    }
});