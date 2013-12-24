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
	
	var $yellowCharH = $('.person__yellow'), // Максим в шапке сайта
	    $redCharH    = $('.person__red'), // Алексей в шапке сайта
	    $blueCharH   = $('.person__blue'), // Григорий в шапке сайта
	    $yellowCharF = $('.person__yellow.foot'), // Максим в подвале сайта
	    $redCharF    = $('.person__red.foot'), // Алексей в подвале сайта
	    $blueCharF   = $('.person__blue.foot'), // Григорий в подвале сайта
	    $descChar    = $('.person__desc'), // Описание для персонажа
	    $yellow      = $('.yellow'), // Желтый персонаж
	    $red         = $('.red'), // Красный персонаж
	    $blue        = $('.blue'), // Синий персонаж
	    $content     = $('.content'), // Основная часть сайта
	    $btnPlay     = $('.play'), // Кнопка вызова PopUp-окна
	    $history     = $('.history'), // История персонажа
	    $persons     = $('.persons'), // Персонажи в шапке сайта
	    $personsF    = $('.persons__footer'), // Персонажи в подвале сайта
	    $bigAvatar   = $('.this_story'), // Аватар текущей истории
	    $iconsStory  = $('.icons_story'),
	    $iconsY  	 = $('.icons_yellow'),
	    $iconsR  	 = $('.icons_red'),
	    $iconsB  	 = $('.icons_blue');

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

    	/** Обработка клика по икоке услуги Максима */
    	$iconsY.click($.proxy(this.iconChar, this));

    	/** Обработка клика по икоке услуги Алексея */
    	$iconsR.click($.proxy(this.iconChar, this));

    	/** Обработка клика по икоке услуги Григория */
    	$iconsB.click($.proxy(this.iconChar, this));
    }

    /**
     * Отрисовываем случайно выбранного персонажа
     */
    App.prototype.init = function() {
    	var app = this;

		switch(RandomChar) {
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
                 break;
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

    	hoverChar($redCharH, $yellowCharH);
    	hoverChar($blueCharH, $yellowCharH);

    	app.chengeChar($yellowCharH);
	}

	/**
	 * События, которые происходят при клике Алексею в шапке сайта
	 */
    App.prototype.red = function(event) {
    	var app = this;

    	app.clearChar();
    	app.color = 'red';

    	hoverChar($yellowCharH, $redCharH);
    	hoverChar($blueCharH, $redCharH);

    	app.chengeChar($redCharH);
	}

	/**
	 * События, которые происходят при клике Григорию в шапке сайта
	 */
    App.prototype.blue = function(event) {
    	var app = this;

    	app.clearChar();
    	app.color = 'blue';

    	hoverChar($yellowCharH, $blueCharH);
    	hoverChar($redCharH, $blueCharH);

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
		$bigAvatar.removeClass(app.color + '_character');
	}

	/**
	 * Ренедер персонажа
	 */
    App.prototype.renderStory = function() {
    	var app  = this;

		$('.' + app.color).show();
		$content.addClass(app.color + '__color');
		$btnPlay.addClass(app.color + '__color');
		$history.addClass('history__' + app.color);
		$bigAvatar.addClass(app.color + '_character');

		foot = $history.offset().top + $history.height();

		window.onscroll = function() {
			iconRender(app.color);

			if(isScrolledIntoView($('.' + app.color), foot)) {
				$bigAvatar.show();
				$iconsStory.show();
			} else {
				$bigAvatar.hide();
				$iconsStory.hide();
			}
    	}
	}

	/**
	 * События, которые происходят при клике по иконке услуги
	 */
    App.prototype.iconChar = function(event) {
    	var app     = this,
    		element = event.target; // текущий элемент в jQuery

    	for (var i = 2; i < 6; i++) {
    		if ($(element).hasClass('icon_yellow_block' + i)) {
    			app.yellow();
    			scrollToElement($('.yellow_block' + i));
    		} else if ($(element).hasClass('icon_red_block' + i)) {
    			app.red();
    			scrollToElement($('.red_block' + i));
    		} else if ($(element).hasClass('icon_blue_block' + i)) {
    			app.blue();
    			scrollToElement($('.blue_block' + i));
    		}
    	}
	}

	/**
	 * Hover-эффект для соседних персонажей
	 * @param  {object} el1 персонаж на которого наводим стрелку мыши
	 * @param  {object} el2 текущий персонаж
	 */
	function hoverChar(el1, el2) {
		el1.hover(
		  	function() {
		      el2.find('.person__desc').hide();
		    }, function() {
		      el2.find('.person__desc').css('display', '');
		    }
		)
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
	function isScrolledIntoView(el, foot) {

	    var docViewTop    = $(window).scrollTop(),
	    	elemTop       = $(el).offset().top,
	    	docViewBottom = docViewTop + $(window).height(),
	     	elemBottom    = elemTop + $(el).height() + Number($(el).css('padding-top').replace("px", ""));

	    return ((elemBottom >= docViewTop) && (elemTop <= docViewTop) && (docViewBottom <= foot));
	}

	/**
	 * Отрисовка иконок услуг
	 * @param  {string}  текущий цвет персонажа
	 */
	function iconRender(color)	{
		var color2 = '',
			color3 = '';

		if (color == 'yellow') {
			color2 = 'red';
			color3 = 'blue';
		} else if (color == 'red') {
			color2 = 'yellow';
			color3 = 'blue';
		} else {
			color2 = 'yellow';
			color3 = 'red';
		}

		for (var i = 2; i < 6; i++) {
			if(isScrolledIntoView($('.' + color + '_block' + i), foot)) {
				$iconsY.attr('class',"icons_yellow");
				$iconsR.attr('class',"icons_red");
				$iconsB.attr('class',"icons_blue");
				$('.icons_' + color).addClass('icon_' + color + '_block' + i + '_active');
				$('.icons_' + color2).addClass('icon_' + color2 + '_block' + i);
				$('.icons_' + color3).addClass('icon_' + color3 + '_block' + i);
			} else {
				$('.icons_' + color).removeClass('icon_' + color + '_block' + i + '_active');
				$('.icons_' + color2).removeClass('icon_' + color2 + '_block' + i);
				$('.icons_' + color3).removeClass('icon_' + color3 + '_block' + i);
			}
		}
	}

	return App;
});