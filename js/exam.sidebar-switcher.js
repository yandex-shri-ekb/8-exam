/**
 * Переключатель вида боковой панели
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.sidebar-switcher", $.boolive.widget, {

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            this.element.on('click', function(e) {
                e.preventDefault();
                self.callParents('showSidebar', !self.element.hasClass('sidebar-switcher_state_show'), null, true);
            });
        },

        /**
         * Реакция на открытие/скрытыие боковой панели
         */
        call_showSidebar: function(caller, show) {
            if(show) {
                this.element.addClass('sidebar-switcher_state_show');
            } else {
                this.element.removeClass('sidebar-switcher_state_show');
            }
        }
    });
})(jQuery);