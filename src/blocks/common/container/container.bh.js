module.exports = function(bh) {
    bh.match('container', function(ctx) {
        ctx.content([
            {elem: 'header'},
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
            {elem: 'foot'}
        ]);
        ctx.js(true);
    });

    bh.match('container__header', function(ctx) {
        return [
            require('./bemjson/common.header'),
            require('./bemjson/common.info')
        ];
    });

    bh.match('container__foot', function(ctx) {
        return require('./bemjson/common.footer');
    });
};
