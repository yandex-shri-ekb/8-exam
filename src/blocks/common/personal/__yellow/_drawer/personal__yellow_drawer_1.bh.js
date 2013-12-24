module.exports = function(bh) {
    bh.match('personal__yellow_drawer_1', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
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
    });
};
