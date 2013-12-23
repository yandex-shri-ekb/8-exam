/**
 * Модальное окно с видео
 * @version 1.0
 * @date 20.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($) {
    $.widget("exam.modal-video", $.boolive.widget, {

        _create: function() {
            $.boolive.widget.prototype._create.call(this);
            var self = this;
            this.element.on('click', function(e) {
                if(e.target !== self.element.find('.modal__window')[0]) {
                    self.call_playVideo({}, false);
                }
            });

        },

        call_playVideo: function(caller, play) {
            if(play) {
                this.element.addClass('modal_open_true');
            } else {
                this.element.removeClass('modal_open_true');
                var frame = this.element.find('iframe');
                frame.replaceWith(frame.clone());
            }
        }
    });
})(jQuery);