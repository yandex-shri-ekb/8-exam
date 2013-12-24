module.exports = function(bh) {
    bh.match('popup', function(ctx) {
        ctx.content([
            {elem: 'overlay'},
            {elem: 'content'}
        ]);
    });
};
