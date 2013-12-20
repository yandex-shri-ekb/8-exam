modules.define('i-bem__dom', ['jquery'], function (provide, $, DOM) {
    DOM.decl('sidebar-toggle-button', {
        onSetMod : {

            js: function() {
                this.bindTo('click', function() {
                    var sidebar = $('.sidebar').bem('sidebar');

                    if (this.getMod('state') === 'help') {
                        sidebar.setMod('show', 'yes');
                    } else {
                        sidebar.setMod('show', 'no');
                    }
                });
            }
        }
    });

    provide(DOM);
});