module.exports = function(bh) {
    bh.match('personal__blue_drawer_3', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {blue: 3},
            attrs: {'data-adjusted-to': '.grid_blue_3'},
            content: [
                TextHelper.getDrawerText(
                    'Напоминание о заказе такси',
                    [
                        'Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/blue/right/blue-right-3.jpg'
                }
            ]
        };
    });
};
