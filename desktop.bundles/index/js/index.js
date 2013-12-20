'use strict';

var App = function() {

        this.$body = $('body');
        debugger;

        this.view = {
            $ledge: this.$body.find('.atom-ledge')
        };

        this._assignEvents();
    };

    App.prototype._assignEvents = function() {
        this.view.$ledge.on('click', $.proxy(this._onClickLedge, this));
    };

    App.prototype._onClickLedge = function(e) {
        var $el = $(e.currentTarget);

        if(!$el.hasClass('open')) {
            this._openLedge();
        }
    };

    App.prototype._openLedge = function() {
        this.view.$ledge.offset().left -= 800;
    };

jQuery(function($) {
    alert(1);
   new App;
})();