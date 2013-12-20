({
    block: 'page',
    title: 'Яндекс.Атом',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'charset', content: 'utf-8' }}
    ],
    content:[
		{
			block: 'button',
			mods: { type: 'details' }
		},
		{
			block: 'video',
			src: '//player.vimeo.com/video/75709551?api=1',
			width: 720,
			height: 405
		},
        {
            block: 'story',
            js: true,
            content: [
                {
                    block: 'person-center',
                    js: true
                },
                { 
                    block: 'head-img',
                    content: 
                    {
                        elem: 'text',
                        content: '— А что если интернет подстроится под вас?'
                    }
                },
                {
                    block: 'general-info',
                    content: [
                        {
                            elem: 'text',
                            content: [
                                {
                                    block: 'p',
                                    content: 'Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под конкретного пользователя и готов поделиться этой технологией с другими.'
                                },
                                {
                                    block: 'p',
                                    content: '«Атом». Технологическая платформа, задача которой - предоставить сайтам возможность изменять содержание страниц под конкретного пользователя.'
                                }
                            ]
                        },
                        {
                            elem: 'video',
                            content: [
                                {
                                    block: 'videoLink',
                                    js: true,
                                },
                                {
                                    content: 'Весь сайт в одном видео'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'persons',
                    content: 
                    {
                        block: 'center',
                        content :[
                            {
                                block: 'pers',
                                mods: { color: 'yellow' },
                                content: 'Максим'
                            },
                            {
                                block: 'pers',
                                mods: { color: 'red' },
                                content: 'Алексей Быков'
                            },
                            {
                                block: 'pers',
                                mods: { color: 'blue' },
                                content: 'Георгрий И. Дауге'
                            }
                        ]
                    }
                },
                {
                    block: 'area',
                    mods: { pers: 'yellow' },
                    content: [
                        {
                            block: 'part',
                            mods: { number: 1 },
                            content: [
                                {
                                    block: 'text1',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Максим хочет увидеть настоящий, нетуристический Таиланд.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'yellow-way1',
                                            url: '../../img/yellow/way1.png'
                                        },
                                        {
                                            class: 'yellow-way2',
                                            url: '../../img/yellow/way2.png'
                                        },
                                        {
                                            class: 'yellow-map',
                                            url: '../../img/yellow/map.png'
                                        },
                                        {
                                            class: 'yellow-ticket',
                                            url: '../../img/yellow/ticket.png'
                                        },
                                        {
                                            class: 'yellow-compas',
                                            url: '../../img/yellow/compas.png'
                                        },
                                        {
                                            class: 'yellow-book',
                                            url: '../../img/yellow/book.png'
                                        }
                                    ]
                                }   
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 2 },
                            content: [
                                {
                                    block: 'text2',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'yellow-way3',
                                            url: '../../img/yellow/way3.png'
                                        },
                                        {
                                            class: 'yellow-photo',
                                            url: '../../img/yellow/photo.png'
                                        },
                                        {
                                            class: 'yellow-computer',
                                            url: '../../img/yellow/computer.png'
                                        },
                                        {
                                            class: 'yellow-iphone',
                                            url: '../../img/yellow/iphone.png'
                                        }
                                    ]
                                }   
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 3 },
                            content: [
                                {
                                    block: 'text1',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'yellow-way4',
                                            url: '../../img/yellow/way4.png'
                                        },
                                        {
                                            class: 'yellow-magazine',
                                            url: '../../img/yellow/magazine.png'
                                        },
                                        {
                                            class: 'yellow-trivial',
                                            url: '../../img/yellow/trivial.png'
                                        },
                                        {
                                            class: 'yellow-ipod',
                                            url: '../../img/yellow/ipod.png'
                                        }
                                    ]
                                } 
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 4 },
                            content: [
                                {
                                    block: 'text2',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'yellow-way5',
                                            url: '../../img/yellow/way5.png'
                                        },
                                        {
                                            class: 'yellow-bag',
                                            url: '../../img/yellow/bag.png'
                                        },
                                        {
                                            class: 'yellow-phuket',
                                            url: '../../img/yellow/phuket.png'
                                        },
                                        {
                                            class: 'yellow-other',
                                            url: '../../img/yellow/other.png'
                                        }
                                    ]
                                } 
                            ]
                        }
                    ]
                },
                {
                    block: 'area',
                    mods: { pers: 'red' },
                    content: [
                        {
                            block: 'part',
                            mods: { number: 1 },
                            content: [
                                {
                                    block: 'text1',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Устав от турецких пляжей, Алексей Быков решил вывезти семью в Таиланд.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Он выбирает тур так, чтобы уложиться в адекватную сумму, но порадовать всех: приемлемый уровень комфорта, детская анимация, недалеко от пляжа, «все включено».'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'red-way1',
                                            url: '../../img/red/way1.png'
                                        },
                                        {
                                            class: 'red-way2',
                                            url: '../../img/red/way2.png'
                                        },
                                        {
                                            class: 'red-photo',
                                            url: '../../img/red/photo.png'
                                        },
                                        {
                                            class: 'red-ticket',
                                            url: '../../img/red/ticket.png'
                                        }
                                    ]
                                }
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 2 },
                            content: [
                                {
                                    block: 'text2',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Алексей твердо уверен, что линзы практичнее обычных очков — как минимум потому, что вместе с ними можно надеть другие очки: для плавания или солнечные.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Он привык к тому, что у него всегда есть запас одноразовых линз'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'red-way3',
                                            url: '../../img/red/way3.png'
                                        },
                                        {
                                            class: 'red-bear',
                                            url: '../../img/red/bear.png'
                                        },
                                        {
                                            class: 'red-iphone',
                                            url: '../../img/red/iphone.png'
                                        },
                                        {
                                            class: 'red-lenses',
                                            url: '../../img/red/lenses.png'
                                        }
                                    ]
                                }
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 3 },
                            content: [
                                {
                                    block: 'text1',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'У семьи Быковых с собой очень много багажа, большую часть которого занимают платья жены и детские вещи'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Ехать с сумками на общественном транспорте им совсем не хочется, тем более, когда есть вместительный автомобиль. Алексей решает переплатить за парковку у аэропорта, зато добраться с удобством.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'red-way4',
                                            url: '../../img/red/way4.png'
                                        },
                                        {
                                            class: 'red-toy',
                                            url: '../../img/red/toy.png'
                                        },
                                        {
                                            class: 'red-glasses',
                                            url: '../../img/red/glasses.png'
                                        },
                                        {
                                            class: 'red-keys',
                                            url: '../../img/red/keys.png'
                                        },
                                        {
                                            class: 'red-monitor',
                                            url: '../../img/red/monitor.png'
                                        },
                                        {
                                            class: 'red-keyboard',
                                            url: '../../img/red/keyboard.png'
                                        },
                                        {
                                            class: 'red-cup',
                                            url: '../../img/red/cup.png'
                                        }
                                    ]
                                }
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 4 },
                            content: [
                                {
                                    block: 'text2',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Для Алексея один из основных мотивов выбора Таиланда — гастрономический: и он, и жена любят экзотическую кухню.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Каждый день они вместе отправляются на поиски новых ресторанов.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'red-way5',
                                            url: '../../img/red/way5.png'
                                        },
                                        {
                                            class: 'red-bag',
                                            url: '../../img/red/bag.png'
                                        },
                                        {
                                            class: 'red-food',
                                            url: '../../img/red/food.png'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'area',
                    mods: { pers: 'blue' },
                    content: [
                        {
                            block: 'part',
                            mods: { number: 1 },
                            content: [
                                {
                                    block: 'text1',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'blue-way1',
                                            url: '../../img/blue/way1.png'
                                        },
                                        {
                                            class: 'blue-way2',
                                            url: '../../img/blue/way2.png'
                                        },
                                        {
                                            class: 'blue-phone',
                                            url: '../../img/blue/phone.png'
                                        },
                                        {
                                            class: 'blue-ticket',
                                            url: '../../img/blue/ticket.png'
                                        }
                                    ]
                                } 
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 2 },
                            content: [
                                {
                                    block: 'text2',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Даже отдых должен привносить в жизнь что-нибудь новое - таков жизненный принцип Георгия Иогановича.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'В этой поездке он планирует научится дайвингу: посмотреть на коралловые рифы и причудливых морских животных.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'blue-way3',
                                            url: '../../img/blue/way3.png'
                                        },
                                        {
                                            class: 'blue-notebook',
                                            url: '../../img/blue/notebook.png'
                                        },
                                        {
                                            class: 'blue-ipad',
                                            url: '../../img/blue/ipad.png'
                                        },
                                        {
                                            class: 'blue-mask',
                                            url: '../../img/blue/mask.png'
                                        }
                                    ]
                                } 
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 3 },
                            content: [
                                {
                                    block: 'text1',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Добираться до аэропорта он будет на такси.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'blue-way4',
                                            url: '../../img/blue/way4.png'
                                        },
                                        {
                                            class: 'blue-iphone',
                                            url: '../../img/blue/iphone.png'
                                        },
                                        {
                                            class: 'blue-krug',
                                            url: '../../img/blue/krug.png'
                                        },
                                        {
                                            class: 'blue-credit-cadr',
                                            url: '../../img/blue/credit-card.png'
                                        }
                                    ]
                                } 
                            ]
                        },
                         {
                            block: 'part',
                            mods: { number: 4 },
                            content: [
                                {
                                    block: 'text2',
                                    content: [
                                        {
                                            block: 'p',
                                            content: 'В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе.'
                                        },
                                        {
                                            block: 'p',
                                            content: 'Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги.'
                                        }
                                    ]
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'blue-way5',
                                            url: '../../img/blue/way5.png'
                                        },
                                        {
                                            class: 'blue-bag',
                                            url: '../../img/blue/bag.png'
                                        },
                                        {
                                            class: 'blue-yoga',
                                            url: '../../img/blue/yoga.png'
                                        }
                                    ]
                                } 
                            ]
                        }
                    ]
                },
                {
                    block: 'persons-bottom',
                    content: 
                    {
                        block: 'center',
                        content: [
                            {
                                block: 'pers',
                                mods: 
                                { 
                                    color: 'yellow',
                                    position: 'bottom' 
                                },
                                content: 'Максим'
                            },
                            {
                                block: 'pers',
                                mods: 
                                { 
                                    color: 'red',
                                    position: 'bottom'
                                },
                                content: 'Алексей Быков'
                            },
                            {
                                block: 'pers',
                                mods: 
                                { 
                                    color: 'blue',
                                    position: 'bottom'
                                },
                                content: 'Георгрий И. Дауге'
                            }
                        ]
                    }
                },
                {
                    block: 'general-info',
                    content: [
                        {
                            elem: 'text',
                            content: [
                                {
                                    block: 'p',
                                    content: 'Интернет сегодня — это не только информация и технологии, это люди: их желания, предпочтения, задачи. Люди — вот атомы, из которых на самом деле состоит цифровая материя; и эти люди очень, очень разные.'
                                },
                                {
                                    block: 'p',
                                    content: 'Теперь посмотрите, как планировали путешествие в Таиланд другие герои.'
                                },
                                {
                                    block: 'p',
                                    content: [
                                        {
                                            block: 'link',
                                            mix: { block: 'menu' },
                                            content: 'Помощь',
											url: 'http://help.yandex.ru/search/how-to-search/basic-features.xml',
                                            target: '_blank'
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'menu' },
                                            content: 'Обратная связь',
											url: 'http://feedback2.yandex.ru/atom/',
                                            target: '_blank'
                                        },
                                        {
                                            block: 'copyright',
                                            content: '2013 ООО "Яндекс"'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'icon'
                        }
                    ]
                }
            ]
        },
        {
            block: 'data',
            content: [
                {
                    block: 'user-script',
                    content: [
                        {
                            block: 'data-header',
                            content: '«Атом»: сценарии применения'
                        },
                        {
                            block: 'p',
                            content: '«Атом» — это платформа, которая позволит сайтам в интернете адаптироваться под каждого конкретного пользователя. Показывать ему только интересную информацию, помогать быстрее решать задачи.'
                        },
                        {
                            block: 'p',
                            content: 'Этого можно достигнуть за счёт индивидуальных изменений, не всегда заметных самому пользователю, но делающих страницу более интересной, более удобной для него.'
                        }
                    ]
                },
                {
                    block: 'presentation',
                    content: [
                        {
                            block: 'data-header',
                            content: 'Презентация платформы «Атом» на конференции YaС 2013'
                        },
                        {
                            block: 'p',
                            content: 'Yet another Conference (YaС) — технологическая конференция Яндекса, которая ежегодно проходит в Москве, начиная с 2010 года.'
                        },
                        {
                            block: 'right-video',
                            src: '//player.vimeo.com/video/75709551',
                            width: 720,
                            height: 405
                        }
                    ]
                },
                {
                    block: 'area',
                    mods: { pers: 'yellow' },
                    content: [
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Покупка авиабилетов'
                                },
                                {
                                    block: 'p',
                                    content: 'Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сайт с подходящими ему вариантами.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'image',
                                            url: '../../i/yellow/right.1.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Рекомендации по покупке подходящих товаров'
                                },
                                {
                                    block: 'p',
                                    content: 'Предложения на главной странице выбраны на основе информации о предпочтениях Максима, полученных сайтом от «Атома».'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: '',
                                            url: '../../i/yellow/right.2.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Предложение купить билет на аэроэкспресс'
                                },
                                {
                                    block: 'p',
                                    content: 'Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэропорта и рекомендует время отправления.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: '',
                                            url: '../../i/yellow/right.3.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                         {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Выбор интересных мест для посещения'
                                },
                                {
                                    block: 'p',
                                    content: 'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: '',
                                            url: '../../i/yellow/right.4.jpg'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'area',
                    mods: { pers: 'red' },
                    content: [
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Покупка тура'
                                },
                                {
                                    block: 'p',
                                    content: 'В острове Алексей Быков сразу указывает параметры для поиска тура.'
                                },
                                {
                                    block: 'p',
                                    content: 'Из результатов убраны слишком дорогие и престижные для Алексея отели. В списке вариантов — туры, идеально подходящие для семейного отдыха с детьми.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: '',
                                            url: '../../i/red/right.1.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Напоминание от интернет-магазина'
                                },
                                {
                                    block: 'p',
                                    content: 'Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. Сайт, на котором он обычно их приобретает, отправляет ему напоминание о повторной покупке с кнопкой перехода на предзаполненную форму заказа в один клик.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: '',
                                            url: '../../i/red/right.2.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Рекомендация по времени выезда с учётом пробок на дорогах'
                                },
                                {
                                    block: 'p',
                                    content: 'Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробок.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: '',
                                            url: '../../i/red/right.3.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                         {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Рекомендации по выбору ресторана'
                                },
                                {
                                    block: 'p',
                                    content: 'При поиске ресторанов для посещения, сайт рекомендует Алексею места на основе информации о его предпочтениях и вкусах.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'image',
                                            url: '../../i/red/right.4.jpg'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, 
                {
                    block: 'area',
                    mods: { pers: 'blue' },
                    content: [
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Рекомендации по подбору отеля'
                                },
                                {
                                    block: 'p',
                                    content: 'Список отелей, показанных на главной странице сайта бронирования, основан на полученных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка понравятся Григорию Иогановичу.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'image',
                                            url: '../../i/blue/right.1.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Рекомендации по покупке подходящих товаров'
                                },
                                {
                                    block: 'p',
                                    content: 'Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'image',
                                            url: '../../i/blue/right.2.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Напоминание о заказе такси'
                                },
                                {
                                    block: 'p',
                                    content: 'Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'image',
                                            url: '../../i/blue/right.3.jpg'
                                        }
                                    ]
                                }
                            ]
                        },
                         {
                            block: 'data-block',
                            content: [
                                {
                                    block: 'data-header',
                                    content: 'Рекомендации по оздоровительным процедурам'
                                },
                                {
                                    block: 'p',
                                    content: 'На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются подходящие ему варианты, учитывающие его предпочтения.'
                                },
                                {
                                    block: 'images',
                                    images: [
                                        {
                                            class: 'image',
                                            url: '../../i/blue/right.4.jpg'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'data-footer',
                    content: [
                        {
                            block: 'data-header',
                            content: 'Закрытое тестирование «Атома»'
                        },
                        {
                            block: 'p',
                            content: 'Замысел такого масштаба невозможно воплотить в одиночку, поэтому мы уже начали проводить эксперименты с первыми партнёрами. Каким будет результат этой работы, во многом зависит от них и от других вебмастеров. У нас есть идея и технологии для её реализации, но мы не хотим двигаться дальше без ваших мыслей, мнения, опыта и осознания ваших потребностей. Всё это необходимо нам для того, чтобы превратить идею в полноценный продукт, полезный в реальных ситуациях.'
                        },
                        {
                            block: 'p',
                            content: 'Если вы хотите принять участие в развитии «Атома», то вам необходимо выполнить следующие шаги:'
                        },
                        {
                            block: 'ul',
                            content: [
                                {
                                    elem: 'li',
                                    content: 'выбрать ключевые рубрики вашего сайта;'
                                },
                                {
                                    elem: 'li',
                                    content: 'установить на ваш сайт Яндекс.Метрику;'
                                },
                                {
                                    elem: 'li',
                                    content: [
                                        {
                                            elem: 'span',
                                            content: 'разметить страницы каждой выбранной рубрики разными '
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'link-right' },
                                            content: 'целями в Метрике',
                                            url: 'http://help.yandex.ru/metrika/general/goals.xml',
                                            target: '_blank'
                                        }
                                    ]
                                }
                            ]            
                        },
                        {
                            block: 'p',
                            content: 'Присылайте письмо, в котором указаны идентификаторы целей и чётко описаны те задачи, которые вы бы хотели решить с помощью «Атома».'
                        },
                        {
                            block: 'p',
                            content: 'Авторы самых интересных писем и предложений станут участниками эксперимента. Все новости и примеры мы будет публиковать в корпоративном блоге и на Хабрахабре.'
                        },
                        {
                            block: 'p',
                            content: [
                                {
                                    elem: 'span',
                                    content: 'Свяжитесь с нами через '
                                },
                                {
                                    block: 'link',
                                    mix: { block: 'link-right' },
                                    content: 'форму обратной связи',
                                    url: 'http://feedback2.yandex.ru/atom/',
                                    target: '_blank'
                                },
                                {
                                    elem: 'span',
                                    content: ' или пишите на '
                                },
                                {
                                    block: 'link',
                                    mix: { block: 'link-right' },
                                    content: 'atom-experiments@yandex-team.ru',
                                    url: 'mailto:atom-experiments@yandex-team.ru',
                                }
                            ]
                        },
                        {
                            block: 'p',
                            content: [
                                {
                                    elem: 'span',
                                    content: 'Читайте про «Атом» '
                                },
                                {
                                    block: 'link',
                                    mix: { block: 'link-right' },
                                    content: 'в нашем корпоративном блоге',
                                    url: 'http://blog.yandex.ru/post/71712/',
                                    target: '_blank'
                                },
                                {
                                    elem: 'span',
                                    content: ' и на '
                                },
                                {
                                    block: 'link',
                                    mix: { block: 'link-right' },
                                    content: 'Хабрахабре',
                                    url: 'http://habrahabr.ru/company/yandex/blog/195982/',
                                    target: '_blank'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' },
        { elem: 'js', url: 'jquery.js' }
    ]
})
