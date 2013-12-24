module.exports = function(bh) {
    bh.match('personal__blue_story_2', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'grid',
            mods: {blue: 2},
            mix: {
                block: 'area',
                js: {area: 2, type: 'blue'}
            },
            content: [
                {
                    elem: 'content',
                    mods: {
                        orientation: 'bottom',
                        size: 'full'
                    },
                    content: [
                        ImageHelper.easyGetImage('blue', 'path-3', 1, 'bottom'),
                        ImageHelper.easyGetImage('blue', 'mask', 7, 'bottom'),
                        ImageHelper.easyGetImage('blue', 'palka', 9, 'bottom')
                    ]
                },
                TextHelper.getText(
                    [
                        'Даже отдых должен приносить в жизнь что-нибудь новое — таков жизненный принцип Григория Иогановича.',
                        'В этой поездке он планирует научиться дайвингу: посмотреть на коралловые рифы и причудливых морских животных.'
                    ],
                    {blue: 2, align: 'center'},
                    4, 7),
                ImageHelper.easyGetImage('blue', 'paper', 0),
                ImageHelper.easyGetImage('blue', 'notebook-2', 0),
                ImageHelper.easyGetImage('blue', 'ipad', 2),
                ImageHelper.easyGetImage('blue', 'cup', 4, 'bottom')
            ]
        };
    });
};
