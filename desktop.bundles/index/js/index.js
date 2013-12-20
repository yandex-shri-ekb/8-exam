'use strict';

var App = (function() {

    function App () {
        this.$body = $('body');
        this.view = {
            $atom: this.$body.find('.atom'),
            $ledge: this.$body.find('.atom-ledge'),
            $content: this.$body.find('.atom__content')
        };

        this.assignEvents();
        this.showRandomTheme();
    }

    App.prototype.assignEvents = function() {
        $(document).on('click', '.atom-ledge', $.proxy(this.onClickLedge, this));
        $(document).on('click', '.atom', $.proxy(this.onClickOutsideLedge, this));
        $(document).on('click', '.user__icon', $.proxy(this.onClickUserIcon, this))
    };

    App.prototype.onClickLedge = function(e) {
        e.stopPropagation();

        if(!this.view.$ledge.hasClass('open')) {
            this._openLedge();
        }
    };

    App.prototype.onClickOutsideLedge = function(e) {
        e.preventDefault();
        if(this.view.$ledge.hasClass('atom-ledge_open_yes')) {
            this._closeLedge();
        }
    };

    App.prototype._openLedge = function() {
        // Требуемое смещение влево
        debugger;
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

    App.prototype.onClickUserIcon = function(e) {
        e.preventDefault();
        var userClass = $(e.currentTarget).attr('class');
        var theme;
        if (userClass.match(/theme_yellow/)) {
            theme = 'yellow';
        } else if (userClass.match(/theme_red/)) {
            theme = 'red';
        } else {
            theme = 'blue';
        }
        this._activateTheme(theme);
    };

    App.prototype.showRandomTheme = function() {
        var themes = ['yellow', 'red', 'blue'];
        var i = getRandomInt(0, 2);
        this._activateTheme(themes[i]);
    };

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    App.prototype._activateTheme = function(name) {
        $('.stories').children('.story').hide()
            .end().children('.story-theme-' + name).show();

        $('.atom__border').attr('class',
            'atom__border ' + 'atom__border_theme_' + name
        );
    };

    return App;
})();

$(function() {
   new App;
});