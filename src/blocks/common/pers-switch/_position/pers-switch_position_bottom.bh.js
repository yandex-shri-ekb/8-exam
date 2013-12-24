module.exports = function(bh) {
    bh.match('pers-switch_position_bottom', function(ctx) {
        var PersHelper = require('../../helper/helper__pers');

        ctx.content({
            block: 'grid',
            mods: {common: 'switch-bottom'},
            mix: {
                block: 'area',
                js: {area: 'bottom', type: 'common', direction: 'up'}
            },
            content: [
                PersHelper.getPers('yellow', 'Максим', 1),
                PersHelper.getPers('red', 'Алексей Быков', 4),
                PersHelper.getPers('blue', 'Георгий И. Дауге', 7)
            ]
        });
    });
};
