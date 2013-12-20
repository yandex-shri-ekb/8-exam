var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {red: 3},
    mix: {
        block: 'area',
        js: {area: 3, type: 'red'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('red', 'path-4', 1, 'bottom'),
                ImageHelper.easyGetImage('red', 'lisence', 1, 'bottom'),
                ImageHelper.easyGetImage('red', 'keys', 3, 'bottom'),
                ImageHelper.easyGetImage('red', 'bags', 0, 'bottom'),
            ]
        },
        TextHelper.getText(
            [
                'У семьи Быковых с собой очень много багажа, большую часть которого занимают платья жены и детские вещи.',
                'Ехать с сумками на общественном транспорте им совсем не хочется, тем более, когда есть вместительный '
                    + 'автомобиль. Алексей решает переплатить за парковку у аэропорта, зато добраться с удобством.'
            ],
            {red: 3, align: 'center'},
            4, 1),
        ImageHelper.easyGetImage('red', 'imac', 7),
        ImageHelper.easyGetImage('red', 'cup', 6)
    ]
};
