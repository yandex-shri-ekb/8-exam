var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {red: 4},
    mix: {
        block: 'area',
        js: {area: 4, type: 'red'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('red', 'path-5', 6, 'bottom'),
                ImageHelper.easyGetImage('red', 'drinks-1', 1, 'bottom'),
                ImageHelper.easyGetImage('red', 'drinks-2', 6, 'bottom', 1),
                ImageHelper.easyGetImage('red', 'drinks-3', 7, 'bottom'),
                ImageHelper.easyGetImage('red', 'drinks-2', 10, 'bottom', 2)
            ]
        },
        TextHelper.getText(
            [
                'Для Алексея один из основных мотивов выбора Таиланда — гастрономический: и он, и жена любят экзотическую кухню.',
                'Каждый день они вместе отправляются на поиски новых ресторанов.'
            ],
            {red: 4, align: 'center'},
            4, 7),
        ImageHelper.easyGetImage('red', 'food-1', 0),
        ImageHelper.easyGetImage('red', 'food-2', 2),
        ImageHelper.easyGetImage('red', 'food-3', 10)
    ]
};
