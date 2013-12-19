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
                    mods: { color: 'yellow' },
                    content: [
                        {
                            block: 'atom-begin'
                        },
                        {
                            block: 'steps',
                            mods: { color: 'yellow' },
                            content: [
                                {
                                    block: 'path',
                                    mods: { theme: 'yellow', type: 1 },
                                    mix: { block: 'grid__module', mods: {col: 2, span: 10 } }
                                },
                                {
                                    block: 'path',
                                    mods: { theme: 'yellow', type: 2 },
                                    mix: { block: 'grid__module', mods: {col: 2, span: 9 } }
                                },
                                {
                                    block: 'step',
                                    content: [
                                        {
                                            elem: 'text',
                                            mix: { block: 'grid__module', mods: {col: 2, span: 4 } },
                                            content: 'Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br/>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 7, span: 4 } },
                                            content: { elem: 'map', mods: { 'push_up': 'yes' } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 1, span: 6 } },
                                            content: { elem: 'aviaticket', mods: { 'push_down': 'yes', 'push_left': 'yes' } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 8, span: 3 } },
                                            content: { elem: 'compass', mods: { 'push_up': 'yes' } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 11, span: 3 } },
                                            content: { elem: 'book', mods: { 'push_up': 'yes' } }
                                        }
                                    ]
                                },
                                {
                                    block: 'step',
                                    content: [
                                        {
                                            elem: 'text',
                                            mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                            content: 'Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br/>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 1, span: 2 } },
                                            content: { elem: 'polaroid', mods: { pos: 1 } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 4, span: 2 } },
                                            content: { elem: 'polaroid', mods: { pos: 3 } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 3, span: 2 } },
                                            content: { elem: 'polaroid', mods: { pos: 2 } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 2, span: 5 } },
                                            content: { elem: 'laptop', mods: { 'push_down': 'yes' } }
                                        },
                                        {
                                            block: 'image_theme_yellow',
                                            mix: { block: 'grid__module', mods: { col: 9, span: 3 } },
                                            content: { elem: 'iphone', mods: { 'push_down': 'yes' } }
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
        },
        { elem: 'ledge' },
        { elem: 'js', url: '_index.js' }
    ]
})