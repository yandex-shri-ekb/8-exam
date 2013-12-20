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

$(function () {
    person.init();
});