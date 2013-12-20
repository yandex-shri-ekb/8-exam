var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {blue: 4},
    mix: {
        block: 'area',
        js: {area: 4, type: 'blue'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('blue', 'path-5', 3, 'bottom'),
                ImageHelper.easyGetImage('blue', 'newspaper', 1, 'bottom'),
                ImageHelper.easyGetImage('blue', 'magazine', 6, 'bottom'),
                ImageHelper.easyGetImage('blue', 'book', 11, 'bottom')
            ]
        },
        TextHelper.getText(
            [
                'В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе.',
                'Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги.'
            ],
            {blue: 4, align: 'center'},
            4, 7),
        ImageHelper.easyGetImage('blue', 'bag', 0)
    ]
};
