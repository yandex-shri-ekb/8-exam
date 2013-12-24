modules.define(
    'i-bem__dom',
    ['bh'],
    function (provide, bh, DOM) {
        DOM.decl('video', {
            onSetMod: {
                js: function() {
                    this._popup = this.findBlockOutside('page').findBlockInside('popup');
                    this.bindTo(this.domElem, 'click', this._onClick, this);

                    this._iframe = bh.apply({
                        tag: 'iframe',
                        attrs: {
                            src: 'http://player.vimeo.com/video/75709551?autoplay=1',
                            width: 726,
                            height: 408,
                            frameborder: 0,
                            webkitallowfullscreen: true,
                            mozallowfullscreen: true,
                            allowfullscreen: true
                        }
                    });
                }
            },
            _onClick: function() {
                this._popup.open(this._iframe);
            }
        });

        provide(DOM);
    }
);
