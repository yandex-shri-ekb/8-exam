module.exports = function(bh) {
    bh.match('container__header', function(ctx) {
        var ImageHelper = require('../../helper/helper__image'),
            TextHelper = require('../../helper/helper__text');

        return {
            block: 'grid',
            mods: {common: 'header'},
            content: [
                ImageHelper.easyGetImage('common', 'atoms'),
                ImageHelper.easyGetImage('common', 'ya-logo', 5),
                TextHelper.getText(
                    '— А что если интернет подстроится под вас?',
                    {common: 'header', align: 'center'},
                    10, 1)
            ]
        };
    });
};
