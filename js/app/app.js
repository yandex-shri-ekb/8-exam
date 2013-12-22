/**
 * Промостраница
 * 
 * @author Artem Kuzvesov <arktuz@gmail.com>
 * @version 0.01
 * @copyright Artem Kuzvesov 2013
 * 
 */
define(['jquery'], function($) {
	
	/**
	 * Конструктор возвращаемого объекта
	 * @constructor 
	 */
    App = function() {
    	/** @define {object} */
        this.dataJson      = {}; // данные полученные с API для текущей категории
        /** @define {string} */
        this.photoCategory = 'top'; // категория, по умолчанию 'top'
        /** @define {number} */
        this.photoLimit    = 20; // количество подгружаемых миниатюр

        /** Обработка клика по пункту меню */
		$('ul.nav').on('click', 'li a', $.proxy(this.categoryChoice, this));

		/** Обработка клика "Больше фотографий" */
		$('.content').on('click', '.more', $.proxy(this.morePhotos, this));

		/** Обработка клика на миниатюру */
		$miniatures.on('click', 'li.miniature img', $.proxy(this.loadPreviw, this));
    }

	
});