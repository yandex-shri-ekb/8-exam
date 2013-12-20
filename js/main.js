var person = {
    hiddenClass: 'i-invisible',
    init: function () {
        var _this = this;

        _this.initToggleShowShortPersonDesc();
    },
    initToggleShowShortPersonDesc: function () {
        var _this = this;

        $('.js-person-icon')
            .mouseover(function () {
                var $this = $(this),
                    $personDescription = $($this.data('person-description')),
                    $personsDescription = $('.js-person-description');

                $personsDescription.addClass(_this.hiddenClass);
                $personDescription.removeClass(_this.hiddenClass);
            })
            .mouseout(function () {
                var $this = $(this),
                    $personDescription = $($this.data('person-description'));

                $personDescription.addClass(_this.hiddenClass);
            });
    }
};

var theme = {
    themeClasses: ['b-yellow', 'b-blue', 'b-red'],
    init: function () {
        var _this = this;

        $('.js-person-icon').click(function (event) {
            event.preventDefault();

            var $this = $(this),
                classTheme = $this.data('theme-class');

            _this.toggleTheme(classTheme);
        });
    },
    toggleTheme: function (classTheme) {
        var _this = this,
            $themeElements = $('.js-theme-element');

        $themeElements.removeClass(_this.themeClasses.join(' ')).addClass(classTheme);
    }
};

$(function () {
    person.init();
    theme.init();
});