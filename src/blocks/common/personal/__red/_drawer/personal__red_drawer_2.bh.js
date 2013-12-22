module.exports = function(bh) {
    bh.match('personal__red_drawer_2', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {red: 2},
            attrs: {'data-adjusted-to': '.grid_red_2'},
            content: [
                TextHelper.getDrawerText(
                    'Напоминание от интернет-магазина',
                    [
                        'Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. '
                            + 'Сайт, на котором он обычно их приобретает, отправляет ему напоминание о повторной покупке '
                            + 'с кнопкой перехода на предзаполненную форму заказа в один клик.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/red/right/red-right-2.jpg'
                }
            ]
        };
    });
};
