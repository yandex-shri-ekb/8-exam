/**
 * Меню путей персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.paths-menu", $.boolive.widget, {
        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            // В опциях не указан селектор элемента, до которого скролить
            if (typeof this.options.scrollto === 'undefined'){
                this.options.scrollto = false;
            }
            this.element.on('click', '.paths-menu__item', function(e){
                if (!$(this).hasClass('paths-menu__item_state_active')){
                    e.preventDefault();
                    // сообщаем всем о выборе
                    self.callParents('select_path', $(this).attr('data-type'), null, true);
                    // автосколл до указанного элемента
                    if (self.options.scrollto){
                        var pos_elem = $(self.options.scrollto+':first');
                        if (pos_elem.size()){
                            $('html,body').animate({ scrollTop: pos_elem.offset().top }, 'slow');
                        }
                    }
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