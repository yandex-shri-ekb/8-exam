define(['jquery'], function($) {
	
	var $popup     = $('.popup'),
	    $popupCont = $('.popup__content');

    Popup = function() {
		$('.btn_play').click($.proxy(this.openPopUp, this));
		$('.popup__close').click($.proxy(this.closePopUp, this));
		$('.popup__back').click($.proxy(this.closePopUp, this));
    }

    Popup.prototype.openPopUp = function(event) {
    	$popupCont.append('<iframe width="762" height="429" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="//player.vimeo.com/video/75709551"></iframe>');
		$popup.show();
	}

	Popup.prototype.closePopUp = function(event) {
		$popupCont.find('iframe').remove();
		$popup.hide();
	}

	return Popup;
});