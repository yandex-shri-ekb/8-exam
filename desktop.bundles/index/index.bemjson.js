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
    content:[
        {
            block: 'story',
            content: [
                {
                    elem: 'holder-wrap',
                    content: [
                        {
                            elem: 'holder',
                            content: [
                                {
                                    block: 'header',
                                    content: [
                                        {
                                            block: 'ya-logo'
                                        },
                                        {
                                            elem: 'hero',
                                            mix: { block: 'grid__module', mods: {span: 10, col: 2} },
                                            content: '- А что если интернет подстроится под меня?'
                                        }
                                    ]
                                },
                                {
                                    elem: 'main-info',
                                    content: [
                                        {
                                            block: 'lead-text',
                                            mix: { block: 'grid__module', mods: {span: 6, col: 2} },
                                            content: 'Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под конкретного пользователя и готов поделиться этой технологией с другими. <br/><br/> «Атом». Технологическая платформа, задача которой — предоставить сайтам возможность изменять содержание страниц под конкретного пользователя.'
                                        },
                                        {
                                            elem: 'video-holder',
                                            mix: { block: 'grid__module', mods: {span: 3, col: 9} },
                                            content: [
                                                {
                                                    elem: 'video-image'
                                                },
                                                {
                                                    elem: 'video-text',
                                                    content: 'Весь сайт в одном видео'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'users',
                                    content: [
                                        {
                                            block: 'user',
                                            mix: { block: 'grid__module', mods: {span: 4, col: 2} },
                                            type: 'yellow',
                                            name: 'Максим',
                                            text: 'Предпочитает путешествовать самостоятельно и налегке. Уверен, что только так можно проникнуться культурой страны.'
                                        },
                                        {
                                            block: 'user',
                                            mix: { block: 'grid__module', mods: {span: 4, col: 5} },
                                            type: 'red',
                                            name: 'Алексей',
                                            text: 'В отпуск ездит вместе с женой и дочкой. Считает, что отдыхать лучше всего в отелях на побережье..'
                                        },
                                        {
                                            block: 'user',
                                            mix: { block: 'grid__module', mods: {span: 4, col: 8} },
                                            type: 'blue',
                                            name: 'Григорий И. Дауге',
                                            text: 'Очень дорожит редкими отпусками и превыше всего ценит комфорт и качество обслуживания..'
                                        }
                                    ]
                                },
                                {
                                    elem: 'steps',
                                    content: [
                                        {
                                            block: 'step',
                                            content: [
                                                {
                                                    elem: 'row',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            elem: 'path-1',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 10 } }
                                                        },
                                                        {
                                                            elem: 'text',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 4 } },
                                                            content: 'Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br/>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                                        },
                                                        {
                                                            block: 'image-set',
                                                            mix: { block: 'grid__module', mods: {col: 7, span: 4 } },
                                                            content:
                                                            {
                                                                elem: 'map',
                                                                mods: { 'push_up': 'yes' }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'row',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            elem: 'path-2',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 9 } }
                                                        },
                                                        {
                                                            block: 'image-set',
                                                            mix: { block: 'grid__module', mods: {col: 1, span: 6 } },
                                                            content: {
                                                                elem: 'aviaticket',
                                                                mods: { 'push_up': 'yes', 'push_left': 'yes' }
                                                            }

                                                        },
                                                        {
                                                            block: 'image-set',
                                                            mix: { block: 'grid__module', mods: {col: 8, span: 3 } },
                                                            content: {
                                                                elem: 'compass',
                                                                mods: { 'push_up': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            block: 'image-set',
                                                            mix: { block: 'grid__module', mods: {col: 11, span: 3 } },
                                                            content: {
                                                                elem: 'book',
                                                                mods: { 'push_up': 'yes' }
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'step',
                                            content: [
                                                {
                                                    elem: 'row',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            elem: 'path-3',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 12 } }
                                                        },
                                                        {
                                                            block: 'image-set',
                                                            content: [
                                                                {
                                                                    elem: 'polaroid',
                                                                    mix: { block: 'grid__module', mods: {col: 1, span: 2 } },
                                                                    mods: { 'pos': 1 }
                                                                },
                                                                {
                                                                    elem: 'polaroid',
                                                                    mix: { block: 'grid__module', mods: {col: 4, span: 2 } },
                                                                    mods: { 'pos': 3 }
                                                                },
                                                                {
                                                                    elem: 'polaroid',
                                                                    mix: { block: 'grid__module', mods: {col: 3, span: 2 } },
                                                                    mods: { 'pos': 2 }
                                                                },
                                                                {
                                                                    elem: 'laptop',
                                                                    mix: { block: 'grid__module', mods: {col: 2, span: 5 } },
                                                                    mods: { 'push_down': 'yes' }
                                                                },
                                                                {
                                                                    elem: 'iphone',
                                                                    mix: { block: 'grid__module', mods: {col: 9, span: 3 } },
                                                                    mods: { 'push_down': 'yes' }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'text',
                                                            mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                                            content: 'Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br/>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'step',
                                            content: [
                                                {
                                                    elem: 'row',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            elem: 'text',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 4 } },
                                                            content: 'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима. <br><br> На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
                                                        },
                                                        {
                                                            block: 'image-set',
                                                            mix: { block: 'grid__module', mods: {col: 9, span: 4 } },
                                                            content: [
                                                                {
                                                                    elem: 'magazine',
                                                                    mods: { 'push_up' : 'yes', 'push_right' : 'yes' }
                                                                }
                                                            ]

                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'row',
                                                    mix: { block: 'grid_row' },
                                                    content: [
                                                        {
                                                            block: 'image-set',
                                                            content: [
                                                                {
                                                                    elem: 'ticket',
                                                                    mods: { 'push-right': 'yes' },
                                                                    mix: { block: 'grid__module', mods: {col: 5, span: 3 } }
                                                                },
                                                                {
                                                                    elem: 'aeroexpress',
                                                                    mods: { 'push-right': 'yes' },
                                                                    mix: { block: 'grid__module', mods: {col: 1, span: 10 } }
                                                                },
                                                                {
                                                                    elem: 'money'
                                                                },
                                                                {
                                                                    elem: 'traffic'
                                                                },
                                                                {
                                                                    elem: 'ipod'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'step-4',
                                            content: 'step-4'
                                        }
                                    ]
                                },
                                {
                                    block: 'footer',
                                    content: [
                                        {
                                            elem: 'about',
                                            mix: { block: 'g-12' },
                                            content: [
                                                {
                                                    elem: 'copyright',
                                                    mix: { block: 'g-col-2 g-span-3' },
                                                    content: '@ 2013 ООО "Яндекс"'
                                                },
                                                {
                                                    elem: 'links',
                                                    mix: { block: 'g-col-5 g-span-4' },
                                                    content: [
                                                        {
                                                            elem: 'link',
                                                            mix: { block: 'link' },
                                                            url: '#',
                                                            content: 'Помощь'
                                                        },
                                                        {
                                                            elem: 'link',
                                                            mix: { block: 'link' },
                                                            url: '#',
                                                            content: 'Обратная связь'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'ledge',
            content: [

            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
