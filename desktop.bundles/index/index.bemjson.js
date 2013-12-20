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
                                mods: {theme: 'blue'},
                                content: [
                                    {block: 'header'},
                                    {block: 'users'},
                                    {
                                        block: 'stories',
                                        content: [
                                            {block: 'story-theme-yellow', mix: {block: 'story'}},
                                            {block: 'story-theme-blue', mix: {block: 'story'}}
                                        ]
                                   },
                                    {block: 'users', mods: {'show_text': 'no'}},
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

        /*{
            block: 'i-jquery',
            elem: 'core'
       },
        {elem: 'js', url: 'js/index.js'}*/


    ]
})