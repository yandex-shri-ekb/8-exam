module.exports = function(bh) {
    bh.match('personal_type_story__yellow', function(ctx) {
        ctx.content([
            {elem: 'yellow', mods: {story: '1'}},
            {elem: 'yellow', mods: {story: '2'}},
            {elem: 'yellow', mods: {story: '3'}},
            {elem: 'yellow', mods: {story: '4'}}
        ]);
    });

    bh.match('personal_type_story__red', function(ctx) {
        ctx.content([
            {elem: 'red', mods: {story: '1'}},
            {elem: 'red', mods: {story: '2'}},
            {elem: 'red', mods: {story: '3'}},
            {elem: 'red', mods: {story: '4'}}
        ]);
    });

    bh.match('personal_type_story__blue', function(ctx) {
        ctx.content([
            {elem: 'blue', mods: {story: '1'}},
            {elem: 'blue', mods: {story: '2'}},
            {elem: 'blue', mods: {story: '3'}},
            {elem: 'blue', mods: {story: '4'}}
        ]);
    });
};
