var TextHelper = require('../../../../helper/helper__text');

module.exports = {
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
