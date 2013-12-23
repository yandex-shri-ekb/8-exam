/**
 * Активный персонаж (путь).
 * Отображается по центру, если не видны меню персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.person-active", $.boolive.widget, {
        /** {Object} состояния менюшек, от которых зависит, показывать или нет виджет */
        _menuStates: null,

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            this._menuStates = {};
            // Узнаем текущего персонажа и меняем состояние виджета в соответствии с ним
            this.call_selectPerson({}, this.callParents('getPersonType', null, null, true));
        },

        /**
         * Реакция на изменение видимости менюшек персонажей
         * Если все менюшки скрыты, то показывать себя, иначе скрывать
         */
        call_personMenuVisible: function(caller, state) {
            this._menuStates[state.key] = state.value;
            var show = true;
            $.each(this._menuStates, function(i, v) {
                show = !v && show;
            });
            if(show) {
                this.element.addClass('person-active_state_show');
            } else {
                this.element.removeClass('person-active_state_show');
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
            this.element.removeClass('person-active_type_yellow person-active_type_red person-active_type_blue');
            this.element.addClass('person-active_type_'+type);
        }
    });
})(jQuery);