module.exports = function(bh) {
    bh.match('text__paragraph', function(ctx) {
        ctx.tag('p');
    });

    bh.match('text__title', function(ctx) {
        ctx.tag('h2');
    });
};
