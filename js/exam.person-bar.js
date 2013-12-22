/**
 * Меню персон с их состояниями поверх всего
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.person-bar", $.boolive.widget, {
        /* состояния менюшек, от которых зависит, показывать или нет виджет */
        _menu_states: null,

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            this._menu_states = {};
            var self = this;
            this.element.on('click', '.person-bar__item', function(e){
                if (!$(this).hasClass('person-bar__item_state_active')){
                    e.preventDefault();
                    // сообщаем всем о выборе
                    self.callParents('select_person', $(this).attr('data-type'), null, true);
                }
            });
        },

        /**
         * Реакция на скрытие/отображение меню персонажей.
         * Если все скрыты, то показывать себя
         * @param caller
         * @param state
         */
        call_person_menu_visible: function(caller, state){
            this._menu_states[state.key] = state.value;
            var show = true;
            $.each(this._menu_states, function(i, v){
                show = !v && show;
            });
            if (show){
                this.element.addClass('person-bar_state_show');
            }else{
                this.element.removeClass('person-bar_state_show');
            }
        },

        /**
         * Реакция на открытие/скрытыие боковой панели
         */
        call_show_sidebar: function(caller, show){
            if (show){
                this.element.hide();
            }else{
                this.element.show();
            }
        },

        /**
         * Реакция на выбор персонажа
         */
        call_select_person: function(caller, type){
            this.element.find('.person-bar__item_state_active').removeClass('person-bar__item_state_active');
            this.element.find('[data-type="'+type+'"]').addClass('person-bar__item_state_active');
        },

        /**
         * Реакция на изменения позиций персон
         * @param caller
         * @param info
         */
        call_person_position: function(caller, info){
            this.element.find('.person-bar__item_type_'+info.type)
                .removeClass('person-bar__item_pos_1 person-bar__item_pos_2 person-bar__item_pos_3 person-bar__item_pos_4')
                .addClass('person-bar__item_pos_'+info.pos);

        }
    });
})(jQuery);