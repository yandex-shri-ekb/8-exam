modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('popup', {
        onSetMod : {
            js : {
                inited : function() {
                    // var id = получаем id попапа
                    // $('a[href=#"' + id + '"]').on('click', function() {
                    //     this.setMod('showed', 'yes');
                    // });
                }
            },
        }
    }, {

    });

    provide(BEMDOM);

});

