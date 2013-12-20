var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {yellow: 4},
    mix: {
        block: 'area',
        js: {area: 4, type: 'yellow'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('yellow', 'path-5', 3, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'carton', 7, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'notebook', 2, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'bottle', 5, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'camera', 7, 'bottom')
            ]
        },
        TextHelper.getText(
            [
                'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране.',
                'Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. '
                    + 'Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
            ],
            {yellow: 4, align: 'center'},
            4, 7),
        ImageHelper.easyGetImage('yellow', 'backpack', 1)
    ]
};
