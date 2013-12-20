modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-height-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    var borderWidth = 2;
                    var ins = this.elem('in');
                    for(var i = 0, len = ins.length; i < len; i++) {
                        var recipient = $(ins[i]);
                        var outName = this.getMod(recipient, 'name');
                        var out = this.elem('out', 'name', outName);
                        var height = out.outerHeight() - borderWidth;
                        recipient.css('height', height);
                    }

                    steps = this.findBlocksInside('steps');
                    for(var i = 0, len = steps.length; i < len; i++) {
                        steps[i].domElem.css('display', 'none')
                    }
                }
            }
        }
    });

    provide(BEMDOM);

});

