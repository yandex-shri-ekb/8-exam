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
	    $content     = $('.content'), // Григорий в подвале сайта
	/** @define {object} */
	    $btnPlay     = $('.play'), // Описание для персонажа
	/** @define {object} */
	    $history     = $('.history'); // Описание для персонажа



	/**
	 * Конструктор возвращаемого объекта
	 * @constructor 
	 */
    App = function() {
    	/** @define {string} */
    	this.color = ''; //цвет выбранного персонажа

    	$yellowCharH.click($.proxy(this.yellow, this));

    	$redCharH.click($.proxy(this.red, this));

    	$blueCharH.click($.proxy(this.blue, this));

    	$yellowCharF.click($.proxy(this.yellow, this));

    	$redCharF.click($.proxy(this.red, this));

    	$blueCharF.click($.proxy(this.blue, this));
    }

    /**
     * Функция которая должна быть вызвана при запуске приложения
     */
    App.prototype.init = function() {
    	var app = this;

    	console.log(RandomChar);
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
    	this.color = 'yellow';

    	$yellowCharH.find('.person__yellow__avatar').addClass('active');
    	$yellowCharH.find('.person__desc').addClass('view');
    	app.renderStory();
	}

	/**
	 * События, которые происходят при клике Алексею в шапке сайта
	 */
    App.prototype.red = function(event) {
    	var app = this;

    	app.clearChar();
    	this.color = 'red';

    	$redCharH.find('.person__red__avatar').addClass('active');
    	$redCharH.find('.person__desc').addClass('view');
    	app.renderStory();
	}

	/**
	 * События, которые происходят при клике Григорию в шапке сайта
	 */
    App.prototype.blue = function(event) {
    	var app = this;

    	app.clearChar();
    	this.color = 'blue';

    	$blueCharH.find('.person__blue__avatar').addClass('active');
    	$blueCharH.find('.person__desc').addClass('view');
    	app.renderStory();
	}

	/**
	 * @return {string} размер рабочей области браузера
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
		$history.removeClass(app.color + '__color history__' + app.color);
	}

	/**
	 * @return {string} размер рабочей области браузера
	 */
    App.prototype.renderStory = function() {
    	var app = this;

		$('.' + app.color).show();
		$content.addClass(app.color + '__color');
		$btnPlay.addClass(app.color + '__color');
		$history.addClass(app.color + '__color history__' + app.color);
	}

	

	return App;
});