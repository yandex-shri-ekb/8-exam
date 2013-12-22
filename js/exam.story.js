/**
 * Виджет историй персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, undefined) {
    $.widget("exam.story", $.boolive.widget, {
        _$story_path: null,
        _$video_btn: null,
        _person_pos: null,
        _person_pos_current: null,
        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            this._$story_path = this.element.find('.story-path:first');
            this._$video_btn = this.element.find('.video-btn:first');
            this.element.on('click', function(e){
                if (self.element.hasClass('story_state_close')){
                    e.preventDefault();
                    // скрытие боковой панели
                    self.callParents('show_sidebar', false, null, true);
                }
            });
            this._person_pos = {};
            this._person_pos_current = {};
            this._$story_path.children('.story-path__item[data-type]').each(function(){
                var key = $(this).data('type');
                if (typeof self._person_pos[key] === 'undefined') self._person_pos[key] = [];
                $(this).find('[data-pos]').each(function(){
                    self._person_pos[key].push({pos:$(this).data('pos'), top: $(this).offset().top})
                });
            });
            // При скроллинге определять позицию персонажей
            $(window).on('scroll', function(){
                self.find_person_position();
            }).on('resize', function(){
                self.find_person_position();
            });
            // play видео
            this._$video_btn.on('click', function(e){
                e.preventDefault();
                self.callParents('play_video', true, null, true);
            })
        },

        /**
         * Поиск позиции каждого персонажа
         * О смене позиции сообщается всем виджетам
         */
        find_person_position: function(){
            var self = this,
                scroll = $(window).scrollTop() + $(window).height()/2;
            $.each(this._person_pos, function(type, positions){
                var find = {pos: positions[0].pos, dt: Math.abs(scroll - positions[0].top)};
                var i,
                    dt,
                    cnt = positions.length;
                for (i=1; i<cnt; i++){
                    dt = Math.abs(scroll - positions[i].top);
                    if (dt < find.dt){
                        find.pos = positions[i].pos;
                        find.dt = dt;
                    }
                }
                if (self._person_pos_current[type] !== find.pos){
                    self._person_pos_current[type] = find.pos;
                    self.callParents('person_position', {type: type, pos: find.pos}, null, true);
                }
            });
        },

        /**
         * Реакция на открытие/скрытыие боковой панели
         */
        call_show_sidebar: function(caller, show){
            // Если боковая панель отображется, то пути в режиме скрытия
            if (show){
                this.element.addClass('story_state_close');
            }else{
                this.element.removeClass('story_state_close');
            }
        },

        /**
         * Реакция на выбор персонажа
         */
        call_select_person: function(caller, type){
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