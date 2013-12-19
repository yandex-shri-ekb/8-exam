modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-height-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    var ins = this.elem('in');
                    console.log(ins)
                    for (var i = 0, len = ins.length; i < len; i++) {
                        var recipient = $(ins[i]);
                        var outName = this.getMod(recipient, 'name');
                        var out = this.elem('out', 'name', outName);
                        var height = out.outerHeight();
                        recipient.css('height', height);

                    }

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

