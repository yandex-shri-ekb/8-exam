/**
 * Меню путей персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.person-menu", $.boolive.widget, {

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            // В опциях не указан селектор элемента, до которого скролить
            if(typeof this.options.scrollto === 'undefined') {
                this.options.scrollto = false;
            }
            // Когда считать скрытым?
            if(!$.isArray(self.options.when_hidden)) {
                self.options.when_hidden = ['out-top', 'out-bottom'];
            }
            // Выбор персонажа
            this.element.on('click', '.person-menu__item', function(e) {
                if(!$(this).hasClass('person-menu__item_state_active')) {
                    e.preventDefault();
                    self.callParents('selectPerson', $(this).attr('data-type'), null, true);
                    // автосколл до указанного элемента
                    if(self.options.scrollto) {
                        var pos_elem = $(self.options.scrollto+':first');
                        if(pos_elem.size()) {
                            $('html,body').animate({ scrollTop: pos_elem.offset().top }, 'slow');
                        }
                    }
                }
            })
            // Показ описания персонажей при hover
            .on('mouseenter', '.person-menu__item', function(e) {
                self._showDescription($(this).attr('data-type'));
            })
            .on('mouseleave', '.person-menu__item', function(e) {
                self._showDescription();
            });
            // Определяем, попадает ли виджет в область viewport'а
            $(window).on('scroll resize', function() {
                self._checkVisible();
            });
            // Узнаем текущего персонажа и меняем состояние виджета в соответствии с ним
            this.call_selectPerson({}, this.callParents('getPersonType', null, null, true));
        },

        /**
         * Проверка видимости виджета
         * Опредлеяется относительное расположение по вертикали - више или ниже viewport'а
         */
        _checkVisible: function() {
            var self = this;
            if(!this.wait_check) {
                self.wait_check = true;
//                setTimeout(function(){
                    var $win = $(window),
                        pos = 'in';
                    if(self.element.offset().top + self.element.height() < $win.scrollTop()) {
                        pos = 'out-top';
                    } else
                    if($win.scrollTop() + $win.height() < self.element.offset().top) {
                        pos = 'out-bottom';
                    }
                    if(pos !== 'in' && $.inArray(pos, self.options.when_hidden) === -1) {
                        pos = 'in';
                    }
                    //if (self.current_pos !== pos){
                    //    self.current_pos = pos;
                        // Сообщаем всем о своей позиции
                        self.callParents('personMenuVisible', {value: pos === 'in', key: self.eventNamespace}, null, true);
                    //}
                    self.wait_check = false;
//                },1000)
            }
        },

        /**
         * Показ/скрытие описания для указанного персонажа
         * @param {String} type Название персонажа
         */
        _showDescription: function(type) {
            if(typeof type === 'undefined') {
                type = this.element.find('.person-menu__item_state_active:first').attr('data-type');
            }
            this.element.find('.person-menu__desc:visible').hide();
            this.element.find('.person-menu__desc_type_'+type).show();
        },

        /**
         * Реакция на выбор персонажа
         */
        call_selectPerson: function(caller, type) {
            this.element.find('.person-menu__item_state_active').removeClass('person-menu__item_state_active');
            this.element.find('.person-menu__item_type_'+type).addClass('person-menu__item_state_active');
            this._showDescription();
        }
    });
})(jQuery);