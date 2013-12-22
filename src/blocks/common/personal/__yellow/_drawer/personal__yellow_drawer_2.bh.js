module.exports = function(bh) {
    bh.match('personal__yellow_drawer_2', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {yellow: 2},
            attrs: {'data-adjusted-to': '.grid_yellow_2'},
            content: [
                TextHelper.getDrawerText(
                    'Рекомендации по покупке подходящих товаров',
                    [
                        'Предложения на главной странице выбраны на основе информации '
                            + 'о предпочтениях Максима, полученных сайтом от «Атома».'
                    ]),
                {
                    block: 'image',
                    src: '../../images/yellow/right/yellow-right-2.jpg'
                }
            ]
        };
    });
};
