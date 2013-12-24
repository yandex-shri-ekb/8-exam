({
    block: 'page',
    title: 'Александр Сердитов. ШРИ. Экзамен',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: '_index.css', ie: false},
        {block: 'anygrid'},
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
                                content: [
                                    {
                                        elem: 'help-icon',
                                        mix: {
                                            block: 'help-icon',
                                            mods: {'active': 'no', 'type': 'quest'}
                                        }
                                    },
                                    {
                                        block: 'section',
                                        tagTitle: 'h2',
                                        title: '«Атом»: сценарии применения',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: '«Атом» — это платформа, которая позволит сайтам в интернете адаптироваться под каждого конкретного пользователя. Показывать ему только интересную информацию, помогать быстрее решать задачи.'
                                            },
                                            {
                                                elem: 'item',
                                                content: 'Этого можно достигнуть за счёт индивидуальных изменений, не всегда заметных самому пользователю, но делающих страницу более интересной, более удобной для него.'
                                            },
                                            {block: 'atom-logo'}
                                        ]
                                    },
                                    {
                                        block: 'section',
                                        mix: {'block': 'flex-section'},
                                        title: 'Презентация платформы «Атом» на конференции YaС 2013',
                                        content: [
                                            {
                                                elem: 'item',
                                                content: 'Yet another Conference (YaС) — технологическая конференция Яндекса, которая ежегодно проходит в Москве, начиная с 2010 года.'
                                            },
                                            {
                                                block: 'dialog',
                                                content: {elem: 'content'}
                                            }
                                        ]
                                    },
                                    {
                                        block: 'list-info',
                                        content: [
                                            {
                                                block: 'info',
                                                mods: {'theme': 'yellow', 'show': 'no'},
                                                content: [
                                                    {
                                                        block: 'section',
                                                        title: 'Покупка авиабилетов',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сайт с подходящими ему вариантами.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/yellow/right.1.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Рекомендации по покупке подходящих товаров',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Предложения на главной странице выбраны на основе информации о предпочтениях Максима, полученных сайтом от «Атома».'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/yellow/right.2.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Предложение купить билет на аэроэкспресс',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэропорта и рекомендует время отправления.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/yellow/right.3.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Выбор интересных мест для посещения',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/yellow/right.4.jpg'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'info',
                                                mods: {'theme': 'red', 'show': 'no'},
                                                content: [
                                                    {
                                                        block: 'section',
                                                        title: 'Покупка тура',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'В острове Алексей Быков сразу указывает параметры для поиска тура. Из результатов убраны слишком дорогие и престижные для Алексея отели. В списке вариантов — туры, идеально подходящие для семейного отдыха с детьми.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/red/right.1.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Напоминание от интернет-магазина',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. Сайт, на котором он обычно их приобретает, отправляет ему напоминание о повторной покупке с кнопкой перехода на предзаполненную форму заказа в один клик.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/red/right.2.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Рекомендация по времени выезда с учётом пробок на дорогах',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробок.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/red/right.3.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Рекомендации по выбору ресторана',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'При поиске ресторанов для посещения, сайт рекомендует Алексею места на основе информации о его предпочтениях и вкусах.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/red/right.4.jpg'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'info',
                                                mods: {'theme': 'blue', 'show': 'no'},
                                                content: [
                                                    {
                                                        block: 'section',
                                                        title: 'Рекомендации по подбору отеля',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Список отелей, показанных на главной странице сайта бронирования, основан на полученных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка понравятся Григорию Иогановичу.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/blue/right.1.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Рекомендации по покупке подходящих товаров',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/blue/right.2.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Напоминание о заказе такси',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/blue/right.3.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'section',
                                                        title: 'Рекомендации по оздоровительным процедурам',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: 'На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются подходящие ему варианты, учитывающие его предпочтения.'
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src: 'img/blue/right.4.jpg'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'section',
                                                title: 'Закрытое тестирование «Атома»',
                                                mods: {'border': 'no'},
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: 'Замысел такого масштаба невозможно воплотить в одиночку, поэтому мы уже начали проводить эксперименты с первыми партнёрами. Каким будет результат этой работы, во многом зависит от них и от других вебмастеров. У нас есть идея и технологии для её реализации, но мы не хотим двигаться дальше без ваших мыслей, мнения, опыта и осознания ваших потребностей. Всё это необходимо нам для того, чтобы превратить идею в полноценный продукт, полезный в реальных ситуациях.'
                                                    },
                                                    {
                                                        elem: 'list-mark',
                                                        content: [
                                                            {
                                                                'elem': 'mark',
                                                                'content': 'выбрать ключевые рубрики вашего сайта;'
                                                            },
                                                            {
                                                                'elem': 'mark',
                                                                'content': 'установить на ваш сайт Яндекс.Метрику;'
                                                            },
                                                            {
                                                                'elem': 'mark',
                                                                'content': 'разметить страницы каждой выбранной рубрики разными целями в Метрике.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Присылайте письмо, в котором указаны идентификаторы целей и чётко описаны те задачи, которые вы бы хотели решить с помощью «Атома».'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: 'Авторы самых интересных писем и предложений станут участниками эксперимента. Все новости и примеры мы будет публиковать в корпоративном блоге и на Хабрахабре.'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: [
                                                            {
                                                                tag: 'span',
                                                                content: 'Свяжитесь с нами через форму обратной связи или пишите на '
                                                            },
                                                            {
                                                                block: 'link',
                                                                content: 'atom-experiments@yandex-team.ru',
                                                                url: '#'
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
           }
       }
    ]
})