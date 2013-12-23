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

$(function () {
    person.init();
    theme.init();
});