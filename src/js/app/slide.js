/**
 * Промостраница. Slider
 * 
 * @author Artem Kuzvesov <arktuz@gmail.com>
 * @version 0.01
 * @copyright Artem Kuzvesov 2013
 * 
 */
define(['jquery'], function($) {
	
	/** @define {object} */
	var $helpBtn = $('.help'), // Элемент для показа правого блока
	/** @define {object} */
	    $right   = $('.right'), // Правый блок
	/** @define {object} */
	    $content = $('.content'); // Основное содержимое страницы

	/**
	 * Конструктор возвращаемого объекта
	 * @constructor 
	 */
    Slide = function() {
    	eventRight();

		/** Обработка клика по кнопке с вопросительным знаком */
    	$helpBtn.click($.proxy(this.viewRight, this));

    	/** Обработка клика по правому блоку */
    	$right.click($.proxy(this.viewRight, this));

    	/** Обработка клика по основному блоку */
    	$content.click($.proxy(this.viewContent, this));
    }

    /**
	 * События, которые происходят при клике по кнопке с вопросительным знаком
	 */
    Slide.prototype.viewRight = function(event) {
    	var widthView   = widthViewPort();
    		leftToRight = widthView - 770;
		
		if (widthView <= 1730) {
	    	if ($helpBtn.hasClass('help__close')) {
	    		defaultVies();
	    	} else {
	    		$right.css({cursor: 'default', left: leftToRight + 'px'});
	    		$helpBtn.addClass('help__close');
	    		$content.addClass('cursor_pointer');
	    	}
    	}
	}

	/**
	 * События, которые происходят при клике о основному содержмому сайта
	 */
    Slide.prototype.viewContent = function(event) {
    	if ($content.hasClass('cursor_pointer')) {
    		defaultVies();
    	}
	}

	/**
	 * Возвращаем все настройки правого блока на исходную позицию
	 */
	function defaultVies() {
		$right.css({cursor: 'pointer', left: '972px'});
    	$helpBtn.removeClass('help__close');
    	$content.removeClass('cursor_pointer');
	}

	/**
	 * @return {string} размер рабочей области браузера
	 */
	function widthViewPort() {
		return $(window).width();
	}

    /**
     * Изменение свойств элементов в зависимости от размера экрана
     */
    function eventRight() {
    	var widthView = widthViewPort();

    	if (widthView > 1730) {
    		$helpBtn.fadeTo(200, 0, function() {
    			$(this).hide();
				$right.css('cursor', 'default');
    		});
    	} else {
    		$helpBtn.fadeTo(200, 1, function() {
    			$(this).show();
				defaultVies();
    		});
    	}
    }

    /**
     * Отслеживаем изменения размера браузера
     */
    $(function() {
        $(window).resize(eventRight);  
    });

	return Slide;
});