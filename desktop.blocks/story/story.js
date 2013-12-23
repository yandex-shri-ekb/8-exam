modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('story', {
        onSetMod: {
            'show': function() {
                this.domElem.css({left: '-952px', top: 0});
            }
        }
    });

    provide(BEMDOM);

});