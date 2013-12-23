modules.define('i-bem__dom', function(provide, BEMDOM) {

    BEMDOM.decl('user', {
        onSetMod: {
            'js': function() {
                this._bindToClick();
                this._bindToMouseOver();
            },
            'active': function(modName, modVal)  {
                var size = modVal === 'yes' ? 'middle' : 'mini';
                var self = this;

                // возможно лучше добавить модификатор
                this._getBlocksUsers().forEach(function(usersBlock) {
                    usersBlock.findBlockInside({
                        'blockName': 'user-icon',
                        'modName': 'theme',
                        'modVal': self.getMod('theme')
                    }).setMod('size', size);
                })
            }
        },

        _bindToClick: function() {
            !this.hasMod('passive', 'yes') && this.bindTo('icon', 'click', this._onClick);
        },

        _bindToMouseOver: function() {
            !this.hasMod('passive', 'yes') && this.bindTo('mouseover', this._onMouseOver);
        },

        _onClick: function() {
            var isTop = this.findBlockOutside('users').hasMod('pos', 'top'),
                theme = this.getMod('theme'),
                atom = this.findBlockOutside('atom');

            !isTop && this._scrollToBegin();
            theme !== atom.getMod('theme') && atom.setMod('theme', theme);
        },

        _scrollToBegin: function() {
            var page = this.findBlockOutside('page');
            var destination = page.findBlockInside({'blockName': 'users', 'modName': 'pos', 'modVal': 'top'});
            var top = destination.domElem.offset().top;
            page.domElem.animate({"scrollTop": top}, 500);
        },

        _onMouseOver: function(e) {
            var text = this.elem('text');
            !this.hasMod(text, 'show', 'yes') && this._showUserText();
        },

        _showUserText: function() {
            var users = this.findBlockOutside('users'),
                theme = this.getMod('theme'),
                self  = this;

            users.findBlocksInside('user').forEach(function(item) {
                item = item.findElem('text', 'show', 'yes');
                item && self.delMod(item, 'show');
            });

            var activeText = users.findBlockInside({'blockName': 'user', 'modName': 'theme', 'modVal': theme })
                .findElem('text');
            this.setMod(activeText, 'show', 'yes');
        },

        _getBlocksUsers: function() {
            if(!this._users) {
                this._users = this.findBlockOutside('atom').findBlocksInside('users');
            }
            return this._users;
        }
    });

    provide(BEMDOM);

});