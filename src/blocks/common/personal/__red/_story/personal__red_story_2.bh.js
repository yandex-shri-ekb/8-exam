module.exports = function(bh) {
    bh.match('personal__red_story_2', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'grid',
            mods: {red: 2},
            mix: {
                block: 'area',
                js: {area: 2, type: 'red'}
            },
            content: [
                {
                    elem: 'content',
                    mods: {
                        orientation: 'bottom',
                        size: 'full'
                    },
                    content: [
                        ImageHelper.easyGetImage('red', 'path-3', 1, 'bottom'),
                        ImageHelper.easyGetImage('red', 'bill', 4, 'bottom'),
                        ImageHelper.easyGetImage('red', 'lenses', 6, 'bottom'),
                        ImageHelper.easyGetImage('red', 'glasses', 7, 'bottom')
                    ]
                },
                TextHelper.getText(
                    [
                        'Алексей твердо уверен, что линзы практичнее обычных очков — как минимум потому, '
                            + 'что вместе с ними можно надеть другие очки: для плавания или солнечные.',
                        'Он привык к тому, что у него всегда есть запас одноразовых линз.'
                    ],
                    {red: 2, align: 'center'},
                    4, 7),
                ImageHelper.easyGetImage('red', 'iphone', 1),
                ImageHelper.easyGetImage('red', 'tamagotchi', 0)
            ]
        };
    });
};
