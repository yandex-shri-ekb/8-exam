module.exports = function(bh) {
    bh.match('personal__yellow_drawer_4', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {yellow: 4},
            attrs: {'data-adjusted-to': '.grid_yellow_4'},
            content: [
                TextHelper.getDrawerText(
                    'Выбор интересных мест для посещения',
                    [
                        'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, '
                            + 'сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/yellow/right/yellow-right-4.jpg'
                }
            ]
        };
    });
};
