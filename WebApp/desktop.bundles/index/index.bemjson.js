({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index/_index.css', ie: false },
        { elem: 'css', url: 'index/_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
//        { elem: 'js', url: '/jquery-1.10.2.min.js' },
//        { elem: 'js', url: '/jquerybem.js' }
    ],
    content: [
        {
            block: "wrapper",
            content: [
                {
                    block: 'services-toggle'
                },
                {
                    block: 'history',
                    mods: {
                      color: 'yellow'
                    },
                    content: [

                        {
                            block: 'head-history',
                            content: [
                                {
                                    elem: "background"
                                },
                                {
                                    elem: "title",
                                    content: "А что если интернет подстроится<br> под вас?"
                                }
                            ]
                        },
                        {
                            block: "video-history",
                            content: [
                                {
                                    block: "grid-wrap",

                                    content: [

                                        {
                                            block: "introductory-text",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    mods: {
                                                        coll: "2",
                                                        size: "6"
                                                    }

                                                }
                                            ],
                                            content: [
                                                {
                                                    block: "paragraf",
                                                    content: "Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под конкретного пользователя и готов поделиться этой технологией с другими."
                                                },
                                                {
                                                    block: "paragraf",
                                                    content: "«Атом». Технологическая платформа, задача которой — предоставить сайтам возможность изменять содержание страниц под конкретного пользователя."
                                                }
                                            ]
                                        },
                                        {
                                            block: "video-button",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    mods: {
                                                        coll: "9",
                                                        size: "3"
                                                    }
                                                }
                                            ],
                                            content: [
                                                {
                                                    elem: "button"
                                                },
                                                {
                                                    elem: "title",
                                                    content: "Весь сайт в одном видео"
                                                }
                                            ]
                                        }

                                    ]
                                }
                            ]
                        },
                        {
                            block: 'select-person',
                            content: [
                                {
                                    block: 'grid-wrap',
                                    content: [
                                        {
                                            block: "grid",
                                            mods: {
                                                coll: "3",
                                                size: "2"
                                            },
                                            content: [
                                                {
                                                    block: 'select-max ',
                                                    mix:[
                                                        {
                                                            block:'js-person'
                                                        }]
                                                },
                                                {
                                                    block: 'person-name',
                                                    content: "Максим"
                                                }
                                            ]
                                        },
                                        {
                                            block: "grid",
                                            mods: {
                                                coll: "6",
                                                size: "2"
                                            },
                                            content: [
                                                {
                                                    block: 'select-alex ',
                                                    mix:[
                                                        {
                                                            block:'js-person'
                                                        }]
                                                },
                                                {
                                                    block: 'person-name',
                                                    content: "Алексей Быков"
                                                }
                                            ]
                                        },
                                        {
                                            block: "grid",
                                            mods: {
                                                coll: "9",
                                                size: "2"
                                            },
                                            content: [
                                                {
                                                    block: 'select-grig ',
                                                    mix:[
                                                        {
                                                            block:'js-person'
                                                        }]
                                                },
                                                {
                                                    block: 'person-name',
                                                    content: "Григорий И. Дауге"
                                                }
                                            ]
                                        }
                                    ]
                                }

                            ]

                        },
                        {
                            block: 'person-description',
                            content: [
                                {
                                    block: 'grid-wrap',
                                    content: [

                                        {
                                            block: 'grid',
                                            mods: {
                                                coll: "2",
                                                size: "4"
                                            },
                                            content: [
                                                {
                                                    block: 'max-description js-description',
                                                    content: 'Предпочитает путешествовать самостоятельно и налегке. Уверен, что только так можно проникнуться культурой страны.',
                                                    mix: [
                                                        {
                                                            block: 'indent'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            block: 'grid',
                                            mods: {
                                                coll: "5",
                                                size: "4"
                                            },
                                            content: [
                                                {
                                                    block: 'alex-description js-description',
                                                    content: 'В отпуск ездит вместе с женой и дочкой. Считает, что отдыхать лучше всего в отелях на побережье.',
                                                    mix: [
                                                        {
                                                            block: 'indent'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            mods: {
                                                coll: "8",
                                                size: "4"
                                            },
                                            content: [
                                                {
                                                    block: 'grig-description js-description',
                                                    content: 'Очень дорожит редкими отпусками и превыше всего ценит комфорт и качество обслуживания.',
                                                    mix: [
                                                        {
                                                            block: 'indent'
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
                            block: 'person-history',
                            content: [
                                {
                                    block: 'history-max',
                                    content: [
                                        ,
                                        {
                                            block: 'max-history-bg',
                                            mix: [
                                                {block: 'grid-wrap'}
                                            ],
                                            content: [
                                                {
                                                    elem: 'bg-1',
                                                    mix: [
                                                        {
                                                            block: 'grid',
                                                            mods: {
                                                                coll: "2",
                                                                size: "6"
                                                            }
                                                        }

                                                    ]

                                                },
                                                {
                                                    elem: 'bg-2'
                                                },
                                                {
                                                    elem: 'bg-3'
                                                },
                                                {
                                                    elem: 'bg-4'
                                                },
                                                {
                                                    elem: 'bg-5',
                                                    mix: [
                                                        {
                                                            block: 'grid',
                                                            mods: {
                                                                coll: "2",
                                                                size: "6"
                                                            }
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history-text',
                                            content: [
                                                {
                                                    block: 'step1',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "2",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Максим хочет увидеть настоящий, нетуристический Таиланд.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                                                                                }
                                                                            ]  }

                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]

                                                },
                                                {
                                                    block: 'step2',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "8",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
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
                                                    block: 'step3',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "2",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
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
                                                    block: 'step4',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "8",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
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
                                    block: 'history-alex',
                                    content: [
                                        {
                                            block: 'alex-history-bg',
                                            mix: [
                                                {block: 'grid-wrap'}
                                            ],
                                            content: [
                                                {
                                                    elem: 'bg-1',
                                                    mix: [
                                                        {
                                                            block: 'grid',
                                                            mods: {
                                                                coll: "2",
                                                                size: "6"
                                                            }
                                                        }

                                                    ]

                                                },
                                                {
                                                    elem: 'bg-2'
                                                },
                                                {
                                                    elem: 'bg-3'
                                                },
                                                {
                                                    elem: 'bg-4'
                                                },
                                                {
                                                    elem: 'bg-5'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history-text',
                                            content: [
                                                {
                                                    block: 'step1',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "2",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Устав от турецких пляжей, Алексей Быков решил вывезти семью в Таиланд.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Он выбирает тур так, чтобы уложиться в адекватную сумму, но порадовать всех: приемлемый уровень комфорта, детская анимация, недалеко от пляжа, «все включено».'
                                                                                }
                                                                            ]  }

                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]

                                                },
                                                {
                                                    block: 'step2',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "8",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Алексей твердо уверен, что линзы практичнее обычных очков — как минимум потому, что вместе с ними можно надеть другие очки: для плавания или солнечные.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Он привык к тому, что у него всегда есть запас одноразовых линз.'
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
                                                    block: 'step3',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "2",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'У семьи Быковых с собой очень много багажа, большую часть которого занимают платья жены и детские вещи.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Ехать с сумками на общественном транспорте им совсем не хочется, тем более, когда есть вместительный автомобиль. Алексей решает переплатить за парковку у аэропорта, зато добраться с удобством.'
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
                                                    block: 'step4',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "8",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Для Алексея один из основных мотивов выбора Таиланда — гастрономический: и он, и жена любят экзотическую кухню.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Каждый день они вместе отправляются на поиски новых ресторанов.'
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
                                    block: 'history-grig',
                                    content: [
                                        {
                                            block: 'grig-history-bg',
                                            mix: [
                                                {block: 'grid-wrap'}
                                            ],
                                            content: [
                                                {
                                                    elem: 'bg-1',
                                                    mix: [
                                                        {
                                                            block: 'grid',
                                                            mods: {
                                                                coll: "2",
                                                                size: "6"
                                                            }
                                                        }

                                                    ]

                                                },
                                                {
                                                    elem: 'bg-2'
                                                },
                                                {
                                                    elem: 'bg-3'
                                                },
                                                {
                                                    elem: 'bg-4'
                                                },
                                                {
                                                    elem: 'bg-5',
                                                    mix: [
                                                        {
                                                            block: 'grid',
                                                            mods: {
                                                                coll: "2",
                                                                size: "6"
                                                            }
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history-text',
                                            content: [
                                                {
                                                    block: 'step1',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "2",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель.'
                                                                                }
                                                                            ]  }

                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]

                                                },
                                                {
                                                    block: 'step2',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "8",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Даже отдых должен приносить в жизнь что-нибудь новое — таков жизненный принцип Григория Иогановича.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'В этой поездке он планирует научиться дайвингу: посмотреть на коралловые рифы и причудливых морских животных.'
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
                                                    block: 'step3',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "2",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Добираться до аэропорта он будет на такси.'
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
                                                    block: 'step4',
                                                    content: [
                                                        {
                                                            block: 'grid-wrap',
                                                            content: [
                                                                {
                                                                    block: 'grid',
                                                                    mods: {
                                                                        coll: "8",
                                                                        size: "4"
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'indent',
                                                                            content: [
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе.'
                                                                                },
                                                                                {
                                                                                    block: 'paragraf',
                                                                                    content: 'Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги.'
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
                            ]
                        },
                        {
                            block: 'select-person',
                            mods: {
                                top: 'up'
                            },
                            content: [
                                {
                                    block: 'grid-wrap',
                                    content: [
                                        {
                                            block: "grid",
                                            mods: {
                                                coll: "3",
                                                size: "2"
                                            },
                                            content: [
                                                {
                                                    block: 'select-max',
                                                    mix:[
                                                        {
                                                            block:'js-person'
                                                        }]
                                                },
                                                {
                                                    block: 'person-name',
                                                    content: "Максим"
                                                }
                                            ]
                                        },
                                        {
                                            block: "grid",
                                            mods: {
                                                coll: "6",
                                                size: "2"
                                            },
                                            content: [
                                                {
                                                    block: 'select-alex',
                                                    mix:[
                                                        {
                                                            block:'js-person'
                                                        }]
                                                },
                                                {
                                                    block: 'person-name',
                                                    content: "Алексей"
                                                }
                                            ]
                                        },
                                        {
                                            block: "grid",
                                            mods: {
                                                coll: "9",
                                                size: "2"
                                            },
                                            content: [
                                                {
                                                    block: 'select-grig',
                                                    mix:[
                                                        {
                                                            block:'js-person'
                                                        }]
                                                },
                                                {
                                                    block: 'person-name',
                                                    content: "Григорий И. Дауге"
                                                }
                                            ]
                                        }
                                    ]
                                }

                            ]

                        },
                        {
                            block: 'atom-footer',

                            content: [
                                {
                                    block: 'grid-wrap',
                                    content: [
                                        {
                                            block: 'grid',
                                            mods: {
                                                coll: '2',
                                                size: '6'
                                            },
                                            content: [

                                                {
                                                    block: 'indent',
                                                    content: [
                                                        {
                                                            block: 'paragraf',
                                                            content: 'Мир один, а люди разные. Так и интернет — он один, но для каждого разный.'
                                                        },
                                                        {
                                                            block: 'paragraf',
                                                            content: 'Теперь посмотрите, как планировали путешествие в Таиланд другие герои.'
                                                        }
                                                    ]
                                                }

                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            mods: {
                                                coll: '9',
                                                size: '2'
                                            },
                                            content: [
                                                {
                                                    block: 'atom-logo',
                                                    mix: [
                                                        {
                                                            block: 'indent'
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
                            block: 'block-the-way',
                            content: [
                                {
                                    block: 'max-way',
                                    content: [
                                        {
                                            block: 'way-1'
                                        },
                                        {
                                            block: 'way-2'
                                        },
                                        {
                                            block: 'way-3'
                                        },
                                        {
                                            block: 'way-4'
                                        }
                                    ]
                                },
                                {
                                    block: 'alex-way',
                                    content: [
                                        {
                                            block: 'way-1'
                                        },
                                        {
                                            block: 'way-2'
                                        },
                                        {
                                            block: 'way-3'
                                        },
                                        {
                                            block: 'way-4'
                                        }
                                    ]
                                },
                                {
                                    block: 'grig-way',
                                    content: [
                                        {
                                            block: 'way-1'
                                        },
                                        {
                                            block: 'way-2'
                                        },
                                        {
                                            block: 'way-3'
                                        },
                                        {
                                            block: 'way-4'
                                        }
                                    ]
                                }

                            ]
                        }
                    ]
                },
                {
                    block: 'used-services',
                    content: [
                        {
                            block: "application-scenarios",
                            mix: [
                                {
                                    block: 'used-services-block'
                                }
                            ],
                            content: [
                                {
                                    block: 'used-services-content-wrapper',
                                    content: [
                                        {
                                            block: 'paragraf',
                                            mix: [
                                                {
                                                    block: 'title'
                                                }
                                            ],
                                            content: '«Атом»: сценарии применения'
                                        },
                                        {
                                            block: 'paragraf',
                                            content: '«Атом» — это платформа, которая позволит сайтам в интернете адаптироваться под каждого конкретного пользователя. Показывать ему только интересную информацию, помогать быстрее решать задачи.'
                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Этого можно достигнуть за счёт индивидуальных изменений, не всегда заметных самому пользователю, но делающих страницу более интересной, более удобной для него.'
                                        },
                                        {
                                            block: 'atom-logo2'
                                        },
                                        {
                                            block: 'yandex-logo'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: "presentation",
                            mix: [
                                {
                                    block: 'used-services-block'
                                }
                            ],
                            content: [
                                {
                                    block: 'used-services-content-wrapper',
                                    content: [
                                        {
                                            block: 'paragraf',
                                            mix: [
                                                {
                                                    block: 'title'
                                                }
                                            ],
                                            content: 'Презентация платформы «Атом» на конференции YaС 2013'
                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Yet another Conference (YaС) — технологическая конференция Яндекса, которая ежегодно проходит в Москве, начиная с 2010 года.'
                                        },
                                        {
                                            block: 'YaC-video'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "block": "max-used-services",
                            content: [
                                {
                                    block: 'us-step1',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Покупка авиабилетов'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сайт с подходящими ему вариантами.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/yellow/right.1.jpg'}
                                                }
                                            ]
                                        }

                                    ]
                                },
                                {
                                    block: 'us-step2',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [

                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Рекомендации по покупке подходящих товаров'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Предложения на главной странице выбраны на основе информации о предпочтениях Максима, полученных сайтом от «Атома».'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/yellow/right.2.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step3',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Предложение купить билет на аэроэкспресс'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэропорта и рекомендует время отправления.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/yellow/right.3.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step4',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Выбор интересных мест для посещения'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/yellow/right.4.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            "block": "alex-used-services",
                            content: [
                                {
                                    block: 'us-step1',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Покупка тура'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'В острове Алексей Быков сразу указывает параметры для поиска тура.'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Из результатов убраны слишком дорогие и престижные для Алексея отели. В списке вариантов — туры, идеально подходящие для семейного отдыха с детьми.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/red/right.1.jpg'}
                                                }

                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'us-step2',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Напоминание от интернет-магазина'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. Сайт, на котором он обычно их приобретает, отправляет ему напоминание о повторной покупке с кнопкой перехода на предзаполненную форму заказа в один клик.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/red/right.2.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step3',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Рекомендация по времени выезда с учётом пробок на дорогах'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробок.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/red/right.3.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step4',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Рекомендации по выбору ресторана'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'При поиске ресторанов для посещения, сайт рекомендует Алексею места на основе информации о его предпочтениях и вкусах.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/red/right.4.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            "block": "grig-used-services",
                            content: [
                                {
                                    block: 'us-step1',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Рекомендации по подбору отеля'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Список отелей, показанных на главной странице сайта бронирования, основан на полученных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка понравятся Григорию Иогановичу.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/blue/right.1.jpg'}
                                                }

                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step2',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Рекомендации по покупке подходящих товаров'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/blue/right.2.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step3',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Напоминание о заказе такси'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/blue/right.3.jpg'}
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    block: 'us-step4',
                                    mix: [
                                        {
                                            block: 'used-services-block'
                                        }
                                    ],
                                    content: [
                                        {
                                            block: 'used-services-content-wrapper',
                                            content: [
                                                {
                                                    block: 'paragraf',
                                                    mix: [
                                                        {
                                                            block: 'title'
                                                        }
                                                    ],
                                                    content: 'Рекомендации по оздоровительным процедурам'
                                                },
                                                {
                                                    block: 'paragraf',
                                                    content: 'На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются подходящие ему варианты, учитывающие его предпочтения.'
                                                },
                                                {
                                                    block: 'img',
                                                    tag: 'img',
                                                    attrs: {src: '../image/blue/right.4.jpg'}
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'closed-testing',
                            mix: [
                                {
                                    block: 'used-services-block'
                                }
                            ],
                            content: [
                                {
                                    block: 'used-services-content-wrapper',
                                    content: [

                                        {

                                            block: 'paragraf',
                                            mix: [
                                                {
                                                    block: 'title'
                                                }
                                            ],
                                            content: 'Закрытое тестирование «Атома»'
                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Замысел такого масштаба невозможно воплотить в одиночку, поэтому мы уже начали проводить эксперименты с первыми партнёрами. Каким будет результат этой работы, во многом зависит от них и от других вебмастеров. У нас есть идея и технологии для её реализации, но мы не хотим двигаться дальше без ваших мыслей, мнения, опыта и осознания ваших потребностей. Всё это необходимо нам для того, чтобы превратить идею в полноценный продукт, полезный в реальных ситуациях.'

                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Если вы хотите принять участие в развитии «Атома», то вам необходимо выполнить следующие шаги:<br>- выбрать ключевые рубрики вашего сайта;<br>- установить на ваш сайт Яндекс.Метрику;<br>- разметить страницы каждой выбранной рубрики разными целями в Метрике.'

                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Присылайте письмо, в котором указаны идентификаторы целей и чётко описаны те задачи, которые вы бы хотели решить с помощью «Атома».'

                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Авторы самых интересных писем и предложений станут участниками эксперимента. Все новости и примеры мы будет публиковать в корпоративном блоге и на Хабрахабре.'

                                        },
                                        {
                                            block: 'paragraf',
                                            content: 'Свяжитесь с нами через форму обратной связи или пишите на atom-experiments@yandex-team.ru'

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
            block: "hack"
        },
//        { elem: 'js', url: '/script.jquerybem.js' }
//        ,
        { elem: 'js', url: 'index/_index.js' }
    ]
});
