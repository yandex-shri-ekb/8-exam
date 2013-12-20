var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {yellow: 3},
    mix: {
        block: 'area',
        js: {area: 3, type: 'yellow'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('yellow', 'path-4', 1, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'ticket', 4, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'aeroexpress', 0, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'money', 5, 'bottom'),
                ImageHelper.easyGetImage('yellow', 'traffic', 2, 'bottom')
            ]
        },
        TextHelper.getText(
            [
                'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима.',
                'На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
            ],
            {yellow: 3, align: 'center'},
            4, 1),
        ImageHelper.easyGetImage('yellow', 'magazine', 9),
        ImageHelper.easyGetImage('yellow', 'ipod', 8)
    ]
};
