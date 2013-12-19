({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_anygrid.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content: [
        {
            block: 'atom',
            content:
                {
                    elem: 'border',
                    content: {
                        block: 'themes',
                        content: [
                            { block: 'theme-yellow' }
                        ]
                    }
                }
        },
        { elem: 'ledge' },
        { elem: 'js', url: '_index.js' }
    ]
})