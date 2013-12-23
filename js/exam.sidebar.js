/**
 * Боковая панель
 * Логика её скрытия/отображения и смены истории персонажей в ней
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, window) {

    $.widget("exam.sidebar", $.boolive.widget, {
        /** {Number} Положение панели от левого края окна в скрытом состоянии*/
        _left: 0,
        /** {Number} Ширина контента, при которой контент полностью видимый */
        _width: 0,
        /** {jQuery} Элемент с текстами персонажей */
        _$texts: null,

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;

            this._left = this.element.offset().left;
            this._width = this.element.find('.sidebar__item-content').outerWidth();
            this._$texts = this.element.find('.texts');

            this.element.on('click', function(e) {
                if(!self.element.hasClass('sidebar_state_show')) {
                    e.preventDefault();
                    // Сообщаем всем, что бокувую панель нужно скрыть/показать
                    // Виджет сам будет реагировать на сообщение методом call_showSidebar()
                    self.callParents('showSidebar', !self.element.hasClass('sidebar_state_show'), null, true);
                }
            });
            $(window).on('resize', function() {
                self._view();
            });
            this._view();
            // Узнаем текущего персонажа и меняем состояние виджета в соответствии с ним
            this.call_selectPerson({}, this.callParents('getPersonType', null, null, true));
        },

        /**
         * Обновление вида в соответствии с текущим состоянием и размерами окна
         */
        _view: function() {
            var left;
            if(!this.element.hasClass('sidebar_state_show')) {
                left = this._left;
            } else {
                left = Math.max(0, $(window).width() - this._width);
            }
            if(this.element.offset().left !== left) {
                this.element.stop().animate({left: left});
            }
        },
        /**
         * Реакция на открытие/скрытыие
         */
        call_showSidebar: function(caller, show){
            if(show) {
                this.element.addClass('sidebar_state_show');
            } else {
                this.element.removeClass('sidebar_state_show');
            }
            this._view();
        },
        /**
         * Реакция на выбор персонажа
         */
        call_selectPerson: function(caller, type) {
            this._$texts.find('.texts__item_state_active').removeClass('texts__item_state_active');
            this._$texts.find('.texts__item_type_'+type).addClass('texts__item_state_active');
        }
    });
})(jQuery, window);