/**
 * Меню персон с их состояниями поверх всего
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.person-bar", $.boolive.widget, {
        /** {Object} Состояния менюшек, от которых зависит, показывать или нет виджет */
        _menuStates: null,

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            this._menuStates = {};
            var self = this;
            // Выбор персонажа
            this.element.on('click', '.person-bar__item', function(e) {
                if(!$(this).hasClass('person-bar__item_state_active')) {
                    e.preventDefault();
                    self.callParents('selectPerson', $(this).attr('data-type'), null, true);
                }
            });
            // Узнаем текущего персонажа и меняем состояние виджета в соответствии с ним
            this.call_selectPerson({}, this.callParents('getPersonType', null, null, true));
        },

        /**
         * Реакция на скрытие/отображение меню персонажей.
         * Если все скрыты, то показывать себя
         */
        call_personMenuVisible: function(caller, state) {
            this._menuStates[state.key] = state.value;
            var show = true;
            $.each(this._menuStates, function(i, v) {
                show = !v && show;
            });
            if(show) {
                this.element.addClass('person-bar_state_show');
            } else {
                this.element.removeClass('person-bar_state_show');
            }
        },

        /**
         * Реакция на открытие/скрытыие боковой панели
         */
        call_showSidebar: function(caller, show) {
            if(show) {
                this.element.hide();
            } else {
                this.element.show();
            }
        },

        /**
         * Реакция на выбор персонажа
         */
        call_selectPerson: function(caller, type) {
            this.element.find('.person-bar__item_state_active').removeClass('person-bar__item_state_active');
            this.element.find('[data-type="'+type+'"]').addClass('person-bar__item_state_active');
        },

        /**
         * Реакция на изменения позиций персон
         */
        call_personPosition: function(caller, info) {
            this.element.find('.person-bar__item_type_'+info.type)
                .removeClass('person-bar__item_pos_1 person-bar__item_pos_2 person-bar__item_pos_3 person-bar__item_pos_4')
                .addClass('person-bar__item_pos_'+info.pos);

        }
    });
})(jQuery);