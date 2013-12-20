(function(window, $, undefined){
  "use strict";
  var Echeck = /red|yellow|blue/,
      wWidth = 960,
      ie = /MSIE/.test(navigator.userAgent),
      ie7 = /MSIE 7/.test(navigator.userAgent),
      values = ['yellow', 'red', 'blue'];
  // выравниваем странички
  (function(){
    var $slides = $('.b-slider__item');
    var heights = $slides.map(function(){ 
      var $this = $(this);
      var _tmp = $this.height();
      $this.data('height', _tmp);
      return _tmp; 
    });
    if (!ie) var height = Math.max.apply(0, heights);
    else var height = Math.max(heights[0], heights[1], heights[2]);
    $slides.each(function(){
      var $this = $(this);
      var _delta = height - $this.data('height');
      var $lines = $this.find('.b-page__separator-line');
      var _set = _delta/$lines.length;
      if (!_delta) return 1;
      $lines.each(function(){
        var _$this = $(this);
        var _h = _$this.height() + _set;
        _$this.height( _h );
      });
    });
  })();

  // считаем ширину страничек
  function pageWidth(){
    wWidth = Math.max($(window).width(), 960);
  };
  pageWidth();
  var _timer;
  $(window).resize(function(){
    clearTimeout(_timer);
    _timer = setTimeout(function(){
      pageWidth();
    },30);
  });

  var slider = (function(){
    var $sl = $('.b-slider'),
        $pages = $('.b-slider__item'),
        $asides = $pages.map(function(){
          return $(this).find('.b-page__aside');
        });
    var _n = 0;
    var _timer, _time = 300;
    
    if (!ie7) {
      $(window).resize(function(){
        $asides.each(function(){ $(this).hide(); });
        clearTimeout( _timer );
        _timer = setTimeout(function(){
          $sl.scrollLeft( _n*(wWidth - 40) );
          $asides[ _n ].show();
        },30);
      }); 
    };

    function slider( n ){
      _n = n;
      $pages.each(function( i ){
        var $page = $(this);
        var $pics = $page.find('.b-scenario__pic_'+values[i]);
        $pics.animate({
          // shaitan was here
          step: ( i - n ) * .5 * wWidth
        }, {
          // на самом деле, анимация эта полезная, 
          // ибо картинки с ненужных страниц могут 
          // вылазить на нужные страницы, чего 
          // не хотелось бы
          // большие картинки с ненужных страниц
          step:function(now, fx){
            var translate = 'translate3d('+ now +'px,0,0)';
            $(this).css({
              WebkitTransform: translate,
              transform: translate
            });
        } }, _time);
      });
      $asides.each(function(){ $(this).hide(); });
      $sl.animate({ scrollLeft: n*(wWidth - 40) }, _time, function(){
        $asides[ _n ].show();
      });
    };
    function sliderIE( n ){
      $pages.hide().
        eq(n).show();
    };
    return ie7?sliderIE:slider;
  })();


  // листалко
  function setPage( n ){
    // изменяем классы по названию 
    // анимация тут ложится на могучие плечи браузеров
    // поддерживающих эти ваши трансишены
    function byName( name ){
      var find = [
          'b-scenario', 
          'b-chose__line-animated',
          'b-overlay__pers',
          'b-overlay__action-list'
        ];
      for (var i = find.length; i--;){
        (function( _name ){
          var $set = $( '.'+_name );
          for (var i = values.length; i--;){
            $set.removeClass( [_name, values[i] ].join('_') );
          };
          $set.addClass( [_name, name].join('_') );
        })(find[i]);
      };
    };
    //изменяем классы по селекту, опять фишка с трансишнами
    function bySelect( n ){
      // parent / child
      var find = [
        'b-chose__linkList/b-chose__link',
        'b-chose__linkList/b-chose__pic',
        'b-chose__linkList/b-chose__about',
        'b-overlay__action-list/b-overlay__action'
      ];
      for (var i = find.length; i--;){
        (function( names ){
          var _targets = names.split('/');
          $('.'+_targets[0]).each(function(){
            var _parent = $(this);
            var _child = _parent.find( '.' + _targets[1] );
            _child.removeClass( _targets[1] + '_selected' );
            _child.eq( n ).
              addClass( _targets[1]+'_selected' );
          });
        })( find[i] );
      };
    };
    // меняем персов
    function pers( name, n ){
      var find = [
        'b-chose__pic'
      ];
      for (var i = find.length; i--;){
        (function( _class ){
          var $pics = $( '.' + _class );
          $pics.each(function( i ){
            var $pic = $(this);
            var _src = $pic.attr('src');
            var _sel = /selected/.test( _src );
            var _nam = new RegExp(name).test( _src );
            if ( _nam ){
              if ( !_sel ){
                _src = _src.replace(/(\.png)/,'_selected$1');
                var _img = new Image();
                _img.onload = function(){
                  $pic.attr('src',_src);
                };
                _img.src = _src;
              }
            } else {
              if (_sel) {
                _src = _src.replace(/_selected(\.png)/,'$1');
                var _img = new Image();
                _img.onload = function(){
                  $pic.attr('src',_src);
                };
                _img.src = _src;
              }
            };
          });
          
        })(find[i])
      }
    };
    
    byName( values[ n ] );
    bySelect( n );
    pers( values[ n ], n );
    slider( n );
  };

  //верхний слой
  (function(){
    var _states = [0, 0, 0],
        $scenarios = $('.b-slider__item'),
        $overlay = $('.b-overlay'),
        $icons = $overlay.find('.b-overlay__action');
    $('.b-page').each(function(){
      var _delta = 0;
      var _pos = {
        top: 0,
        bottom: 0
      };
      var $page = $(this);
      if (ie7) {
        _delta = 
          $scenarios.eq(0).offset().top - 
          $(this).parent().offset().top;
      };
      _pos.top = $page.offset().top + _delta;
      _pos.bottom = _pos.top + $page.height();
      $page.data('position', _pos);
    });
    function setState(){
      if ( Math.min.apply(0, _states) ) {
        $overlay.removeClass('b-overlay_disabled');
        $icons.each(function(i){
          this.className = this.className.
            replace(/\d/, _states[i]);
        });
      } else {
        $overlay.addClass('b-overlay_disabled');
      };
    };
    $(window).scroll(function(){
      var $win = $(this);
      var _sc = $win.scrollTop() + $win.height()*.5,
          _changed = 0;
      $scenarios.each(function( i ){
        var _cur = 0;
        $(this).find('.b-page').each(function( j ){
          var _pos = $(this).data('position');
          if ( _sc >= _pos.top && _sc < _pos.bottom ) {
            _cur = j + 1;
            return false;
          };
        });
        if ( _cur !== _states[i] ) {
          _states[i] = _cur;
          _changed = true;
        };
      });
      if (_changed) {
        setState();
      };
    });
    $(window).scroll();
  })();

  // вешаем клики на персокнопки
  $('.b-chose__linkList, .b-overlay__action-list').each(function( i ){
    // нижние ссылки - мотаем вверх
    var up = i === 2;
    var uppos = $('.b-chose__linkList:eq(0)').offset().top - 50;
    $(this).find('.b-chose__link, .b-overlay__action').each(function( i ){
      $(this).click(function(){
        setPage(i);
        up&&$('html, body').animate({scrollTop:uppos}, 500);
        return false;
      });
    });
  });

  // штука справа
  (function(){
    var need = 800;
    var $asides = $('.b-page__aside, .b-aside__helper'),
        _asideWidth,
        $clicker = $('.b-aside__clicker');
    
    function windowCheck(){
      _asideWidth = $asides.width();
      if ( need > _asideWidth ) {
        $clicker.removeClass('b-aside__clicker_disabled');
        $(document.body).removeClass('b-aside__opened');
      } else {
        $(document.body).addClass('b-aside__opened');
        $clicker.addClass('b-aside__clicker_disabled');
      };
    };

    function open(){
      var _delta = need - _asideWidth;
      if ( _delta > 0 ) {
        $asides.each(function(){
          var $aside = $(this);
          $aside.css({
            left: $aside.data('left') - _delta
          });
        });
        $(document.body).addClass('b-aside__opened');
        $clicker.addClass('b-aside__clicker_close');
      };
    };

    function close(){
      $asides.each(function(){
        var $aside = $(this);
        $aside.css({
          left: $aside.data('left')
        });
      });
      $(document.body).removeClass('b-aside__opened');
      $clicker.removeClass('b-aside__clicker_close');
    };

    $clicker.click(function(){
      if ( /close/.test( this.className ) ) {
        close();
      } else {
        open();
      };
      return false;
    });

    $asides.each(function(){
      var $aside = $(this);
      $aside.data('left', parseInt( $aside.css('left'),10) );
    }).click(function(){
      open();
      return false;
    });

    var _timer;
    $(window).resize(function(){
      clearTimeout( _timer );
      _timer = setTimeout(function(){
        windowCheck();
      }, 200);
    }).click(function(){
      close();
    }).keydown(function(e){
      if (e.keyCode === 27) {
        close();
      };
    });
    windowCheck();


  })();

  // модальное окно
  (function(){
    var $wrapper = $('.b-modal__wrapper');
    var $close = $wrapper.find('.b-modal__close, .b-modal__shield');
    var $body = $(document.body);

    function open(){
      $wrapper.removeClass('b-modal__wrapper_disabled');
      $body.addClass('b-body_modal');
    };

    function close(){
      $wrapper.addClass('b-modal__wrapper_disabled');
      $body.removeClass('b-body_modal');
    };

    $close.click(close);
    $(window).keydown(function(e){
      if (e.keyCode===27) {
        close();
      };
    });

    $('.b-main__video-link').click(function(){
      open();
      return false;
    });

  })();

  // если нужно выбрать страничку
  !Echeck.test(document.body.className)&&(function(){
    setPage( Math.floor( 3*Math.random() ) );
  })();

})(window, jQuery);
