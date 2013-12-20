module.exports = function(bh) {
    bh.match('personal_type_drawer__yellow', function(ctx) {
        ctx.content([
            require('../bemjson/drawer/yellow/yellow.1'),
            require('../bemjson/drawer/yellow/yellow.2'),
            require('../bemjson/drawer/yellow/yellow.3'),
            require('../bemjson/drawer/yellow/yellow.4')
        ]);
    });

    bh.match('personal_type_drawer__red', function(ctx) {
        ctx.content([
            require('../bemjson/drawer/red/red.1'),
            require('../bemjson/drawer/red/red.2'),
            require('../bemjson/drawer/red/red.3'),
            require('../bemjson/drawer/red/red.4')
        ]);
    });

    bh.match('personal_type_drawer__blue', function(ctx) {
        ctx.content([
            require('../bemjson/drawer/blue/blue.1'),
            require('../bemjson/drawer/blue/blue.2'),
            require('../bemjson/drawer/blue/blue.3'),
            require('../bemjson/drawer/blue/blue.4')
        ]);
    });
};
