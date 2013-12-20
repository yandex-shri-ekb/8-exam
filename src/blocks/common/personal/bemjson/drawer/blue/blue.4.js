var TextHelper = require('../../../../helper/helper__text');

module.exports = {
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
