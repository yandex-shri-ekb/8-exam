module.exports = function(bh) {
    bh.match('personal__blue_drawer_4', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {blue: 4},
            attrs: {'data-adjusted-to': '.grid_blue_4'},
            content: [
                TextHelper.getDrawerText(
                    'Рекомендации по оздоровительным процедурам',
                    [
                        'На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются '
                            + 'подходящие ему варианты, учитывающие его предпочтения.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/blue/right/blue-right-4.jpg'
                }
            ]
        };
    });
};
