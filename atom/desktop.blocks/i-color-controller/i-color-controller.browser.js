modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('i-color-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._page = this.findBlockOn('page');

                    var color = this.__self.getRandomColor();
                    this._setColor(color);

                    var choisers = this.findBlocksOn('choiser', 'persons');
                    for (var i = 0, len = choisers.length; i < len; i++) {
                        choisers[i].on('colorChange', this._onColorChange, this);
                    }
                },
            },
        },
        _onColorChange: function(e, color) {
            this._setColor(color);
        },
        _setColor: function(color) {
            this._page.setMod('color', color);
        },
    }, {
        getRandomColor: function() {
            var colors = ['yellow', 'red', 'blue'];
            var random = Math.floor(Math.random() * (colors.length));
            return colors[random];
        },
    });

    provide(BEMDOM);

});

