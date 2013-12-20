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
            // Когда считать скрытым?
            if (!$.isArray(self.options.when_hidden)){
                self.options.when_hidden = ['out-top', 'out-bottom'];
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
            // Определяем, попадает ли виджет в область viewport'а
            $(window).on('scroll', function(){
                self.check_visible();
            }).on('resize', function(){
                self.check_visible();
            });

            self.show_description();
        },

        check_visible: function(){
            var self = this;
            if (!this.wait_check){
                self.wait_check = true;
                setTimeout(function(){
                    var $win = $(window),
                        pos = 'in';
                    if (self.element.offset().top + self.element.height() < $win.scrollTop()){
                        pos = 'out-top';
                    }else
                    if ($win.scrollTop() + $win.height() < self.element.offset().top){
                        pos = 'out-bottom';
                    }
                    if (pos !== 'in' && $.inArray(pos, self.options.when_hidden) === -1){
                        pos = 'in';
                    }
                    //if (self.current_pos !== pos){
                    //    self.current_pos = pos;
                        // Сообщаем всем о своей позиции
                        self.callParents('paths_menu_visible', {value: pos === 'in', key: self.eventNamespace}, null, true);
                    //}
                    self.wait_check = false;
                },1000)
            }
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