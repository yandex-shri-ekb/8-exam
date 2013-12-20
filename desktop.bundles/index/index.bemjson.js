({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'css', url: '_index.css', ie: false},
        {elem: 'css', url: 'css/_anygrid.css', ie: false},
        {elem: 'css', url: '_index.ie.css', ie: 'gte IE 6'},
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'js', url: './jquery-1.10.2.js'},
        {elem: 'js', url: './js/index.js'}
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
                                mods: {theme: 'blue'},
                                content: [
                                    {block: 'header'},
                                    {block: 'users', mods: { 'pos': 'top' }},
                                    {
                                        block: 'stories',
                                        content: [
                                            {
                                                elem: 'locomotive',
                                                content: [
                                                {
                                                    elem: 'icons',
                                                    content: [
                                                        {
                                                            block: 'step-icon',
                                                            mods: {
                                                                'theme': 'yellow',
                                                                'active': 'no'
                                                            }
                                                        },
                                                        {
                                                            block: 'step-icon',
                                                            mods: {
                                                                'theme': 'red',
                                                                'active': 'no'
                                                            }
                                                        },
                                                        {
                                                            block: 'step-icon',
                                                            mods: {
                                                                'theme': 'blue',
                                                                'active': 'no'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'user-icon',
                                                    mods: {'size': 'large', 'theme': 'yellow', 'push_down': 'yes'}
                                                }
                                            ]},
                                            {block: 'story-theme-yellow', mix: {block: 'story'}},
                                            {block: 'story-theme-blue', mix: {block: 'story'}}
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
        // // TODO затирает jQuery в глобальной области видимости
        //{elem: 'js', url: '_index.js'}
    ]
})