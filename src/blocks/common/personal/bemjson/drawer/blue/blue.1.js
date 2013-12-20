var TextHelper = require('../../../../helper/helper__text');

module.exports = {
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
