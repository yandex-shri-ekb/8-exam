({
    block: 'page',
    title: 'Александр Сердитов. ШРИ. Экзамен',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: '_index.css', ie: false},
        {elem: 'css', url: 'css/_anygrid.css', ie: false},
        {elem: 'js', url: '_index.js'}
    ],
    content: [
        {
            elem: 'wrap',
            content:
            {
                block: 'atom',
                content: [
                    {
                        elem: 'content',
                        content: [
                            {
                                elem: 'border',
                                content: [
                                    {block: 'header'},
                                    {block: 'users', mods: {'pos': 'top' }},
                                    {block: 'locomotive'},
                                    {
                                        block: 'stories',
                                        content: [
                                            {block: 'story_theme_yellow', mix: {block: 'story', mods: {'show': 'no'}}},
                                            {block: 'story_theme_red', mix: {block: 'story', mods: {'show': 'no'}}},
                                            {block: 'story_theme_blue', mix: {block: 'story', mods: {'show': 'no'}}}
                                        ]
                                   },
                                    {block: 'users', mods: {'show_text': 'no', 'pos': 'bottom'}},
                                    {block: 'footer'}
                                ]
                           }
                        ]
                    },
                    {
                        block: 'atom-ledge',
                        content: [
                            {elem: 'shadow'},
                            {
                                elem: 'content',
                                content: {elem: 'inner'}
                           }
                        ]
                    }
                ]
           }
       }
    ]
})