module.exports = function(bh) {
    bh.match('personal_type_drawer__yellow', function(ctx) {
        ctx.content([
            {elem: 'yellow', mods: {drawer: '1'}},
            {elem: 'yellow', mods: {drawer: '2'}},
            {elem: 'yellow', mods: {drawer: '3'}},
            {elem: 'yellow', mods: {drawer: '4'}}
        ]);
    });

    bh.match('personal_type_drawer__red', function(ctx) {
        ctx.content([
            {elem: 'red', mods: {drawer: '1'}},
            {elem: 'red', mods: {drawer: '2'}},
            {elem: 'red', mods: {drawer: '3'}},
            {elem: 'red', mods: {drawer: '4'}}
        ]);
    });

    bh.match('personal_type_drawer__blue', function(ctx) {
        ctx.content([
            {elem: 'blue', mods: {drawer: '1'}},
            {elem: 'blue', mods: {drawer: '2'}},
            {elem: 'blue', mods: {drawer: '3'}},
            {elem: 'blue', mods: {drawer: '4'}}
        ]);
    });
};
