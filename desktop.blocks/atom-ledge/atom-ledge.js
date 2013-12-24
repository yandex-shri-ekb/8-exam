modules.define('i-bem__dom', function (provide, BEMDOM) {

    var LEDGE_WIDTH = 840;
    var CONTENT_WIDTH = 972;

    BEMDOM.decl('atom-ledge', {
        onSetMod: {
            'js': function () {
                this._resizeSection();
                this._bindToClick();
            },

            'opened': function () {
                this._slide();
            }
        },

        _bindToClick: function () {
            this.findBlockOutside('page').bindTo('click', this._onClickOutsideLedge);
            this.bindTo('click', this._onClickInsideLedge);
        },

        _onClickInsideLedge: function (e) {
            e.preventDefault();
            e.stopPropagation();
            !this.hasMod('opened', 'yes') && this.toggleMod('opened', 'yes');
        },

        _onClickOutsideLedge: function (e) {
            e.preventDefault();
            var ledge = this.findBlockInside('atom-ledge');
            ledge.hasMod('opened', 'yes') && ledge.toggleMod('opened', 'yes');
        },

        _slide: function () {
            var page = this.findBlockOutside('page'),
                $el = this.domElem,
                offsetChange,
                offset;

            if (this.hasMod('opened', 'yes')) {
                offset = LEDGE_WIDTH - (page.domElem.width() - $el.offset().left);
                offsetChange = '-=' + offset;
            } else {
                offset = CONTENT_WIDTH - $el.offset().left;
                offsetChange = '+=' + offset;
            }

            if (offset > 0) {
                $el.animate({ 'left': offsetChange }, 300);
                page.findBlockInside('atom').toggleMod('active', 'yes', 'no');
                this.findBlockInside('help-icon').toggleMod('type', 'quest', 'xmark');
            }
        },

        _resizeSection: function () {
            var users = this.findBlockOutside('atom')
                .findBlockInside({'blockName': 'users', 'modName': 'pos', 'modVal': 'top'}).domElem;

            var section = this.findBlockInside('flex-section').domElem;
            var newHeight = users.offset().top + users.height() - section.offset().top;
            section.height(newHeight);
        }
    });

    provide(BEMDOM);

});