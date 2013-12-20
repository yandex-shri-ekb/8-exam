var TextHelper = require('../../../../helper/helper__text');

module.exports = {
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
