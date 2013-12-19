modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        onSetMod : {
            js : {
                inited : function() {
                    this.bindTo('click', this.hide);
                    this.bindTo('close', 'click', this.hide);
                },
            },
        },
        hide: function() {
            this.delMod('showed');
        },
    }, {

    });

    provide(BEMDOM);

});

