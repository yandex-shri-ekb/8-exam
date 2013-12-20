var TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'drawer',
    elem: 'block',
    mods: {blue: 2},
    attrs: {'data-adjusted-to': '.grid_blue_2'},
    content: [
        TextHelper.getDrawerText(
            'Рекомендации по покупке подходящих товаров',
            [
                'Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.'
            ]),
        {
            block: 'image',
            src: '../../images/blue/right/blue-right-2.jpg'
        }
    ]
};
