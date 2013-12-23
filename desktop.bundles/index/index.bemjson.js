({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'css', url: '_index.css', ie: false},
        {elem: 'css', url: 'css/_anygrid.css', ie: false},
        {elem: 'css', url: '_index.ie.css', ie: 'gte IE 6'},
        {elem: 'meta', attrs: {name: 'description', content: ''}}
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
                                    {block: 'users', mods: { 'pos': 'top' }},
                                    {
                                        block: 'locomotive',
                                        content: [
                                            {
                                                elem: 'icons',
                                                content: [
                                                    {
                                                        elem: 'step-icon',
                                                        mix: {
                                                            block: 'step-icon',
                                                            mods: {
                                                                'theme': 'yellow',
                                                                'active': 'no'
                                                            }
                                                        }
                                                    },
                                                    {
                                                        elem: 'step-icon',
                                                        mix: {
                                                            block: 'step-icon',
                                                            mods: {
                                                                'theme': 'red',
                                                                'active': 'no'
                                                            }
                                                        }
                                                    },
                                                    {
                                                        elem: 'step-icon',
                                                        mix: {
                                                            block: 'step-icon',
                                                            mods: {
                                                                'theme': 'blue',
                                                                'active': 'no'
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'user-icon',
                                                mix: {
                                                    block: 'user-icon',
                                                    mods: {
                                                        'size': 'large',
                                                        'theme': 'yellow',
                                                        'push_down': 'yes',
                                                        'active': 'no'
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        block: 'stories',
                                        content: [
                                            {block: 'story_theme_yellow', mix: {block: 'story', js: true}},
                                            {block: 'story_theme_red', mix: {block: 'story', js: true}},
                                            {block: 'story_theme_blue', mix: {block: 'story', js: true}}
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
       },
       {elem: 'js', url: '_index.js'}
    ]
})