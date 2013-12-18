modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('aside-button', {
        onSetMod: {
            js: function() {
                this.bindTo('click', function(e) {
                    alert('Clicked!');
                });
            },
        },
    }, {

    });

    provide(BEMDOM);

});

