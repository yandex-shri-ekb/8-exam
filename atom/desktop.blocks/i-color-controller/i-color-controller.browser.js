modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

    BEMDOM.decl('i-color-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    this._page = this.findBlockOn('page');
                    this._person = this.findBlockInside('person');
                    this._personsYPos = this.findBlockInside('persons').domElem.offset().top;

                    var color = this.__self.getRandomColor();
                    this._setColor({color: color});

                    var choisers = this.findBlocksOn('choiser', 'persons');
                    for(var i = 0, len = choisers.length; i < len; i++) {
                        choisers[i].on('colorChange', this._onColorChange, this);
                    }
                },
            },
        },
        _onColorChange: function(e, data) {
            this._setColor(data);
        },
        _setColor: function(data) {
            this._page.setMod('color', data.color);
            this._person.setMod('color', data.color);

            if(data.scroll === true)
                $('body').animate({scrollTop: this._personsYPos}, 'fast');
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

