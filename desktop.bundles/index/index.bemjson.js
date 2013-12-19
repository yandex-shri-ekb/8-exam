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
                                                    elem: 'path-1',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 10 } }
                                                },
                                                {
                                                    elem: 'path-2',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 9 } }
                                                },
                                                {
                                                    elem: 'text',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 4 } },
                                                    content: 'Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br/>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                                },
                                                {
                                                    block: 'image-set',
                                                    content: [
                                                        {
                                                            elem: 'map-holder',
                                                            mix: { block: 'grid__module', mods: {col: 7, span: 4 } },
                                                            content: {
                                                                elem: 'map',
                                                                mods: { 'push_up': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'aviaticket-holder',
                                                            mix: { block: 'grid__module', mods: {col: 1, span: 6 } },
                                                            content: {
                                                                elem: 'aviaticket',
                                                                mods: { 'push_up': 'yes', 'push_left': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'compass-holder',
                                                            content: {
                                                                elem: 'compass',
                                                                mix: { block: 'grid__module', mods: {col: 8, span: 3 } },
                                                                mods: { 'push_up': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'book-holder',
                                                            content: {
                                                                elem: 'book',
                                                                mix: { block: 'grid__module', mods: {col: 11, span: 3 } },
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
                                                    elem: 'path-3',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 12 } }
                                                },
                                                {
                                                    block: 'image-set',
                                                    content: [
                                                        {
                                                            elem: 'polaroid-holder',
                                                            mix: { block: 'grid__module', mods: {col: 1, span: 2 } },
                                                            content: {
                                                                elem: 'polaroid',
                                                                mods: { 'pos': 1 }
                                                            }
                                                        },
                                                        {
                                                            elem: 'polaroid-holder',
                                                            mix: { block: 'grid__module', mods: {col: 4, span: 2 } },
                                                            content: {
                                                                elem: 'polaroid',
                                                                mods: { 'pos': 3 }
                                                            }
                                                        },
                                                        {
                                                            elem: 'polaroid-holder',
                                                            mix: { block: 'grid__module', mods: {col: 3, span: 2 } },
                                                            content: {
                                                                elem: 'polaroid',
                                                                mods: { 'pos': 2 }
                                                            }
                                                        },
                                                        {
                                                            elem: 'laptop-holder',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 5 } },
                                                            content: {
                                                                elem: 'laptop',
                                                                mods: { 'push_down': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'iphone-holder',
                                                            mix: { block: 'grid__module', mods: {col: 9, span: 3 } },
                                                            content: {
                                                                elem: 'iphone',
                                                                mods: { 'push_down': 'yes' }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'text',
                                                    mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                                    content: 'Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br/>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'step',
                                            content: [
                                                {
                                                    elem: 'path-4',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 9 } }
                                                },
                                                {
                                                    elem: 'text',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 4 } },
                                                    content: 'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима. <br><br> На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
                                                },
                                                {
                                                    block: 'image-set',
                                                    content: [
                                                        {
                                                            elem: 'magazine-holder',
                                                            mix: { block: 'grid__module', mods: {col: 9, span: 4 } },
                                                            content: {
                                                                elem: 'magazine',
                                                                mods: { 'push_up' : 'yes', 'push_right' : 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'ticket-holder',
                                                            mix: { block: 'grid__module', mods: {col: 5, span: 3 } },
                                                            content: {
                                                                elem: 'ticket',
                                                                mods: { 'push_down': 'yes', 'push_right': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'aeroexpress-holder',
                                                            mix: { block: 'grid__module', mods: {col: 1, span: 7 } },
                                                            content: {
                                                                elem: 'aeroexpress',
                                                                mods: { 'push_down': 'yes', 'push_left': 'yes' }
                                                            }
                                                        },
                                                        /*{
                                                            elem: 'money-holder',
                                                            mix: { block: 'grid__module', mods: {col: 6, span: 4 } },
                                                            content: {
                                                                elem: 'money'
                                                            }
                                                        },*/
                                                        {
                                                            elem: 'traffic-holder',
                                                            mix: { block: 'grid__module', mods: {col: 3, span: 2} },
                                                            content: {
                                                                elem: 'traffic',
                                                                mods: { 'push_down': 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'ipod-holder',
                                                            mix: { block: 'grid__module', mods: {col: 9, span: 4 } },
                                                            content: {
                                                                elem: 'ipod',
                                                                mods: { 'push_down': 'yes' }
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
                                                    elem: 'path-5',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 9 } }
                                                },
                                                {
                                                    elem: 'text',
                                                    mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                                    content: 'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране. <br><br> Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
                                                },
                                                {
                                                    block: 'image-set',
                                                    content: [
                                                        {
                                                            elem: 'backpack-holder',
                                                            mix: { block: 'grid__module', mods: {col: 2, span: 6 } },
                                                            content: {
                                                                elem: 'backpack',
                                                                mods: { 'push_down' : 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'notebook-holder',
                                                            mix: { block: 'grid__module', mods: {col: 3, span: 3 } },
                                                            content: {
                                                                elem: 'notebook',
                                                                mods: { 'push_down' : 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'bottle-holder',
                                                            mix: { block: 'grid__module', mods: {col: 6, span: 2 } },
                                                            content: {
                                                                elem: 'bottle',
                                                                mods: { 'push_down' : 'yes' }
                                                            }
                                                        },
                                                        {
                                                            elem: 'camera-holder',
                                                            mix: { block: 'grid__module', mods: {col: 8, span: 4 } },
                                                            content: {
                                                                elem: 'camera',
                                                                mods: { 'push_down' : 'yes' }
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'footer',
                                    content: [
                                        {
                                            elem: 'users',
                                            content: {
                                                content: [
                                                    {
                                                        block: 'user',
                                                        mix: { block: 'grid__module', mods: {col: 2, span: 4} },
                                                        type: 'yellow',
                                                        name: 'Максим'
                                                    },
                                                    {
                                                        block: 'user',
                                                        mix: { block: 'grid__module', mods: {col: 5, span: 4} },
                                                        type: 'red',
                                                        name: 'Алексей'
                                                    },
                                                    {
                                                        block: 'user',
                                                        mix: { block: 'grid__module', mods: {col: 8, span: 4} },
                                                        type: 'blue',
                                                        name: 'Григорий И. Дауге'
                                                    },
                                                    {
                                                        elem: 'text',
                                                        mix: { block: 'grid__module', mods: {col: 2, span: 6} },
                                                        content: 'Мир один, а люди разные. Так и интернет — он один, но для каждого разный. <br><br> Теперь посмотрите, как планировали путешествие в Таиланд другие герои.'
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'foot',
                                            content: [
                                                {
                                                    elem: 'copyright',
                                                    mix: { block: 'grid__module', mods: {col: 2, span: 3} },
                                                    content: '@ 2013 ООО "Яндекс"'
                                                },
                                                {
                                                    elem: 'links',
                                                    mix: { block: 'grid__module', mods: {col: 5, span: 4} },
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
