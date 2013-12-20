/**
 * Активная персона (путь).
 * Отображается по центру, если не видны меню путей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.person-active", $.boolive.widget, {
        /* состояния менюшек, от которых зависит, показывать или нет виджет */
        _menu_states: {},

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
        },

        call_paths_menu_visible: function(caller, state){
            this._menu_states[state.key] = state.value;
            var show = true;
            $.each(this._menu_states, function(i, v){
                show = !v && show;
            });
            if (show){
                this.element.addClass('person-active_state_show');
            }else{
                this.element.removeClass('person-active_state_show');
            }
        },

        /**
         * Реакция на открытие/скрытыие боковой панели
         */
        call_view_sidebar: function(caller, show){
            if (show){
                this.element.hide();
            }else{
                this.element.show();
            }
        },

        /**
         * Реакция на выбор пути (персонажа)
         */
        call_select_path: function(caller, type){
            this.element.removeClass('person-active_type_yellow person-active_type_red person-active_type_blue');
            this.element.addClass('person-active_type_'+type);
        }
    });
})(jQuery);