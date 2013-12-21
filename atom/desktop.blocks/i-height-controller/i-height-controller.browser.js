modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-height-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    var heightImporters = this.elem('h-imp'),
                        borderWidth = 2;

                    for(var i = 0, len = heightImporters.length; i < len; i++) {
                        var heightImporter = $(heightImporters[i]),
                            heightExporter = this.elem('h-exp', 'name', this.getMod(heightImporter, 'name')),
                            height = heightExporter.outerHeight() - borderWidth;
                        heightImporter.css('height', height);
                    }

                    steps = this.findBlocksInside('steps');
                    for(var i = 0, len = steps.length; i < len; i++) {
                        steps[i].domElem.css('display', 'none');
                    }
                }
            }
        }
    });

    provide(BEMDOM);

});

