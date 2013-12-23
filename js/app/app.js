/**
 * Промостраница
 * 
 * @author Artem Kuzvesov <arktuz@gmail.com>
 * @version 0.01
 * @copyright Artem Kuzvesov 2013
 * 
 */
define(['app/random',
	    'jquery'], function(RandomChar, $) {
	
	/** @define {object} */
	var $yellowCharH = $('.person__yellow'), // Максим в шапке сайта
	/** @define {object} */
	    $redCharH    = $('.person__red'), // Алексей в шапке сайта
	/** @define {object} */
	    $blueCharH   = $('.person__blue'), // Григорий в шапке сайта
	/** @define {object} */
	    $yellowCharF = $('.person__yellow.foot'), // Максим в подвале сайта
	/** @define {object} */
	    $redCharF    = $('.person__red.foot'), // Алексей в подвале сайта
	/** @define {object} */
	    $blueCharF   = $('.person__blue.foot'), // Григорий в подвале сайта
	 /** @define {object} */
	    $descChar    = $('.person__desc'), // Описание для персонажа
	/** @define {object} */
	    $yellow      = $('.yellow'), // Желтый персонаж
	/** @define {object} */
	    $red         = $('.red'), // Красный персонаж
	/** @define {object} */
	    $blue        = $('.blue'), // Синий персонаж
	/** @define {object} */
	    $content     = $('.content'), // Основная часть сайта
	/** @define {object} */
	    $btnPlay     = $('.play'), // Кнопка вызова PopUp-окна
	/** @define {object} */
	    $history     = $('.history'), // История персонажа
	/** @define {object} */
	    $persons     = $('.persons'); // Персонажи в шапке сайта


	/**
	 * Конструктор возвращаемого объекта
	 * @constructor 
	 */
    App = function() {
    	/** @define {string} */
    	this.color = ''; //цвет выбранного персонажа

    	/** Обработка клика по Максиму в шапке сайта */
    	$yellowCharH.click($.proxy(this.yellow, this));

    	/** Обработка клика по Алексею в шапке сайта */
    	$redCharH.click($.proxy(this.red, this));

    	/** Обработка клика по Григорию в шапке сайта */
    	$blueCharH.click($.proxy(this.blue, this));

    	/** Обработка клика по Григорию в подвале сайта */
    	$yellowCharF.click($.proxy(this.yellowF, this));

    	/** Обработка клика по Григорию в подвале сайта */
    	$redCharF.click($.proxy(this.redF, this));

    	/** Обработка клика по Григорию в подвале сайта */
    	$blueCharF.click($.proxy(this.blueF, this));

    	window.onscroll = function() {
    		console.log(isScrolledIntoView($('.red_block2')));
    	}

    }

    /**
     * Отрисовываем случайно выбранного персонажа
     */
    App.prototype.init = function() {
    	var app = this;

		switch (RandomChar) {
            case 1:
                app.yellow();
                break;
            case 2:
                app.red();
                break;
            case 3:
                app.blue();
                break;
            default:
                app.yellow();
        }

        app.renderStory();
	};

    /**
	 * События, которые происходят при клике Максиму в шапке сайта
	 */
    App.prototype.yellow = function(event) {
    	var app = this;

    	app.clearChar();
    	app.color = 'yellow';

    	app.chengeChar($yellowCharH);
	}

	/**
	 * События, которые происходят при клике Алексею в шапке сайта
	 */
    App.prototype.red = function(event) {
    	var app = this;

    	app.clearChar();
    	app.color = 'red';

    	app.chengeChar($redCharH);
	}

	/**
	 * События, которые происходят при клике Григорию в шапке сайта
	 */
    App.prototype.blue = function(event) {
    	var app = this;

    	app.clearChar();
    	app.color = 'blue';

    	app.chengeChar($blueCharH);
	}

	/**
	 * Изменяем аватарку у выбранного персонажа и отображаем его описание
	 */
    App.prototype.chengeChar = function(element) {
    	var app = this;

    	element.find('.person__' + app.color + '__avatar').addClass('active');
    	element.find('.person__desc').addClass('view');
    	app.renderStory();
	}

	/**
	 * События, которые происходят при клике по Максиму в подвале сайта
	 */
    App.prototype.yellowF = function(event) {
    	var app = this;

    	app.yellow();
    	scrollToElement($('.persons'));
	}

	/**
	 * События, которые происходят при клике по Алексею в подвале сайта
	 */
    App.prototype.redF = function(event) {
    	var app = this;

    	app.red();
    	scrollToElement($('.persons'));
	}

	/**
	 * События, которые происходят при клике по Григорию в подвале сайта
	 */
    App.prototype.blueF = function(event) {
    	var app = this;

    	app.blue();
    	scrollToElement($('.persons'));
	}

	/**
	 * Очищем всех персонажей
	 */
	App.prototype.clearChar = function() {
		var app = this;

		$('.person__' + app.color + '__avatar').removeClass('active');
		$descChar.removeClass('view');
		$yellow.hide();
		$red.hide();
		$blue.hide();
		$content.removeClass(app.color + '__color');
		$btnPlay.removeClass(app.color + '__color');
		$history.removeClass('history__' + app.color);
	}

	/**
	 * Ренедер персонажа
	 */
    App.prototype.renderStory = function() {
    	var app = this;

		$('.' + app.color).show();
		$content.addClass(app.color + '__color');
		$btnPlay.addClass(app.color + '__color');
		$history.addClass('history__' + app.color);
	}

	/**
	 * Скроллинг к нужному элементу
	 * @param  {object} el элемент, к которому скроллим
	 */
	function scrollToElement(el) {
		$('html,body').animate({
		    scrollTop: el.offset().top
		}, 800);
	}

	/**
	 * Определение, виден ли в текущий момент элемент на экране
	 * @param  {object}  el элемент, к которому скроллим
	 * @return {Boolean}
	 */
	function isScrolledIntoView(el)
	{
	    var docViewTop = $(window).scrollTop();
	    //var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(el).offset().top;
	    var elemBottom = elemTop + $(el).height() + Number($(el).css('padding-top').replace("px", ""));

	    return ((elemBottom >= docViewTop) && (elemTop <= docViewTop));
	}

	return App;
});