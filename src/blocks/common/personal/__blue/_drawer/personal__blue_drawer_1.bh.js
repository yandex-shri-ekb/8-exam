module.exports = function(bh) {
    bh.match('personal__blue_drawer_1', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {blue: 1},
            attrs: {'data-adjusted-to': '.grid_blue_1'},
            content: [
                TextHelper.getDrawerText(
                    'Рекомендации по подбору отеля',
                    [
                        'Список отелей, показанных на главной странице сайта бронирования, основан на полученных от '
                            + '«Атома» гипотезах. В списке на первых местах те отели, '
                            + 'которые наверняка понравятся Григорию Иогановичу.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/blue/right/blue-right-1.jpg'
                }
            ]
        };
    });
};
