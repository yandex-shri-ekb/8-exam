module.exports = function(bh) {
    bh.match('personal__yellow_drawer_3', function(ctx) {
        var ImageHelper = require('../../../helper/helper__image'),
            TextHelper = require('../../../helper/helper__text');

        return {
            block: 'drawer',
            elem: 'block',
            mods: {yellow: 3},
            attrs: {'data-adjusted-to': '.grid_yellow_3'},
            content: [
                TextHelper.getDrawerText(
                    'Предложение купить билет на аэроэкспресс',
                    [
                        'Зная предпочтения Максима, сайт предлагает ему подходящий способ '
                            + 'добраться до аэропорта и рекомендует время отправления.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/yellow/right/yellow-right-3.jpg'
                }
            ]
        };
    });
};
