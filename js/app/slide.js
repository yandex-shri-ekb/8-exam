/**
 * Промостраница. PopUp
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
    Slide = function() {
    	eventRight();
    }

    function eventRight() {
    	


    }

    /**
     * Отслеживаем изменения размера браузера
     */
    $(function() {
        $(window).resize(eventRight);  
    });

	return Slide;
});