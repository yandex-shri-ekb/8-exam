define(["jquery"],function(e){function i(){n.css({cursor:"pointer",left:"972px"});t.removeClass("help__close");r.removeClass("cursor_pointer")}function s(){return e(window).width()}function o(){var r=s();if(r>1730){t.fadeTo(200,0,function(){e(this).hide();n.css("cursor","default")})}else{t.fadeTo(200,1,function(){e(this).show();i()})}}var t=e(".help"),n=e(".right"),r=e(".content");Slide=function(){o();t.click(e.proxy(this.viewRight,this));n.click(e.proxy(this.viewRight,this));r.click(e.proxy(this.viewContent,this))};Slide.prototype.viewRight=function(e){var o=s();leftToRight=o-770;if(o<=1730){if(t.hasClass("help__close")){i()}else{n.css({cursor:"default",left:leftToRight+"px"});t.addClass("help__close");r.addClass("cursor_pointer")}}};Slide.prototype.viewContent=function(e){if(r.hasClass("cursor_pointer")){i()}};e(function(){e(window).resize(o)});return Slide})