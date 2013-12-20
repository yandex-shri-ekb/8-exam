modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-scroll-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    var windowHeight = $(window).height(),
                        p = this.findBlocksInside('persons'),
                        person = this.findBlockInside('person'),
                        nav = this.findBlockInside('nav');

                    $(window).on('scroll', function(e) {
                        var scrollTop = $(window).scrollTop(),
                            from = p[0].domElem.offset().top + p[0].domElem.outerHeight(),
                            to = p[1].domElem.offset().top;

                        if(scrollTop < from || (scrollTop + windowHeight) > to) {
                            person.setMod('status', 'hided');
                            nav.setMod('status', 'hided');
                        } else if(scrollTop > from && (scrollTop + windowHeight) < to) {
                            person.setMod('status', 'showed');
                            nav.setMod('status', 'showed');
                        }
                    });
                }
            }
        }
    });

    provide(BEMDOM);

});

