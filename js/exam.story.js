/**
 * Виджет историй персонажей
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, undefined) {

    $.widget("exam.story", $.boolive.widget, {
        /** {jQuery} Элемент с путями (историями) персонажей */
        _$storyPath: null,
        /** {jQuery} Кнопка показа видео */
        _$videoBtn: null,
        /** {Object} Все позиции для каждого персонажа, чтобы отслеживать их текущее положение */
        _personPosAll: null,
        /** {Object} Текущая позиция (номер) для каждого персонажа */
        _personPosCur: null,
        /** {String} Текущий персонаж. */
        _personTypeCur: null,

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            // Скрытие боковой панели
            this.element.on('click', function(e){
                if (self.element.hasClass('story_state_close')){
                    e.preventDefault();
                    self.callParents('showSidebar', false, null, true);
                }
            });
            // Поиск всех позиций в пути у всех персонажей
            this._personPosAll = {};
            this._personPosCur = {};
            this._$storyPath = this.element.find('.story-path:first');
            this._$storyPath.children('.story-path__item[data-type]').each(function(){
                var key = $(this).data('type');
                if (typeof self._personPosAll[key] === 'undefined') self._personPosAll[key] = [];
                $(this).find('[data-pos]').each(function(){
                    self._personPosAll[key].push({pos:$(this).data('pos'), top: $(this).offset().top})
                });
            });
            // При скроллинге и ресайзе определять позицию персонажей
            $(window).on('scroll resize', function(){
                self._findPersonPosition();
            });
            // Play видео
            this._$videoBtn = this.element.find('.video-btn:first');
            this._$videoBtn.on('click', function(e){
                e.preventDefault();
                self.callParents('playVideo', true, null, true);
            });
            // Случайный выбор активного персонажа
            this.call_selectPerson({}, ['yellow', 'blue', 'red'][Math.round(Math.random()*2)]);
        },

        /**
         * Поиск позиции каждого персонажа
         * О смене позиции сообщается всем виджетам
         */
        _findPersonPosition: function(){
            var self = this,
                scroll = $(window).scrollTop() + $(window).height()/2;
            $.each(this._personPosAll, function(type, positions){
                var find = {pos: positions[0].pos, dt: Math.abs(scroll - positions[0].top)},
                    i,
                    dt,
                    cnt = positions.length;
                for (i = 1; i < cnt; i++){
                    dt = Math.abs(scroll - positions[i].top);
                    if (dt < find.dt){
                        find.pos = positions[i].pos;
                        find.dt = dt;
                    }
                }
                if (self._personPosCur[type] !== find.pos){
                    self._personPosCur[type] = find.pos;
                    self.callParents('personPosition', {type: type, pos: find.pos}, null, true);
                }
            });
        },

        /**
         * Возвращает текущего персонажа
         * @returns {String}
         */
        call_getPersonType: function(){
            return this._personTypeCur;
        },

        /**
         * Реакция на открытие/скрытыие боковой панели
         */
        call_showSidebar: function(caller, show){
            if (show){
                this.element.addClass('story_state_close');
            }else{
                this.element.removeClass('story_state_close');
            }
        },

        /**
         * Реакция на выбор персонажа
         */
        call_selectPerson: function(caller, type){
            this._personTypeCur = type;
            //фон
            this.element.removeClass('story_type_yellow story_type_red story_type_blue');
            this.element.addClass('story_type_'+type);
            //кнопка видео
            this._$videoBtn.removeClass('video-btn_type_yellow video-btn_type_red video-btn_type_blue');
            this._$videoBtn.addClass('video-btn_type_'+type);
            // пути
            this._$storyPath.find('.story-path__item_state_active').removeClass('story-path__item_state_active');
            this._$storyPath.find('.story-path__item_type_'+type).addClass('story-path__item_state_active');
        }
    });
})(jQuery);