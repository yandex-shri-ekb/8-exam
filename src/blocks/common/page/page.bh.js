module.exports = function(bh) {
    bh.match('page', function(ctx) {
        return [
            {elem: 'doctype', content: ctx.param('doctype') || '<!DOCTYPE HTML>'},
            {
                elem: 'html',
                content: [
                    {
                        tag: 'head',
                        content: [
                            [
                                {
                                    elem: 'meta',
                                    attrs: {charset: 'utf-8'}
                                },
                                {
                                    elem: 'meta',
                                    attrs: {
                                        'http-equiv': 'X-UA-Compatible',
                                        content: 'IE=Edge'
                                    }
                                },
                                {
                                    elem: 'title',
                                    content: ctx.param('title')
                                },
                                ctx.param('favicon') &&
                                    {
                                        elem: 'favicon',
                                        url: ctx.param('favicon')
                                    }
                            ],
                            ctx.param('styles')
                        ]
                    },
                    {
                        elem: 'content',
                        content: ctx.json()
                    }
                ]
            }
        ];
    });

    bh.match('page', function(ctx) {
        ctx.tag('body');
        ctx.js(true);
        ctx.content(
            [].concat(ctx.content(), ctx.param('scripts')),
            true);
    });

    bh.match('page__html', function(ctx) {
        ctx.tag('html');
        ctx.bem(false);
    });

    bh.match('page__title', function(ctx) {
        ctx.tag('title');
        ctx.bem(false);
    });

    bh.match('page__head', function(ctx) {
        ctx.tag('head');
        ctx.bem(false);
    });

    bh.match('page__meta', function(ctx) {
        ctx.tag('meta');
        ctx.bem(false);
    });

    bh.match('page__doctype', function(ctx) {
        return ctx.content();
    });

    bh.match('page__favicon', function(ctx) {
        ctx.tag('link');
        ctx.attr('rel', 'shortcut icon');
        ctx.attr('href', ctx.param('url'));
        ctx.bem(false);
    });

    bh.match('page__js', function(ctx) {
        ctx.tag('script');
        ctx.attr('src', ctx.param('url'));
        ctx.bem(false);
    });

    bh.match('page__css', function(ctx, json) {
        ctx.bem(false);

        if (json.url) {
            ctx.tag('link');
            ctx.attr('rel', 'stylesheet');
            ctx.attr('href', json.url);
        } else {
            ctx.tag('style');
        }

        if (json.hasOwnProperty('ie')) {
            var ie = json.ie;
            if (ie === true) {
                return [6, 7, 8, 9].map(function(v) {
                    return { elem: 'css', url: json.url + '.ie' + v + '.css', ie: 'IE ' + v };
                });
            } else {
                var hideRule = !ie ?
                    ['gte IE 9', '<!-->', '<!--'] :
                    ie === '!IE' ?
                        [ie, '<!-->', '<!--'] :
                        [ie, '', ''];
                return [
                    '<!--[if ' + hideRule[0] + ']>',
                    hideRule[1],
                    json,
                    hideRule[2],
                    '<![endif]-->'
                ];
            }
        }
    });
};
