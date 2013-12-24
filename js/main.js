var person = {
    init: function () {
        var _this = this;

    }
};

var theme = {
    themeClasses: ['b-yellow', 'b-blue', 'b-red'],
    init: function () {
        var _this = this;

//        _this.initToggleTheme();
//        _this.setRandomTheme();
    },
    initToggleTheme: function () {
        var _this = this,
            $personIcons = $('.js-person-icon');

        $personIcons.click(function (event) {
            event.preventDefault();

            var $this = $(this),
                classTheme = $this.data('theme-class');

            _this.toggleTheme(classTheme);
        });
    },
    toggleTheme: function (classTheme) {
        var _this = this,
            $body = $('body');

        $body.removeClass(_this.themeClasses.join(' ')).addClass(classTheme);
    },
    setRandomTheme: function () {
        var _this = this,
            $body = $('body'),
            randomThemeIndex = Math.floor(Math.random() * 3);

        $body.removeClass(_this.themeClasses.join(' ')).addClass(_this.themeClasses[randomThemeIndex]);
    }
};

var video = {
    init: function () {
        var _this = this;

        _this.initVideoShow();
        _this.initVideoHide();
    },
    initVideoShow: function () {
        var _this = this,
            $videoOverlay = $('#video-overlay'),
            $videoToggle = $('#video-toggle');

        $videoToggle.click(function (event) {
            event.preventDefault();

            $videoOverlay.fadeIn(300);
            _this.setVideoFrameSrc();
        });
    },
    initVideoHide: function () {
        var _this = this,
            $videoOverlay = $('#video-overlay'),
            $videoClose = $('#video-close');

        $videoClose.click(function (event) {
            event.preventDefault();

            $videoOverlay.fadeOut(300);
            _this.clearVideoFrameSrc();
        });
    },
    setVideoFrameSrc: function () {
        var _this = this,
            $videoFrame = $('#video-frame'),
            videoSrc = $videoFrame.data('src');

        $videoFrame.attr('src', videoSrc);
    },
    clearVideoFrameSrc: function () {
        var _this = this,
            $videoFrame = $('#video-frame');

        $videoFrame.attr('src', '');
    }
};

$(function () {
    person.init();
    theme.init();
    video.init();
});