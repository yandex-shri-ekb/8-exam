var TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'drawer',
    elem: 'block',
    mods: {red: 1},
    attrs: {'data-adjusted-to': '.grid_red_1'},
    content: [
        TextHelper.getDrawerText(
            'Покупка тура',
            [
                'В острове Алексей Быков сразу указывает параметры для поиска тура. '
                    + 'Из результатов убраны слишком дорогие и престижные для Алексея отели. '
                    + 'В списке вариантов — туры, идеально подходящие для семейного отдыха с детьми.'
            ]),
        {
            block: 'image',
            src: '../../images/red/right/red-right-1.jpg'
        }
    ]
};
