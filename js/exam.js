/**
 * Название
 *
 * @version 1.0
 * @date 16.12.2013
 * @author Vladimir Shestakov <boolive@yandex.ru>
 */
(function($, window, undefined){
    var exam = {
        $main: null,
        $sidebar_switcher: null,
        $sidebar: null,
        sidebar_left: null,
        sidebar_width: null,

        init: function(){
            var self = this;
            this.$main = $('.main');
            this.$sidebar = $('.sidebar');
            this.$sidebar_switcher = $('.sidebar-switcher');
            this.sidebar_width = this.$sidebar.find('.sidebar__item-content').outerWidth();
            this.sidebar_left = this.$sidebar.offset().left;

            this.$sidebar_switcher.on('click', function(e){
                e.preventDefault();
                self.sidebar_toggle();
            });
            $(window.document).on('click', '.block_state_close', function(e){
                e.preventDefault();
                self.sidebar_toggle();
            }).on('resize', function(){
                self.sidebar_reflow();
                    console.log('resize');
            });
        },

        sidebar_toggle: function(){
            this.$sidebar.toggleClass('block_state_close');
            this.$main.toggleClass('block_state_close');
            this.sidebar_reflow();
        },

        sidebar_reflow: function(){
            var left;
            if (this.$sidebar.hasClass('block_state_close')){
                left = this.sidebar_left;
            }else{
                left = Math.max(0, $(window).width() - this.sidebar_width);
            }
            if (this.$sidebar.offset().left !== left){
                this.$sidebar.stop().animate({
                    left: left
                });
            }
        }
    };

    $(window.document).ready(function(){
       exam.init();
    });
}(jQuery, window));