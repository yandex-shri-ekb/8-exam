module.exports = function(bh) {
    bh.match('pers-switch_position_top', function(ctx) {
        ctx.content(require('./bemjson/pers-switch.top'));
        ctx.mix({
            block: 'area',
            js: {area: 'top', type: 'common', direction: 'down'}
        });
    });

    bh.match('pers-switch_position_bottom', function(ctx) {
        ctx.content(require('./bemjson/pers-switch.bottom'));
        ctx.mix({
            block: 'area',
            js: {area: 'bottom', type: 'common', direction: 'up'}
        });
    });

    bh.match('pers-switch_position_fixed', function(ctx) {
        ctx.content(require('./bemjson/pers-switch.fixed'));
    });
};
