/**
 * Виджет путей персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, undefined) {
    $.widget("exam.story", $.boolive.widget, {
        _$story_path: null,
        _$video_btn: null,
        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            this._$story_path = this.element.find('.story-path:first');
            this._$video_btn = this.element.find('.video-btn:first');
            this.element.on('click', function(e){
                if (self.element.hasClass('story_state_close')){
                    e.preventDefault();
                    // скрытие боковой панели
                    self.callParents('view_sidebar', false, null, true);
                }
            });
        },

        /**
         * Реакция на изменения вида боковой панели
         */
        call_view_sidebar: function(caller, show){
            // Если боковая панель отображется, то пути в режиме скрытия
            if (show){
                this.element.addClass('story_state_close');
            }else{
                this.element.removeClass('story_state_close');
            }
        },

        /**
         * Реакция на изменения вида боковой панели
         */
        call_select_path: function(caller, type){
            //фон
            this.element.removeClass('story_type_yellow story_type_red story_type_blue');
            this.element.addClass('story_type_'+type);
            //кнопка видео
            this._$video_btn.removeClass('video-btn_type_yellow video-btn_type_red video-btn_type_blue');
            this._$video_btn.addClass('video-btn_type_'+type);
            // пути
            this._$story_path.find('.story-path__item_state_active').removeClass('story-path__item_state_active');
            this._$story_path.find('.story-path__item_type_'+type).addClass('story-path__item_state_active');
        }

    });
})(jQuery);