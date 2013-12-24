module.exports = function(bh) {
    bh.match('list', function(ctx) {
        ctx.tag('ul');
        ctx.bem(false);
    });

    bh.match('list__item', function(ctx) {
        ctx.tag('li');
        ctx.bem(false);
    });
};
