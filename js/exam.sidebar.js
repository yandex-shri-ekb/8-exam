/**
 * Боковая панель
 * Логика её скрытия/отображения и смены истории персонажей в ней
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, window){
    $.widget("exam.sidebar", $.boolive.widget, {
        _left: 0,
        _width: 0,
        _$texts: null,

        _create: function(){
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            this._$texts = this.element.find('.texts');
            this._width = this.element.find('.sidebar__item-content').outerWidth();
            this._left = this.element.offset().left;
            this.element.on('click', function(e){
                if (!self.element.hasClass('sidebar_state_show')){
                    e.preventDefault();
                    // Сообщаем всем, что бокувую панель нужно скрыть/показать
                    // Виджет сам будет реагировать на сообщение методом call_view_sidebar()
                    self.callParents('view_sidebar', !self.element.hasClass('sidebar_state_show'), null, true);
                }
            });
            $(window).on('resize', function(){
                self.view();
            });
            this.view();
        },
        /**
         * Обновление вида в соответсвуии с текущим состоянием и размерами окна
         */
        view: function(){
            var left;
            if (!this.element.hasClass('sidebar_state_show')){
                left = this._left;
            }else{
                left = Math.max(0, $(window).width() - this._width);
            }
            if (this.element.offset().left !== left){
                this.element.stop().animate({
                    left: left
                });
            }
        },
        /**
         * Реакция на изменения вида от других виджетов
         */
        call_view_sidebar: function(caller, show){
            if (show){
                this.element.addClass('sidebar_state_show');
            }else{
                this.element.removeClass('sidebar_state_show');
            }
            this.view();
        },
        /**
         * Реакция на изменения вида боковой панели
         */
        call_select_path: function(caller, type){
            this._$texts.find('.texts__item_state_active').removeClass('texts__item_state_active');
            this._$texts.find('.texts__item_type_'+type).addClass('texts__item_state_active');
        }
    });
})(jQuery, window);