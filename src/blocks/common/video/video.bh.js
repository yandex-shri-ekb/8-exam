module.exports = function(bh) {
    bh.match('video', function(ctx) {
        ctx.content([
            {
                elem: 'thumb'
            },
            {
                elem: 'desc',
                content: 'Весь сайт в одном видео'
            }
        ]);
    });
};
