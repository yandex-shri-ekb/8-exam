var TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'drawer',
    elem: 'block',
    mods: {yellow: 1},
    attrs: {'data-adjusted-to': '.grid_yellow_1'},
    content: [
        TextHelper.getDrawerText(
            'Покупка авиабилетов',
            [
                'Уже в результатах поиска Максим может уточнить удобные даты '
                    + 'и перейти сразу на сайт с подходящими ему вариантами.'
            ]),
        {
            block: 'image',
            src: '../../images/yellow/right/yellow-right-1.jpg'
        }
    ]
};
