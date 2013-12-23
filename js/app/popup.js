/**
 * Промостраница. PopUp
 * 
 * @author Artem Kuzvesov <arktuz@gmail.com>
 * @version 0.01
 * @copyright Artem Kuzvesov 2013
 * 
 */
define(['jquery'], function($) {
	
	/** @define {object} */
	var $popup     = $('.popup'), // Элемент popup
	/** @define {object} */
	    $popupCont = $('.popup__content'); // Cодержимое popup

	/**
	 * Конструктор возвращаемого объекта
	 * @constructor 
	 */
    Popup = function() {
    	var t = 1;
    	/** Обработка клика по кнопке проигрывания видео */
		$('.btn_play').click($.proxy(this.openPopUp, this));

		/** Обработка клика по кнопке закрыть PopUp */
		$('.popup__close').click($.proxy(this.closePopUp, this));

		/** Обработка клика при щелчке вне PopUp окна */
		$('.popup__back').click($.proxy(this.closePopUp, this));
    }

    /**
	 * События, которые происходят при клике по кнопке проигрывания видео
	 */
    Popup.prototype.openPopUp = function(event) {
    	$popupCont.append('<iframe width="762" height="429" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="//player.vimeo.com/video/75709551"></iframe>');
		$popup.show();
	}

	/**
	 * События, которые происходят при закрытии PopUp окно
	 */
	Popup.prototype.closePopUp = function(event) {
		$popupCont.find('iframe').remove();
		$popup.hide();
	}

	return Popup;
});