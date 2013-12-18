({
    block: 'page',
    mods: { color: 'yellow' },
    title: 'Экзаменационная работа — Яндекс ШРИ в Екатеринбурге 2013 — Антон Жевак',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'popup',
            content: {
                elem: 'iframe',
                attrs: {
                    src: '//player.vimeo.com/video/75709551?title=0&amp;byline=0&amp;portrait=0&amp;color=ffcc00&amp;autoplay=1',
                    width: 500,
                    height: 281,
                    frameborder: 0,
                    webkitallowfullscreen: 'true',
                    mozallowfullscreen: 'true',
                    allowfullscreen: 'true'
                }
            },
            attrs: { id: 'video' },
            js: true
        },
        {
            block: 'aside-button',
            mods: { icon: 'close' },
            js: true
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'history',
                    content: [
                        {
                            elem: 'cell',
                            mods: { type: 'header' },
                            attrs: { id: 'header' },
                            content: [
                                { block: 'header' },
                                { block: 'video' },
                                { block: 'persons' }
                            ]
                        },
                        {
                            elem: 'cell',
                            mods: { type: 'history' },
                            content:[
                                {
                                    block: 'steps',
                                    mods: { color: 'yellow' },
                                    content: [
                                        {
                                            elem: 'item',
                                            mods: { num: 'one' },
                                            attrs: { id: 'yellow-1' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'left' },
                                                    content: 'Максим хочет увидеть настоящий, нетуристический Таиланд.<br><br>Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                                },
                                                { block: 'thing', mods: { type: 'yellow-map' } },
                                                { block: 'thing', mods: { type: 'yellow-ticket' } },
                                                { block: 'thing', mods: { type: 'yellow-compas' } },
                                                { block: 'thing', mods: { type: 'yellow-guide' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'two' },
                                            attrs: { id: 'yellow-2' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'right' },
                                                    content: 'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь.<br><br>Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
                                                },
                                                { block: 'thing', mods: { type: 'yellow-phone' } },
                                                { block: 'thing', mods: { type: 'yellow-photo' } },
                                                { block: 'thing', mods: { type: 'yellow-photos' } },
                                                { block: 'thing', mods: { type: 'yellow-notebook' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'three' },
                                            attrs: { id: 'yellow-3' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'left' },
                                                    content: 'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима.<br><br>На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
                                                },
                                                { block: 'thing', mods: { type: 'yellow-vogue' } },
                                                { block: 'thing', mods: { type: 'yellow-yet-ticket' } },
                                                { block: 'thing', mods: { type: 'yellow-money' } },
                                                { block: 'thing', mods: { type: 'yellow-ipod' } },
                                                { block: 'thing', mods: { type: 'yellow-traffic' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'four' },
                                            attrs: { id: 'yellow-4' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'right' },
                                                    content: 'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране.<br><br>Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
                                                },
                                                { block: 'thing', mods: { type: 'yellow-backpack' } },
                                                { block: 'thing', mods: { type: 'yellow-phuket' } },
                                                { block: 'thing', mods: { type: 'yellow-notepad' } },
                                                { block: 'thing', mods: { type: 'yellow-bottle' } },
                                                { block: 'thing', mods: { type: 'yellow-camera' } },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    block: 'steps',
                                    mods: { color: 'red' },
                                    content: [
                                        {
                                            elem: 'item',
                                            mods: { num: 'one' },
                                            attrs: { id: 'red-1' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'left' },
                                                    content: 'Устав от турецких пляжей, Алексей Быков решил вывезти семью в Таиланд.<br><br>Он выбирает тур так, чтобы уложиться в адекватную сумму, но порадовать всех: приемлемый уровень комфорта, детская анимация, недалеко от пляжа, «все включено».'
                                                },
                                                { block: 'thing', mods: { type: 'red-photo' } },
                                                { block: 'thing', mods: { type: 'red-papers' } },
                                                { block: 'thing', mods: { type: 'red-passport' } },
                                                { block: 'thing', mods: { type: 'red-book' } },
                                                { block: 'thing', mods: { type: 'red-bear' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'two' },
                                            attrs: { id: 'red-2' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'right' },
                                                    content: 'Алексей твердо уверен, что линзы практичнее обычных очков — как минимум потому, что вместе с ними можно надеть другие очки: для плавания или солнечные.<br><br>Он привык к тому, что у него всегда есть запас одноразовых линз.'
                                                },
                                                { block: 'thing', mods: { type: 'red-phone' } },
                                                { block: 'thing', mods: { type: 'red-check' } },
                                                { block: 'thing', mods: { type: 'red-lenses' } },
                                                { block: 'thing', mods: { type: 'red-tamagotchi' } },
                                                { block: 'thing', mods: { type: 'red-glasses' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'three' },
                                            attrs: { id: 'red-3' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'left' },
                                                    content: 'У семьи Быковых с собой очень много багажа, большую часть которого занимают платья жены и детские вещи.<br><br>Ехать с сумками на общественном транспорте им совсем не хочется, тем более, когда есть вместительный автомобиль. Алексей решает переплатить за парковку у аэропорта, зато добраться с удобством.'
                                                },
                                                { block: 'thing', mods: { type: 'red-driver-cert' } },
                                                { block: 'thing', mods: { type: 'red-car-keys' } },
                                                { block: 'thing', mods: { type: 'red-monitor' } },
                                                { block: 'thing', mods: { type: 'red-bags' } },
                                                { block: 'thing', mods: { type: 'red-mug' } },
                                                { block: 'thing', mods: { type: 'red-keyboard' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'four' },
                                            attrs: { id: 'red-4' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'right' },
                                                    content: 'Для Алексея один из основных мотивов выбора Таиланда — гастрономический: и он, и жена любят экзотическую кухню.<br><br>Каждый день они вместе отправляются на поиски новых ресторанов.'
                                                },
                                                { block: 'thing', mods: { type: 'red-fish' } },
                                                { block: 'thing', mods: { type: 'red-cocktail' } },
                                                { block: 'thing', mods: { type: 'red-breakfast' } },
                                                { block: 'thing', mods: { type: 'red-glass-one' } },
                                                { block: 'thing', mods: { type: 'red-glass-two' } },
                                                { block: 'thing', mods: { type: 'red-bottle' } },
                                                { block: 'thing', mods: { type: 'red-grapes' } },
                                                { block: 'thing', mods: { type: 'red-glass' } },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    block: 'steps',
                                    mods: { color: 'blue' },
                                    content: [
                                        {
                                            elem: 'item',
                                            mods: { num: 'one' },
                                            attrs: { id: 'blue-1' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'left' },
                                                    content: 'Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи.<br><br>Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель.'
                                                },
                                                { block: 'thing', mods: { type: 'blue-phone' } },
                                                { block: 'thing', mods: { type: 'blue-pen' } },
                                                { block: 'thing', mods: { type: 'blue-ticket' } },
                                                { block: 'thing', mods: { type: 'blue-frame' } },
                                                { block: 'thing', mods: { type: 'blue-notepad' } },
                                                { block: 'thing', mods: { type: 'blue-watch' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'two' },
                                            attrs: { id: 'blue-2' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'right' },
                                                    content: 'Даже отдых должен приносить в жизнь что-нибудь новое — таков жизненный принцип Григория Иогановича.<br><br>В этой поездке он планирует научиться дайвингу: посмотреть на коралловые рифы и причудливых морских животных.'
                                                },
                                                { block: 'thing', mods: { type: 'blue-papers' } },
                                                { block: 'thing', mods: { type: 'blue-notebook' } },
                                                { block: 'thing', mods: { type: 'blue-tablet' } },
                                                { block: 'thing', mods: { type: 'blue-diving-mask' } },
                                                { block: 'thing', mods: { type: 'blue-mug' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'three' },
                                            attrs: { id: 'blue-3' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'left' },
                                                    content: 'Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск.<br><br>Добираться до аэропорта он будет на такси.'
                                                },
                                                { block: 'thing', mods: { type: 'blue-lifebuoy' } },
                                                { block: 'thing', mods: { type: 'blue-cell-phone' } },
                                                { block: 'thing', mods: { type: 'blue-cards' } },
                                                { block: 'thing', mods: { type: 'blue-cash' } },
                                                { block: 'thing', mods: { type: 'blue-tie' } },
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            mods: { num: 'four' },
                                            attrs: { id: 'blue-4' },
                                            content: [
                                                {
                                                    elem: 'text',
                                                    mods: { pull: 'right' },
                                                    content: 'В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе.<br><br>Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги.'
                                                },
                                                { block: 'thing', mods: { type: 'blue-briefcase' } },
                                                { block: 'thing', mods: { type: 'blue-newspaper' } },
                                                { block: 'thing', mods: { type: 'blue-big-book' } },
                                                { block: 'thing', mods: { type: 'blue-small-book' } },
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'cell',
                            mods: { type: 'footer', },
                            attrs: { id: 'footer' },
                            content: [
                                { block: 'persons' },
                                {
                                    block: 'footer',
                                    content: 'Мир один, а люди разные. Так и интернет — он один, но для каждого разный.<br><br>Теперь посмотрите, как планировали путешествие в Таиланд другие герои.',
                                },
                            ],
                        },
                    ],
                },
                {
                    elem: 'aside',
                    content: [
                        { elem: 'shadow' },
                        {
                            elem: 'cell',
                            mods: { type: 'aside', border: 'bottom' },
                            attrs: { 'data-height': 'header' },
                            content: [
                                {
                                    block: 'aside-items',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: '«Атом»: сценарии применения',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: '«Атом» — это платформа, которая позволит сайтам в интернете адаптироваться под каждого конкретного пользователя. Показывать ему только интересную информацию, помогать быстрее решать задачи.'
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Этого можно достигнуть за счёт индивидуальных изменений, не всегда заметных самому пользователю, но делающих страницу более интересной, более удобной для него.'
                                                    },
                                                    { elem: 'circles' }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mods: { border: 'none' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Презентация платформы «Атом» на конференции YaС 2013',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Yet another Conference (YaС) — технологическая конференция Яндекса, которая ежегодно проходит в Москве, начиная с 2010 года.'
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'cell',
                            mods: { type: 'aside' },
                            content: [
                                {
                                    block: 'aside-items',
                                    mods: { color: 'yellow' },
                                    content: [
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'yellow-1' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Покупка авиабилетов',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сайт с подходящими ему вариантами.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/yellow/right.1.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'yellow-2' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Рекомендации по покупке подходящих товаров',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Предложения на главной странице выбраны на основе информации о предпочтениях Максима, полученных сайтом от «Атома».',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/yellow/right.2.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'yellow-3' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Предложение купить билет на аэроэкспресс',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэропорта и рекомендует время отправления.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/yellow/right.3.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'yellow-4' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Выбор интересных мест для посещения',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/yellow/right.4.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    block: 'aside-items',
                                    mods: { color: 'red' },
                                    content: [
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'red-1' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Покупка тура',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'В острове Алексей Быков сразу указывает параметры для поиска тура. Из результатов убраны слишком дорогие и престижные для Алексея отели. В списке вариантов — туры, идеально подходящие для семейного отдыха с детьми.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/red/right.1.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'red-2' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Напоминание от интернет-магазина',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. Сайт, на котором он обычно их приобретает, отправляет ему напоминание о повторной покупке с кнопкой перехода на предзаполненную форму заказа в один клик.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/red/right.2.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'red-3' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Рекомендация по времени выезда с учётом пробок на дорогах',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробок.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/red/right.3.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'red-4' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Рекомендации по выбору ресторана',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'При поиске ресторанов для посещения, сайт рекомендует Алексею места на основе информации о его предпочтениях и вкусах.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/red/right.4.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    block: 'aside-items',
                                    mods: { color: 'blue' },
                                    content: [
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'blue-1' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Рекомендации по подбору отеля',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Список отелей, показанных на главной странице сайта бронирования, основан на полученных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка понравятся Григорию Иогановичу.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/blue/right.1.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'blue-2' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Рекомендации по покупке подходящих товаров',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/blue/right.2.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'blue-3' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Напоминание о заказе такси',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/blue/right.3.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { 'data-height': 'yellow-4' },
                                            content: {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        elem: 'subtitle',
                                                        content: 'Рекомендации по оздоровительным процедурам',
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: 'На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются подходящие ему варианты, учитывающие его предпочтения.',
                                                    },
                                                    {
                                                        elem: 'screen',
                                                        img: '/desktop.blocks/aside-items/_color/blue/right.4.jpg',
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            elem: 'cell',
                            mods: { type: 'aside' },
                            attrs: { 'data-height' : 'footer' },
                            content: {
                                block: 'aside-items',
                                content: {
                                    elem: 'inner',
                                    content: [
                                        {
                                            elem: 'subtitle',
                                            content: 'Закрытое тестирование «Атома»',
                                        },
                                        {
                                            elem: 'text',
                                            content: 'Замысел такого масштаба невозможно воплотить в одиночку, поэтому мы уже начали проводить эксперименты с первыми партнёрами. Каким будет результат этой работы, во многом зависит от них и от других вебмастеров. У нас есть идея и технологии для её реализации, но мы не хотим двигаться дальше без ваших мыслей, мнения, опыта и осознания ваших потребностей. Всё это необходимо нам для того, чтобы превратить идею в полноценный продукт, полезный в реальных ситуациях.'
                                        },
                                        {
                                            elem: 'text',
                                            content: 'Если вы хотите принять участие в развитии «Атома», то вам необходимо выполнить следующие шаги:'
                                        },
                                        {
                                            elem: 'list-items',
                                            content: [
                                                {
                                                    elem: 'list-item',
                                                    content: 'выбрать ключевые рубрики вашего сайта;',
                                                },
                                                {
                                                    elem: 'list-item',
                                                    content: 'установить на ваш сайт Яндекс.Метрику;',
                                                },
                                                {
                                                    elem: 'list-item',
                                                    content: 'разметить страницы каждой выбранной рубрики разными целями в Метрике.',
                                                },
                                            ],
                                        },
                                        {
                                            elem: 'text',
                                            content: 'Присылайте письмо, в котором указаны идентификаторы целей и чётко описаны те задачи, которые вы бы хотели решить с помощью «Атома».'
                                        },
                                        {
                                            elem: 'text',
                                            content: 'Авторы самых интересных писем и предложений станут участниками эксперимента. Все новости и примеры мы будет публиковать в корпоративном блоге и на Хабрахабре.'
                                        },
                                        {
                                            elem: 'text',
                                            content: 'Свяжитесь с нами через форму обратной связи или пишите на <a href="mailto:atom-experiments@yandex-team.ru">atom-experiments@yandex-team.ru</a>.'
                                        },
                                    ],
                                },
                            },
                        },
                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
