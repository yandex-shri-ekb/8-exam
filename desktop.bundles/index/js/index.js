'use strict';

var App = (function() {

    function App () {
        this.$body = $('body');
        this.view = {
            $atom: this.$body.find('.atom'),
            $ledge: this.$body.find('.atom-ledge'),
            $content: this.$body.find('.atom__content'),
            $stories: this.$body.find('.stories'),
            $currentTheme: $()
        };

        this.temp = {
            steps: {}
        };
        this._assignEvents();
        this._showRandomTheme();
    }

    App.prototype._assignEvents = function() {
        $(document).on('click', '.atom-ledge', $.proxy(this._onClickLedge, this));
        $(document).on('click', '.atom', $.proxy(this._onClickOutsideLedge, this));
        $(document).on('click', '.user-icon', $.proxy(this._onClickUserIcon, this)); // TODO merge with next
        $(document).on('click', '.step-icon', $.proxy(this._onClickUserIcon, this));
        $(document).on('mouseover', '.user', $.proxy(this._onHoverUser, this));
        $(window).on('scroll', $.proxy(this._onScrollWindow, this));
    };

    App.prototype._onClickLedge = function(e) {
        e.stopPropagation();

        if(!this.view.$ledge.hasClass('open')) {
            this._openLedge();
        }
    };

    App.prototype._onClickOutsideLedge = function(e) {
        e.preventDefault();
        if(this.view.$ledge.hasClass('atom-ledge_open_yes')) {
            this._closeLedge();
        }
    };

    App.prototype._openLedge = function() {
        // Требуемое смещение влево
        // TODO заменить на константу
        var offset = 800 - ( this.$body.width() - this.view.$ledge.offset().left);
        if(offset > 0) {
            this.view.$ledge.animate({ 'left': '-=' + offset }, 300);
            this.view.$ledge.addClass('atom-ledge_open_yes');
            this.view.$atom.addClass('atom_cursor_pointer');
        }
    };

    App.prototype._closeLedge = function() {
        var offset = 972 - this.view.$ledge.offset().left;
        this.view.$ledge.animate({ 'left': '+=' + offset }, 300);
        this.view.$ledge.removeClass('atom-ledge_open_yes');
        this.view.$atom.removeClass('atom_cursor_pointer');
    };

    App.prototype._onClickUserIcon = function(e) {
        e.preventDefault();
        var className = $(e.currentTarget).attr('class');
        var theme = this._identifyTheme(className);
        this._activateTheme(theme);
    };

    App.prototype._showRandomTheme = function() {
        var themes = ['yellow', /* 'red',*/ 'blue'];
        var i = getRandomInt(0, 1);
        var theme = themes[i];
        this._activateTheme(theme);
        this._showUserText(theme);
    };

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    App.prototype._activateTheme = function(theme) {
        this._activateThemeBackground(theme);
        this._activateThemeStory(theme);
        this._activateThemeIcon(theme);
        this._activateUserIcon(theme);
        this._calculateThemeSteps();
    };

    App.prototype._activateThemeBackground = function(theme) {
        var elName = 'atom__border';
        $('.' + elName).attr('class',
            elName + ' ' + elName + '_theme_' + theme
        );
    };

    App.prototype._activateThemeStory = function(theme) {
        var $stories = this.view.$stories.children('.story');
        this.view.$currentTheme = $stories.filter('.story-theme-' + theme);
        $stories.hide();
        this.view.$currentTheme.show();
    };

    App.prototype._activateThemeIcon = function(theme) {
        var $icons = this.view.$stories.find('.step-icon');
        $icons.addClass('step-icon_active_no');

        $icons.filter('.step-icon_theme_' + theme)
            .removeClass('step-icon_active_no')
            .addClass('step-icon_active_yes');
    };

    App.prototype._activateUserIcon = function(theme) {
        var $user = this.view.$stories.find('.user-icon');
        var className = $user.attr('class').replace(/theme_\w+/, 'theme_' + theme);
        $user.attr('class', className);
    };

    App.prototype._onHoverUser = function(e) {
        e.stopPropagation();
        var className = $(e.currentTarget).attr('class');
        var theme = this._identifyTheme(className);
        this._showUserText(theme);
    };

    App.prototype._showUserText = function(theme) {
        var showClass = 'user__text_show_yes';

        var $users = $('.users_pos_top').find('.user');
        $users.find('.' + showClass).removeClass(showClass);
        $users.filter('.user_theme_' + theme)
            .children('.user__text').addClass(showClass);
    };

    App.prototype._identifyTheme = function(className) {
        var theme;
        if(className.match(/theme_yellow/)) {
            theme = 'yellow';
        } else if (className.match(/theme_red/)) {
            theme = 'red';
        } else {
            theme = 'blue';
        }
        return theme;
    };

    App.prototype._identifyStep = function() {
        var stepNum = 0;
        var windowTop = $(window).scrollTop();

        $.each(this.temp.steps, function(index, step) {
            if(step.start <= windowTop && windowTop <= step.end) {
                stepNum = index;
            }
        });

        return stepNum;
    };

    App.prototype._calculateThemeSteps = function() {
        var $theme = this.view.$currentTheme;
        var self = this;

        var lastStep = 4;

        $.map($theme.find('.step'), function(step, i) {
            var $step = $(step);
            var start = $step.offset().top;
            var end = start + $step.height();

            if(i === lastStep -1) {
                // TODO optimize
                end -= $('.users_pos_bottom').height() * 2;
            }
            self.temp.steps[i+1] = { start: start, end: end };
        })
    };


    App.prototype._onScrollWindow = function() {
        var step = this._identifyStep();
        step ? this._changeStepIcons(step) : this.hideStepIcons();
    };

    App.prototype._changeStepIcons = function(step) {
        var $loco = $('.stories__locomotive');
        var $icons = $loco.find('.step-icon');

        $.map($icons, function(el, index){
            var $el = $(el);

            var classStep = $el.attr('class');
            classStep = classStep.replace(/step-icon_step_\d+/, '');
            $el.attr('class', classStep);

            if(step > 0) {
                $el.addClass('step-icon_step_' + step);
            }
        });
        this._showStepIcons();
    };

    App.prototype._showStepIcons = function() {
        $('.stories__locomotive').addClass('stories__locomotive_show_yes');
    };

    App.prototype.hideStepIcons = function() {
        $('.stories__locomotive').removeClass('stories__locomotive_show_yes');
    };

    return App;
})();

$(function() {
   new App;
});