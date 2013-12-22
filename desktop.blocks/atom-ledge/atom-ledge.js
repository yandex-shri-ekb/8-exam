modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('atom-ledge', {
        onSetMod : {
            'js' : function() {
                this._bindToClick();
            }
        },

        _bindToClick : function() {
            this.findBlockOutside('page')
                .bindTo('click', this._onClickOutsideLedge);
            this.bindTo('click', this._onClickInsideLedge);
        },

        _onClickInsideLedge : function(e) {
            e.preventDefault();
            e.stopPropagation();
            !this.hasMod('opened', 'yes') && this._slide();
        },

        _onClickOutsideLedge : function(e) {
            e.preventDefault();
            var ledge = this.findBlockInside('atom-ledge');
            ledge.hasMod('opened', 'yes') && ledge._slide();
        },

        _slide : function() {
            var page = this.findBlockOutside('page'),
                $el = this.domElem,
                offset;

            if(!this.hasMod('opened', 'yes')) {
                offset = 800 - (page.domElem.width() - $el.offset().left);
                if(offset > 0) {
                    $el.animate({ 'left': '-=' + offset }, 300);
                }
            } else {
                offset = 972 - $el.offset().left;
                $el.animate({ 'left': '+=' + offset }, 300);
            }

            this.toggleMod('opened', 'yes');
            page.toggleMod('active', 'yes');
        }
    });

    provide(BEMDOM);

});