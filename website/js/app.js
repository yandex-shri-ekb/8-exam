(function (global) {
    'use strict';

    // @link http://stackoverflow.com/a/7557433
    $.fn.isInViewport = function () {
        var rect = this.get(0).getBoundingClientRect();

        return rect.bottom >= 0 && rect.top <= $(window).height();
    };

    $.fn.throttle = function (fn, interval) {
        var previousLaunch = $(this).data('last-throttle-launch') || 0,
            currentLaunch = + new Date();

        interval = interval || 500;

        if (currentLaunch - previousLaunch < interval) {
            return;
        }

        $(this).data('last-throttle-launch', currentLaunch);
        fn();
    };

    $.bemBlock = function (name, modifier, value) {
        return $(document).bemBlock(name, modifier, value);
    };

    $.fn.bemBlock = function (name, modifier, value) {
        var $elements = $(this).find('.' + name).bemBlockName(name)


        if (modifier) {
            $elements = $elements.filter('.' + name + '_' + modifier + (value ? '_' + value : ''));
        }

        return $elements;
    }

    $.fn.bemBlockName = function (name) {
        return name ? $(this).data('bem-block-name', name) : $(this).data('bem-block-name');
    }

    $.fn.isBemBlock = function (name) {
        return Boolean($(this).bemBlockName());
    };

    $.fn.bemElement = function (name, modifier) {
        var $this = $(this),
            elementName,
            $elements;

        if (!$this.isBemBlock()) {
            throw 'Not a BEM block';
        }

        elementName = $this.bemBlockName() + '__' + name;
        $elements = $this.find('.' + elementName);

        if (modifier) {
            $elements = $elements.filter('.' + elementName + '_' + modifier);
        }

        $elements.bemElementName(elementName);

        return $elements;
    };

    $.fn.bemElementName = function (name) {
        return name ? $(this).data('bem-element-name', name) : $(this).data('bem-element-name');
    }

    $.fn.isBemElement = function (name) {
        return Boolean($(this).bemElementName());
    };

    $.fn.bemRemoveModifier = function (name) {
        var $this = $(this);

        if ($this.isBemBlock()) {
            return $this.removeClass (function (index, css) {
                var regexp = new RegExp($this.bemBlockName() + '_' + name + '(_\\S+)', 'g');

                return (css.match(regexp) || []).join(' ');
            });
        }

        if ($this.isBemElement()) {
            return $this.removeClass(function(index, classes) {
                var regexp = new RegExp($(this).bemElementName() + '_' + name + '(_\\S+)', 'g');

                return (classes.match(regexp) || []).join(' ');
            });
        }

        throw 'Not neither BEM block nor BEM element';
    };

    $.fn.bemAddModifier = function (name, value) {
        var $this = $(this);

        if ($this.isBemBlock()) {
            return $this.addClass($this.bemBlockName() + '_' + name + '_' + value);
        }

        if ($this.isBemElement()) {
            return $this.addClass($this.bemElementName() + '_' + name + '_' + value);
        }

        throw 'Not neither BEM block nor BEM element';
    };
}(this));

(function (global) {
    'use strict';
    
    global.myapp = {};   
}(this));

(function (global) {
    'use strict';

    var player = (function () {
        var $container = $.bemBlock('video-frame'),
            $iframe = $container.find('iframe'),
            $open_trigger = $.bemBlock('video-preview'),
            $close_trigger = $container.bemElement('close-button'),
            video_src = '//player.vimeo.com/video/75709551?autoplay=1';

        $open_trigger.on('click', function () {
            $iframe.attr('src', video_src);
            $container.show();
        });

        $close_trigger.on('click', function () {
            $iframe.attr('src', '');
            $container.hide();
        });
    }());

    global.myapp.player = player;
}(this));

(function (global) {
    'use strict'

    var paragraphize = function (str) {
            if (str.indexOf('<') === 0) {
                return str;
            }
            
            return '<p>' + str + '</p>';
        },

        Person,
        Persons,
        persons;

    Person = function (config) {
        var i;
        
        for (i in config) {
            if (config.hasOwnProperty(i)) {
                this[i] = config[i];
            }
        }
    };

    Person.prototype.getHTML = function (path) {
        var sections = path.split('/'),
            text = this.texts;

        while (sections.length) {
            text = text[sections.shift()];
        }

        return text.map(paragraphize).join('');
    };

    Persons = function (persons) {
        this.storage = persons;
    };

    Persons.prototype.getRandomItem = function () {
        return this.storage[Math.floor(Math.random() * this.storage.length)];
    };

    Persons.prototype.findByColor = function (color) {
        return this.storage.filter(function (person) {
            return person.color === color;
        })[0];
    };

    persons = new Persons([
        new Person({
            color: 'yellow',
            texts: {
                article: {
                    step_1: [
                        'Максим хочет увидеть настоящий, нетуристический Таиланд.',
                        'Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт.'
                    ],

                    step_2: [
                        'Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь.',
                        'Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете.'
                    ],

                    step_3: [
                        'Рюкзак с вещами и ноутбуком — вот и весь багаж Максима.',
                        'На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе.'
                    ],

                    step_4: [
                        'Максим не сидит на месте — в поисках интересных мест он колесит по всей стране.',
                        'Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу.'
                    ]
                },

                aside: {
                    step_1: [
                        '<h2>Покупка авиабилетов</h2>',
                        'Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сайт с подходящими ему вариантами.',
                        '<img src="img/themes/yellow/right.1.jpg">'
                    ],

                    step_2: [
                        '<h2>Рекомендации по покупке подходящих товаров</h2>',
                        'Предложения на главной странице выбраны на основе информации о предпочтениях Максима, полученных сайтом от «Атома».',
                        '<img src="img/themes/yellow/right.1.jpg">'
                    ],

                    step_3: [
                        '<h2>Предложение купить билет на аэроэкспресс</h2>',
                        'Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэропорта и рекомендует время отправления.',
                        '<img src="img/themes/yellow/right.1.jpg">'
                    ],

                    step_4: [
                        '<h2>Выбор интересных мест для посещения</h2>',
                        'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.',
                        '<img src="img/themes/yellow/right.1.jpg">'
                    ]
                }
            }
        }),

        new Person({
            color: 'red',
            texts: {
                article: {
                    step_1: [
                        'Устав от турецких пляжей, Алексей Быков решил вывезти семью в Таиланд.',
                        'Он выбирает тур так, чтобы уложиться в адекватную сумму, но порадовать всех: приемлемый уровень комфорта, детская анимация, недалеко от пляжа, «все включено».'
                    ],

                    step_2: [
                        'Алексей твердо уверен, что линзы практичнее обычных очков — как минимум потому, что вместе с ними можно надеть другие очки: для плавания или солнечные.',
                        'Он привык к тому, что у него всегда есть запас одноразовых линз.'
                    ],

                    step_3: [
                        'У семьи Быковых с собой очень много багажа, большую часть которого занимают платья жены и детские вещи.',
                        'Ехать с сумками на общественном транспорте им совсем не хочется, тем более, когда есть вместительный автомобиль. Алексей решает переплатить за парковку у аэропорта, зато добраться с удобством.'
                    ],

                    step_4: [
                        'Для Алексея один из основных мотивов выбора Таиланда — гастрономический: и он, и жена любят экзотическую кухню.',
                        'Каждый день они вместе отправляются на поиски новых ресторанов.'
                    ]
                },

                aside: {
                    step_1: [
                        '<h2>Покупка тура</h2>',
                        'В острове Алексей Быков сразу указывает параметры для поиска тура. Из результатов убраны слишком дорогие и престижные для Алексея отели. В списке вариантов — туры, идеально подходящие для семейного отдыха с детьми.',
                        '<img src="img/themes/red/right.1.jpg">'
                    ],

                    step_2: [
                        '<h2>Напоминание от интернет-магазина</h2>',
                        'Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. Сайт, на котором он обычно их приобретает, отправляет ему напоминание о повторной покупке с кнопкой перехода на предзаполненную форму заказа в один клик.',
                        '<img src="img/themes/red/right.1.jpg">'
                    ],

                    step_3: [
                        '<h2>Рекомендация по времени выезда с учётом пробок на дорогах</h2>',
                        'Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробок.',
                        '<img src="img/themes/red/right.1.jpg">'
                    ],

                    step_4: [
                        '<h2>Рекомендации по выбору ресторана</h2>',
                        'При поиске ресторанов для посещения, сайт рекомендует Алексею места на основе информации о его предпочтениях и вкусах.',
                        '<img src="img/themes/red/right.1.jpg">'
                    ]
                }
            }
        }),

        new Person({
            color: 'blue',
            texts: {
                article: {
                    step_1: [
                        'Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи.',
                        'Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель.'
                    ],

                    step_2: [
                        'Даже отдых должен приносить в жизнь что-нибудь новое — таков жизненный принцип Григория Иогановича.',
                        'В этой поездке он планирует научиться дайвингу: посмотреть на коралловые рифы и причудливых морских животных.'
                    ],

                    step_3: [
                        'Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск.',
                        'Добираться до аэропорта он будет на такси.'
                    ],

                    step_4: [
                        'В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе.',
                        'Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги.'
                    ]
                },

                aside: {
                    step_1: [
                        '<h2>Рекомендации по подбору отеля</h2>',
                        'Список отелей, показанных на главной странице сайта бронирования, основан на полученных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка понравятся Григорию Иогановичу.',
                        '<img src="img/themes/blue/right.1.jpg">'
                    ],

                    step_2: [
                        '<h2>Рекомендации по покупке подходящих товаров</h2>',
                        'Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.',
                        '<img src="img/themes/blue/right.1.jpg">'
                    ],

                    step_3: [
                        '<h2>Напоминание о заказе такси</h2>',
                        'Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом времени отправления его рейса.',
                        '<img src="img/themes/blue/right.1.jpg">'
                    ],

                    step_4: [
                        '<h2>Рекомендации по оздоровительным процедурам</h2>',
                        'На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предлагаются подходящие ему варианты, учитывающие его предпочтения.                ',
                        '<img src="img/themes/blue/right.1.jpg">'
                    ]
                }
            }
        })
    ]);

    global.myapp.persons = persons;
}(this));

(function (global) {
    'use strict'

    var panel_is_opened = false,
        $panel = $.bemBlock('story').bemElement('aside');

    $panel.on('click', function () {
        if (panel_is_opened) {
            $panel.animate({marginLeft: '+=400'});
        } else {
            $panel.animate({marginLeft: '-=400'});
        }

        panel_is_opened = !panel_is_opened; 
    });   
}(this));

(function (global) {
    'use strict';

    var persons = global.myapp.persons;
    var person = persons.getRandomItem();

    var App = {
        setPerson: function (person) {
            $.bemBlock('story').bemRemoveModifier('color').bemAddModifier('color', person.color);

            App.fillSection('step_1', person);
            App.fillSection('step_2', person);
            App.fillSection('step_3', person);
            App.fillSection('step_4', person);
        },

        fillSection: function (name, person) {
            $.bemBlock('article').bemElement('section', name).bemBlock('scene').html(person.getHTML('article/' + name));
            $.bemBlock('aside').bemElement('section', name).bemBlock('scene').html(person.getHTML('aside/' + name));
        }
    };

    var $person = $.bemBlock('person');

    $person.on('click', function () {
        var color = $(this).data('color'),
            person = persons.findByColor(color);

        App.setPerson(person);

        $('body').animate({scrollTop: 1000});
    });

    App.setPerson(person);

    var $mainPerson = $.bemBlock('main-person'),
        $mainPersonImage = $mainPerson.bemElement('image');

    $mainPerson.on('mouseenter', function () {
        $mainPerson.animate({top: '150', left: '200'});
    });

    $(window).on('scroll', function () {
        $(this).throttle(function () {
            if ($(window).scrollTop() > 1000 &&
                !$.bemBlock('persons', 'position', 'bottom').isInViewport() && 
                !$.bemBlock('persons', 'position', 'top').isInViewport()) {
                $mainPerson.show();
            } else {
                $mainPerson.hide();
            }
        });
    });
}(this));
