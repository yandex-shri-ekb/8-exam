/**
 * Меню путей персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, undefined) {
    $.widget("exam.paths-menu", $.boolive.widget, {
        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            this.element.on('click', '.paths-menu__item', function(e){
                if (!$(this).hasClass('paths-menu__item_state_active')){
                    e.preventDefault();
                    // скрытие боковой панели
                    self.callParents('select_path', $(this).attr('data-type'), null, true);
                }
            })
            .on('mouseenter', '.paths-menu__item', function(e){
                self.show_description($(this).attr('data-type'));
            })
            .on('mouseleave', '.paths-menu__item', function(e){
                self.show_description();
            });
            self.show_description();
        },

        show_description: function(type){
            if (typeof type === 'undefined'){
                type = this.element.find('.paths-menu__item_state_active:first').attr('data-type');
            }
            this.element.find('.paths-menu__desc:visible').hide();
            this.element.find('.paths-menu__desc_type_'+type).show();
        },

        /**
         * Реакция на изменения вида боковой панели
         */
        call_select_path: function(caller, type){
            this.element.find('.paths-menu__item_state_active').removeClass('paths-menu__item_state_active');
            this.element.find('.paths-menu__item_type_'+type).addClass('paths-menu__item_state_active');
            this.show_description();
        }
    });
})(jQuery);