(function($){
    'use strict';

    // Расставляет элементы исходного массива в случайном порядке
    function arrayShuffle(arr) {
        var temp,
            j, // Случайный индекс массива
            i, // Индекс массива от большего к меньшему
            len = arr.length;
        for (i = len - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            // Если индексы различны, меняем местами элементы массива
            if (i !== j) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    // Удаляет CSS-класс(ы) у элемента по регулярному выражению
    $.fn.removeClassByRegExp = function(regExp){
        var $th = $(this);
        $th.removeClass(function(i, cls){
            return ($.grep(cls.split(' '), function(s){
                return regExp.test(s);
            })).join(' ');
        });
        return this;
    };

    // Открывает окно с содержимым `content`
    var openWindow = function(content) {
        content = content || '';
        var $window = $($('#window-template').html()).hide();
        $('.window__content', $window).html(content);

        var $close = $('.window__popup-close', $window).hide();
        $('.window__popup-inner', $window).hover(function(){
            $close.show();
        }, function(){
            $close.hide();
        });

        $close.on('click', function(){
            $close.hide().off('click');
            $window.hide(500, function(){
                $window.remove();
            });
            return false;
        });
        $window.appendTo($('body')).show();
    };



    function Application() {}
    Application.prototype = {
        constructor: Application,
        init: function(){

            // Инициализация блока видео
            $('.video__play').click(function(){
                var $video = $(this).parents('.video');
                openWindow($('.video__content', $video).html());
            });

            // Инициализация блока персонажей
            $('.users__user-avatar').on('click', function(){
                var $user = $(this).parents('.users__user'),
                    modType = $user.data('mod-type');

                $('.promo-page').removeClassByRegExp(/^promo-page_type_/).addClass('promo-page_type_' + modType);


                $('.users__user').removeClass('users__user_state_current');
                $('.users__user-descr').removeClass('users__user-descr_show_yes');

                $('.users__user_type_' + modType).addClass('users__user_state_current')
                    .children('.users__user-descr').addClass('users__user-descr_show_yes');

                $('.story__content').addClass('story__content_hide_yes');
                $('.story__content_type_' + modType).removeClass('story__content_hide_yes');
            })
            .hover(function(){
                var $user = $(this).parents('.users__user');
                $('.users__user-descr').removeClass('users__user-descr_show_yes');
                $user.children('.users__user-descr').addClass('users__user-descr_show_yes');
            }, function(){
                var $user = $(this).parents('.users__user');
                $('.users__user_state_current .users__user-descr').addClass('users__user-descr_show_yes');
                $user.children('.users__user-descr').removeClass('users__user-descr_show_yes');
            });
        },

        // Возвращает случайное значение модификатора типа
        getModType: function(){
            var arr = ['yellow', 'red', 'blue'];
            arrayShuffle(arr);
            return arr[0];
        },

        // Запуск приложения
        run: function(){
            this.init();
            $('.users__user_type_' + this.getModType()).children('.users__user-avatar').click();
        }
    };

    new Application().run();
})(jQuery);
