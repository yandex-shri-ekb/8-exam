module.exports = function(bh) {
    bh.match('drawer', function(ctx) {
        ctx.content([
            {elem: 'header'},
            {elem: 'presentation'},
            {
                block: 'personal',
                mods: {type: 'drawer'},
                content: [
                    {elem: 'yellow'},
                    {elem: 'red'},
                    {elem: 'blue'}
                ]
            },
            {elem: 'footer'},
            {elem: 'control'}
        ]);
        ctx.js(true);
    });
};
