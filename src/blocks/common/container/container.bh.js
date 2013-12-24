module.exports = function(bh) {
    bh.match('container', function(ctx) {
        ctx.content([
            {elem: 'header'},
            {elem: 'info'},
            {
                block: 'pers-switch',
                mods: {position: 'top'},
                js: true
            },
            {
                block: 'personal',
                mods: {type: 'story'},
                content: [
                    {elem: 'yellow'},
                    {elem: 'red'},
                    {elem: 'blue'}
                ]
            },
            {
                block: 'pers-switch',
                mods: {position: 'bottom'},
                js: true
            },
            {elem: 'footer'}
        ]);
        ctx.js(true);
    });
};
