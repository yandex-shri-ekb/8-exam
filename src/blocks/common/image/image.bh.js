module.exports = function (bh) {
    bh.match('image', function (ctx) {
        ctx.tag('img');
        ctx.attr('src', ctx.param('src'));
    });
};
