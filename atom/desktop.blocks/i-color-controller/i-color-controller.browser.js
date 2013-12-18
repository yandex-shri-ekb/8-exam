modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('i-color-controller', {
        onSetMod: {
            js: {
                inited: function() {
                    var color = this.getRandomColor();
                    this.setColor(color);
                },
            },
        },
        setColor: function(color) {
            var page = this.findBlockOutside('page');
            page.setMod('color', color);
        },
        getPage: function() {
            return this.findBlockOutside('page');
        },
        getRandomColor: function() {
            var colors = ['yellow', 'red', 'blue'];
            var random = Math.floor(Math.random() * (colors.length));
            return colors[random];
        },
    }, {

    });

    provide(BEMDOM);

});

