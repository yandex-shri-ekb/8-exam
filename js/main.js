var main = {
    init: function () {
        var _this = this;

        _this.initSlowMoveToElement();
    },
    initSlowMoveToElement: function () {
        var _this = this,
            $elemFrom = $('.js-move');

        $('.js-move').click(function () {
            var $this = $(this),
                $elemTo = $($this.data('move-to'));

            $('html, body').animate({
                scrollTop: $elemTo.offset().top
            }, 500);
        });
    }
};

var person = {
    init: function () {
        var _this = this;

        _this.showPersPopupStage1();
    },
    showPersPopupStage1: function () {
        var _this = this;

        $(window).scroll(function () {
            var $storyYellow1 = $('#story-yellow-1'),
                $storyYellow2 = $('#story-yellow-2'),
                $storyRed1 = $('#story-red-1'),
                $storyBlue1 = $('#story-blue-1'),
                curTheme = $('input[name="theme_toggle"]').filter(':checked').val();

            if ($(window).scrollTop() >= $('#story-' + curTheme + '-1').offset().top &&
                $(window).scrollTop() < $('#story-' + curTheme + '-2').offset().top) {
                $storyYellow1.find('.b-person-popup').addClass('b-person-popup_show_yellow');
                $storyRed1.find('.b-person-popup').addClass('b-person-popup_show_red');
                $storyBlue1.find('.b-person-popup').addClass('b-person-popup_show_blue');
            } else {
                $storyYellow1.find('.b-person-popup').removeClass('b-person-popup_show_yellow');
                $storyRed1.find('.b-person-popup').removeClass('b-person-popup_show_red');
                $storyBlue1.find('.b-person-popup').removeClass('b-person-popup_show_blue');
            }
        });
    }
};

var theme = {
    themeClasses: ['b-yellow', 'b-blue', 'b-red'],
    themeTogglesRadio: ['#theme-toggle-yellow', '#theme-toggle-red', '#theme-toggle-blue'],
    init: function () {
        var _this = this;

        _this.setRandomTheme();
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
            randomThemeIndex = Math.floor(Math.random() * 3),
            $randomThemeToggleRadio = $(_this.themeTogglesRadio[randomThemeIndex]);

        $randomThemeToggleRadio.attr('checked', true);
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
    main.init();
    person.init();
    theme.init();
    video.init();
});