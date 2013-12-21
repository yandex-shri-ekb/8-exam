modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-scroll-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._windowHeight = $(window).height(),
                    this._persons = this.findBlocksInside('persons'),
                    this._person = this.findBlockInside('person'),
                    this._nav = this.findBlockInside('nav');

                    $(window).on('scroll', $.proxy(this._onWindowScroll, this));
                }
            }
        },
        _onWindowScroll: function() {
            var scrollTop = $(window).scrollTop(),
                from = this._persons[0].domElem.offset().top + this._persons[0].domElem.outerHeight(),
                to = this._persons[1].domElem.offset().top;

            if(scrollTop < from || (scrollTop + this._windowHeight) > to) {
                this._person.setMod('status', 'hided');
                this._nav.setMod('status', 'hided');
            } else if(scrollTop > from && (scrollTop + this._windowHeight) < to) {
                this._person.setMod('status', 'showed');
                this._nav.setMod('status', 'showed');
            }
        }
    });

    provide(BEMDOM);

});

