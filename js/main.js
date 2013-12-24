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

    }
};

var theme = {
    themeClasses: ['b-yellow', 'b-blue', 'b-red'],
    themeTogglesRadio: ['#theme-toggle-yellow', '#theme-toggle-red', '#theme-toggle-blue'],
    init: function () {
        var _this = this;

//        _this.initToggleTheme();
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

loadWait = 30000;
loadCheck = 300;
preloadObjects = "img";
notImagesLoaded = [];
excludeImages = false;

function getScreenHeight() {

    var myHeight = 0;
    if (typeof( window.innerHeight ) == "number") {
        //Non-IE
        myHeight = window.innerHeight;
    } else if (document.documentElement &&
        ( document.documentElement.clientHeight
            || document.documentElement.clientHeight )) {
        //IE 6+ in "standards compliant mode"
        myHeight = document.documentElement.clientHeight;
    }
    return  myHeight;

}

function preloadOther() {
    var l = notImagesLoaded.length;
    var currentExists = false;

    for (var i = 0; i < l; i++) {
        var item = notImagesLoaded[i];
        if (item) {
            loadImage(item);
            currentExists = true;
        }
        ;
    }
    ;


    if (!currentExists) {
        notImagesLoaded = [];
        jQuery(window).unbind("scroll", preloadOther);
    }
    ;

};

function imagesPreloader() {

    jQuery(preloadObjects).each(function () {

        var item = this;

        if (item.nodeName.toLowerCase() == "img"

            &&
            (
                typeof excludeImages == "undefined"
                    || excludeImages == false
                    || (item.className.indexOf(excludeImages) == -1)
                )
            ) {

            item.longDesc = item.src;

            item.src = "#";

            item.alt = "";

            var preloaderElt = jQuery("<span></span>");
            jQuery(preloaderElt).css({"display": "block"});
            preloaderElt.className = "preloader " + item.className;

            jQuery(item).before(preloaderElt);
            loadImage(item);

        }
        ;


    });

    jQuery(window).bind("scroll", preloadOther);


};

function loadImage(item) {
    var pos = jQuery(item).position();
    var ItemOffsetTop = typeof pos == "object"
        && typeof pos.top != "undefined" ? pos.top : 0;


    var documentScrollTop = jQuery(window).scrollTop();


    var scrHeight = getScreenHeight();

    if (ItemOffsetTop <= (documentScrollTop + scrHeight)
        && typeof item.storePeriod == "undefined") {

        item.src = item.longDesc;

        item.onerror = function () {
            this.width = 0;
            this.height = 0;
        }

        item.onabort = function () {
            this.width = 0;
            this.height = 0;
        }


        item.wait = 0;

        item.storePeriod = setInterval(function () {


            item.wait += loadCheck;

            if (item.width && item.height && item.complete) {


                clearInterval(item.storePeriod);
                item.storePeriod = false;


                jQuery(item.previousSibling).remove();

                jQuery(item).css("visibility", "visible");

                if (typeof item.loadedCount != "undefined"
                    && notImagesLoaded[item.loadedCount]) {
                    notImagesLoaded[item.loadedCount] = false;
                }
                ;


            } else if (item.wait > loadWait) {

                clearInterval(item.storePeriod);
                item.storePeriod = false;

                if (typeof item.loadedCount != "undefined"
                    && notImagesLoaded[item.loadedCount]) {
                    notImagesLoaded[item.loadedCount] = false;
                }
                ;

                jQuery(item).css({"display": "none", "visibility": "hidden"});
                jQuery(item.previousSibling).remove();


            }
            ;

        }, loadCheck);

    } else {
        if (typeof item.loadedCount == "undefined") {
            item.loadedCount = notImagesLoaded.length;
            notImagesLoaded[item.loadedCount] = item;
        }
        ;
    }
    ;

};

$(function () {
    imagesPreloader();
});