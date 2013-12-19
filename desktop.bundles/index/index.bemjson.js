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
                            {
                                block: 'theme-blue',
                                content: {
                                    elem: 'inner',
                                    content: [
                                        {
                                            block: 'atom-begin'
                                        },
                                        {
                                            block: 'steps',
                                            content: [
                                                {
                                                    block: 'step',
                                                    content: [
                                                        {
                                                            elem: 'text-holder',
                                                            mix: [
                                                                { block: 'grid_cols_12' }
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'path_theme_blue',
                                                                    mix: { block: 'grid__module', mods: {col: 2, span: 10 } },
                                                                    content: { elem: 'step-1' }
                                                                },
                                                                {
                                                                    elem: 'text-holder-inner',
                                                                    mix: [
                                                                        { block: 'grid_row' }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            mix: [
                                                                                { block: 'grid__module', mods: {col: 2, span: 4 } }
                                                                            ],
                                                                            content: 'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима. <br><br> </На>На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mods: { layer: 'middle' },
                                                                            mix: [
                                                                                { block: 'grid__module', mods: { col: 7, span: 5 } },
                                                                                { block: 'i-clearfix'}
                                                                            ],
                                                                            content: { elem: 'notepad', mods: {'push_down': 'yes' } }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'images',
                                                            mix: { block: 'grid_row' },
                                                            content: [
                                                                {
                                                                    block: 'path_theme_blue',
                                                                    mix: { block: 'grid__module', mods: {col: 3, span: 8 } },
                                                                    content: { elem: 'step-2' }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 1, span: 4 } },
                                                                    content: { elem: 'phone', mods: { 'push_down': 'yes', 'push_left': 'yes' } }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 5, span: 1 } },
                                                                    content: { elem: 'pen', mods: { 'push_down': 'yes' } }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 6, span: 6 } },
                                                                    content: { elem: 'ticket', mods: { 'push_down': 'yes' } }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 7, span: 2 } },
                                                                    content: { elem: 'watch', mods: { 'push_down': 'yes' } }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 11, span: 4 } },
                                                                    content: { elem: 'photo', mods: { 'push_down': 'yes' } }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'step',
                                                    content: [
                                                        {
                                                            elem: 'text-holder',
                                                            mix: [
                                                                { block: 'grid_cols_12' }
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'text-holder-inner',
                                                                    mix: [
                                                                        { block: 'grid_row' }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                                                            content: 'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь. <br><br> Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 1, span: 5 } },
                                                                            content: { elem: 'paper', mods: { 'push_down': 'yes', 'push_left': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 2, span: 5 } },
                                                                            content: { elem: 'notebook', mods: { 'push_down': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 2, span: 5 } },
                                                                            content: { elem: 'notebook2', mods: { 'push_up': 'yes', 'push_left': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 3, span: 4 } },
                                                                            content: { elem: 'ipad', mods: { 'push_down': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mods: { layer: 'middle' },
                                                                            mix: { block: 'grid__module', mods: { col: 5, span: 3 } },
                                                                            content: { elem: 'cup', mods: { 'push_down': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mods: { layer: 'middle' },
                                                                            mix: { block: 'grid__module', mods: { col: 10, span: 3 } },
                                                                            content: { elem: 'palka', mods: { 'push_down': 'yes' } }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'images',
                                                            mix: { block: 'grid_row' },
                                                            content: [
                                                                {
                                                                    block: 'path_theme_blue',
                                                                    mix: { block: 'grid__module', mods: {col: 2, span: 9 } },
                                                                    content: { elem: 'step-3' }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mods: { layer: 'middle' },
                                                                    mix: { block: 'grid__module', mods: { col: 8, span: 5 } },
                                                                    content: { elem: 'maska', mods: { 'push_down': 'yes' } }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'step',
                                                    content: [
                                                        {
                                                            elem: 'text-holder',
                                                            mix: [
                                                                { block: 'grid_cols_12' }
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'text-holder-inner',
                                                                    mix: [
                                                                        { block: 'grid_row' },
                                                                        { block: 'i-clearfix'}
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'grid__module', mods: {col: 2, span: 4 } },
                                                                            content: 'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь. <br><br> Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 6, span: 4 } },
                                                                            content: { elem: 'cards', mods: { 'push_down': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 11, span: 2 } },
                                                                            content: { elem: 'money', mods: { 'push_down': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 11, span: 5 } },
                                                                            content: { elem: 'krug', mods: { 'push_up': 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 7, span: 5 } },
                                                                            content: { elem: 'pie', mods: { 'push_down': 'yes' } }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'images',
                                                            mix: { block: 'grid_row' },
                                                            content: [
                                                                {
                                                                    block: 'path_theme_blue',
                                                                    mix: { block: 'grid__module', mods: {col: 2, span: 9 } },
                                                                    content: { elem: 'step-4' }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 3, span: 2 } },
                                                                    content: { elem: 'iphone', mods: { 'push_down': 'yes' } }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },

                                                {
                                                    block: 'step',
                                                    content: [
                                                        {
                                                            elem: 'text-holder',
                                                            mix: [
                                                                { block: 'grid_cols_12' }
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'text-holder-inner',
                                                                    mix: [
                                                                        { block: 'grid_row' }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'text',
                                                                            mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                                                            content: 'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране. <br><br> Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 1, span: 6 } },
                                                                            content: { elem: 'bag', mods: { 'push_up': 'yes', 'push_left' : 'yes' } }
                                                                        },
                                                                        {
                                                                            block: 'image_theme_blue',
                                                                            mix: { block: 'grid__module', mods: { col: 1, span: 6 } },
                                                                            content: { elem: 'newspaper', mods: { 'push_down' : 'yes' } }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'images',
                                                            mix: { block: 'grid_row' },
                                                            content: [
                                                                {
                                                                    block: 'path_theme_blue',
                                                                    mix: { block: 'grid__module', mods: {col: 4, span: 8 } },
                                                                    content: { elem: 'step-5' }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 7, span: 4 } },
                                                                    content: { elem: 'yoga', mods: { 'push_down' : 'yes' } }
                                                                },
                                                                {
                                                                    block: 'image_theme_blue',
                                                                    mix: { block: 'grid__module', mods: { col: 12, span: 3 } },
                                                                    content: { elem: 'book', mods: { 'push_down' : 'yes' } }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        { block: 'users' },
                                        {
                                            block: 'footer',
                                            content: [
                                                {
                                                    elem: 'info-holder',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            elem: 'info',
                                                            mix: { block: 'grid__module', mods: { col: 2, span: 6 } },
                                                            content: 'Мир один, а люди разные. Так и интернет — он один, но для каждого разный. <br><br>Теперь посмотрите, как планировали путешествие в Таиланд другие герои.'
                                                        },
                                                        {
                                                            elem: 'atom-logo',
                                                            mix: { block: 'grid__module', mods: { col: 8, span: 2 } }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'foot',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            elem: 'links',
                                                            mix: { block: 'grid__module', mods: { col: 2, span: 3 } },
                                                            content: [
                                                                {
                                                                    elem: 'link',
                                                                    mix: { block: 'link' } ,
                                                                    content: 'Помощь'
                                                                },
                                                                {
                                                                    elem: 'link',
                                                                    mix: { block: 'link' } ,
                                                                    content: 'Обратная связь'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'copyright',
                                                            mix: { block: 'grid__module', mods: { col: 4, span: 3 } }
                                                        }

                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
        },
        { elem: 'ledge' },
        { elem: 'js', url: '_index.js' }
    ]
})