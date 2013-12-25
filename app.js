'use strict';

/**
* Меню с персонажами: наведение, переключение.
* @constructor
* @param {Object} options объект с параметрами меню
*                 elem - элемент меню
*/
/*function Menu(options) {
    var self = this,
        elem = options.elem,
        navElem = elem.find();
}

/**
* Правая панель: описано поведение при клике.
* @constructor
* @param {Object} options объект с параметрами панели
*                 elem - панель
*/
function Slider(options) {
    var self = this,
        elem = options.elem;
       // navElem = $('.right-panel');

elem.on('click', _onSliderClick);

/**
*  Выдвигает панель при клике влево.
*/

function _onSliderClick() {
     
    if ( elem.hasClass('right-panel__open') ) {
     self.close();
    } else {
      self.open();
    }
}

/*
* Добавляет класс для выдвинутой панели
*/
this.open = function() {
    elem.addClass('right-panel__open');
  };

/*
* Добавляет класс для выдвинутой панели
*/
this.close = function() {
    elem.removeClass('right-panel__open');
  };
}



/**
* Меню навигации: переключает оформление страницы при клике
* на соответствующем персонаже
* @constructor
* @param {Object} options объект с параметрами панели
*                 elem - панель
* В расчетных границах 
*/

function MenuNavigation(options) {
    var self = this,
        elem = options.elem,
        elemTop = elem.offset().top + 200,
        elmBottom = options.elemBtm.offset().top - 500 || 0,
        trvMenu = $('.travelMenu'),
        $window = $(window);

$window.on('scroll', _onWindowScroll);
elem.on('click', '.navigation-Person-link', _onElemMenuClick);
/*
* Добавляет css-класс при скролле окна
*/
function _onWindowScroll() {
    if(!trvMenu.hasClass('travelMenu__visible') && ($window.scrollTop() > elemTop && $window.scrollTop() < elmBottom) )
    {
      trvMenu.addClass('travelMenu__visible').data('top', elemTop).data('bottom', elmBottom);
    } else if (trvMenu.hasClass('travelMenu__visible') && ($window.scrollTop() < trvMenu.data('top') || $window.scrollTop() > trvMenu.data('bottom') ) )
    {
      trvMenu.removeClass('travelMenu__visible');
    }
}

/**
*  Меняем фон страницы при клике на элементе меню
*/

function _onElemMenuClick() {
    var index = elem.index(this);
    console.log('====== '+ index);

    switch(index) {
      case 0:
          
        break;

      case 1:
        break;

      case 2:
        break;

      default:
        alert('atatata!');
        break;
    }

    
}
}




/**
* Инициализируем меню
*/
var mainMenu = new MenuNavigation({ 
  elem: $('.navigation'),
  elemBtm: $('.navigation__footer')
});


/**
* Инициализируем панель
*/
var rightSlider = new Slider({ 
  elem: $('.right-panel')
});
