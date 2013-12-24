({
    mustDeps: [
        'link',
        'list',
        {
            block: 'text',
            mods: {
                drawer: 'true'
            }
        },
        {
            block: 'personal',
            mods: {
                type: 'drawer'
            },
            elems: [
                {
                    elem: 'blue',
                    mods: {drawer: ['1', '2', '3', '4']}
                },
                {
                    elem: 'red',
                    mods: {drawer: ['1', '2', '3', '4']}
                },
                {
                    elem: 'yellow',
                    mods: {drawer: ['1', '2', '3', '4']}
                }
            ]
        },
        {
            block: 'drawer',
            elems: ['header', 'presentation', 'footer']
        }
    ]
})