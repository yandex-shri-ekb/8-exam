module.exports = function(bh) {
    bh.match('personal__yellow_story_1', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'grid',
            mods: {yellow: 1},
            mix: {
                block: 'area',
                js: {area: 1, type: 'yellow'}
            },
            content: [
                {
                    elem: 'content',
                    mods: {
                        orientation: 'bottom',
                        size: 'full'
                    },
                    content: [
                        ImageHelper.easyGetImage('yellow', 'path-2', 2, 'bottom'),
                        ImageHelper.easyGetImage('yellow', 'aviaticket', 0, 'bottom'),
                        ImageHelper.easyGetImage('yellow', 'compass', 7, 'bottom'),
                        ImageHelper.easyGetImage('yellow', 'book', 10, 'bottom')
                    ]
                },
                ImageHelper.easyGetImage('yellow', 'path-1', 1),
                TextHelper.getText(
                    [
                        'Максим хочет увидеть настоящий, нетуристический Таиланд.',
                        'Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу.'
                            + ' Поэтому всё, что ему нужно, — билет на самолёт.'
                    ],
                    {yellow: 1, align: 'center'},
                    4, 1),
                ImageHelper.easyGetImage('yellow', 'map', 6)
            ]
        };
    });
};
