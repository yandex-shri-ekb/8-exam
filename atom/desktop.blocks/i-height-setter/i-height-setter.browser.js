modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('i-height-setter', {
        onSetMod: {
            js: {
                inited: function() {
                    // TODO
                    // 1. получаем ID связанного блока
                    // var id =

                    // 2. получаем сам блок
                    // this.findBlockOutside(id);

                    // 3. получаем высоту блока
                    // var height = block.outerHeight();

                    // 4. устанавливаем высоту
                    // this.css('height', height);
                },
            },
        },
    }, {

    });

    provide(BEMDOM);

});

