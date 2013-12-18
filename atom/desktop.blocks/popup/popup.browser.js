modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        onSetMod : {
            js : {
                inited : function() {
                    // Скрываем попап
                    this.bindTo('close', 'click', function() {
                        this.delMod('showed');
                    });
                },
            },
        },
    }, {

    });

    provide(BEMDOM);

});

