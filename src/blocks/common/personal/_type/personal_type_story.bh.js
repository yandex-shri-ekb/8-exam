module.exports = function(bh) {
    bh.match('personal_type_story__yellow', function(ctx) {
        ctx.content([
            require('../bemjson/story/yellow/yellow.1'),
            require('../bemjson/story/yellow/yellow.2'),
            require('../bemjson/story/yellow/yellow.3'),
            require('../bemjson/story/yellow/yellow.4')
        ]);
    });

    bh.match('personal_type_story__red', function(ctx) {
        ctx.content([
            require('../bemjson/story/red/red.1'),
            require('../bemjson/story/red/red.2'),
            require('../bemjson/story/red/red.3'),
            require('../bemjson/story/red/red.4')
        ]);
    });

    bh.match('personal_type_story__blue', function(ctx) {
        ctx.content([
            require('../bemjson/story/blue/blue.1'),
            require('../bemjson/story/blue/blue.2'),
            require('../bemjson/story/blue/blue.3'),
            require('../bemjson/story/blue/blue.4')
        ]);
    });
};
