module.exports = function(bh) {
    bh.match('pers-switch_position_fixed', function(ctx) {
        ctx.content([
            {
                elem: 'item',
                mods: {type: 'yellow'},
                content: {elem: 'pictogram'},
                js: {type: 'yellow'}
            },
            {
                elem: 'item',
                mods: {type: 'red'},
                content: {elem: 'pictogram'},
                js: {type: 'red'}
            },
            {
                elem: 'item',
                mods: {type: 'blue'},
                content: {elem: 'pictogram'},
                js: {type: 'blue'}
            }
        ]);
    });
};
