var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {yellow: 2},
    mix: {
        block: 'area',
        js: {area: 2, type: 'yellow'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('yellow', 'path-3', 1, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'iphone', 8, 'bottom')
            ]
        },
        TextHelper.getText(
            [
                'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь.',
                'Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
            ],
            {yellow: 2, align: 'center'},
            4, 7),
        ImageHelper.easyGetImage('yellow', 'polaroid', 0, 0, 1),
        ImageHelper.easyGetImage('yellow', 'polaroid', 3, 0, 3),
        ImageHelper.easyGetImage('yellow', 'polaroid', 2, 0, 2),
        ImageHelper.easyGetImage('yellow', 'laptop', 1)
    ]
};
