module.exports = function(bh) {
    bh.match('personal__red_drawer_4', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {red: 4},
            attrs: {'data-adjusted-to': '.grid_red_4'},
            content: [
                TextHelper.getDrawerText(
                    'Рекомендации по выбору ресторана',
                    [
                        'При поиске ресторанов для посещения, сайт рекомендует Алексею места '
                            + 'на основе информации о его предпочтениях и вкусах.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/red/right/red-right-4.jpg'
                }
            ]
        };
    });
};
