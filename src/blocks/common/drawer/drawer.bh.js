module.exports = function(bh) {
    bh.match('drawer', function(ctx) {
        ctx.content([
            {elem: 'header'},
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

    bh.match('drawer__header', function(ctx) {
        return [
            require('./bemjson/common.atom'),
            require('./bemjson/common.presentation')
        ];
    });

    bh.match('drawer__footer', function(ctx) {
        return require('./bemjson/common.footer');
    });
};
