modules.define('i-bem__dom', function (provide, BEMDOM) {

    BEMDOM.decl('users', {
        onSetMod: {
            'theme': function (modName, currentTheme) {
                this.hasMod('pos', 'top') && this._changeUsers(currentTheme);
            }
        },

        _changeUsers: function (theme) {
            this.findBlocksInside('user').forEach(function (user) {
                var modVal = user.hasMod('theme', theme) ? 'yes' : 'no';
                user.setMod('active', modVal);
            });
        }
    });

    provide(BEMDOM);

});