module.exports = function (bh) {
    bh.match('image', function (ctx) {
        ctx.tag('img');
        ctx.attr('data-original', ctx.param('src'));
        ctx.js(true);
    });
};
