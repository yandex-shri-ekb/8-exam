module.exports = function(bh) {
    bh.match('personal__blue_drawer_2', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
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
    });
};
