({
    block: 'b-page',
    title: 'Atom',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'content',
            content: [
                {
                    block: 'grid',
                    mods: {cols: 12},
                    content: [
                        {
                            elem: 'module',
                            mods: {col: 1, span: 1},
                            content: 'wat'
                        },
                        {
                            elem: 'module',
                            mods: {col: 2, span: 1},
                            content: 'hello'
                        },
                        {
                            elem: 'module',
                            mods: {col: 5, span: 3},
                            content: 'World'
                        },
                        {
                            elem: 'row'
                        },
                        {
                            elem: 'module',
                            mods: {col: 3, span: 6},
                            content: 'test2'
                        },
                        {
                            elem: 'module',
                            mods: {col: 12, span: 1},
                            content: 'last one'
                        }
                    ]
                }
            ]
        }
    ]
})
