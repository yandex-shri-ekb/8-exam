({
    mustDeps: [
        {
            block: 'personal',
            type: 'story',
            elems: [
                {
                    elem: 'blue',
                    mods: {story: ['1', '2', '3', '4']}
                },
                {
                    elem: 'red',
                    mods: {story: ['1', '2', '3', '4']}
                },
                {
                    elem: 'yellow',
                    mods: {story: ['1', '2', '3', '4']}
                }
            ]
        },
        {
            block: 'container',
            elems: ['header', 'footer', 'info']
        },
        {
            block: 'grid',
            elems: ['content'],
            mods: {
                'common': '*',
                'yellow': '*',
                'red': '*',
                'blue': '*'
            }
        },
        {
            block: 'personal',
            mods: {
                type: 'story'
            }
        },
        {
            block: 'pers-switch',
            mods: {
                position: ['bottom', 'top']
            }
        }
    ]
})
