var TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'drawer',
    elem: 'block',
    mods: {red: 3},
    attrs: {'data-adjusted-to': '.grid_red_3'},
    content: [
        TextHelper.getDrawerText(
            'Рекомендация по времени выезда с учётом пробок на дорогах',
            [
                'Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробок.'
            ]),
        {
            block: 'image',
            src: '../../images/red/right/red-right-3.jpg'
        }
    ]
};
