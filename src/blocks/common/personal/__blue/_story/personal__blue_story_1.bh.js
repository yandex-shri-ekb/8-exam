module.exports = function(bh) {
    bh.match('personal__blue_story_1', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'grid',
            mods: {blue: 1},
            mix: {
                block: 'area',
                js: {area: 1, type: 'blue'}
            },
            content: [
                {
                    elem: 'content',
                    mods: {
                        orientation: 'bottom',
                        size: 'full'
                    },
                    content: [
                        ImageHelper.easyGetImage('blue', 'path-2', 2, 'bottom'),
                        ImageHelper.easyGetImage('blue', 'phone', 0, 'bottom'),
                        ImageHelper.easyGetImage('blue', 'pen', 4, 'bottom'),
                        ImageHelper.easyGetImage('blue', 'watch', 6, 'bottom')
                    ]
                },
                ImageHelper.easyGetImage('blue', 'path-1', 1),
                TextHelper.getText(
                    [
                        'Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи.',
                        'Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, '
                            + 'Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель.'
                    ],
                    {blue: 1, align: 'center'},
                    4, 1),
                ImageHelper.easyGetImage('blue', 'ticket', 5),
                ImageHelper.easyGetImage('blue', 'notebook', 6),
                ImageHelper.easyGetImage('blue', 'photo', 10)
            ]
        };
    });
};
