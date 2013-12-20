var ImageHelper = require('../../helper/helper__image'),
    TextHelper = require('../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {common: 'footer'},
    mix: {block: 'container', elem: 'footer'},
    content: [
        TextHelper.getText(
            [
                'Интернет сегодня — это не только информация и технологии, это люди: их желания, предпочтения, задачи.'
                    + 'Люди — вот атомы, из которых на самом деле состоит цифровая материя; и эти люди очень, очень разные.',
                'Теперь посмотрите, как планировали путешествие в Таиланд Алексей Быков и Георгий И. Дауге.'
            ],
            {common: 'footer'},
            6, 1),
        ImageHelper.easyGetImage('common', 'atom-logo', 8),
        {
            elem: 'content',
            mix: {block: 'container', elem: 'footer-links'},
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                {
                    elem: 'content',
                    mods: {offset: 1},
                    content: [
                        {
                            block: 'link',
                            mods: {type: 'footer'},
                            content: 'Помощь',
                            href: '#'
                        },
                        {
                            block: 'link',
                            mods: {type: 'footer'},
                            content: 'Обратная связь',
                            href: '#'
                        }
                    ]
                },
                {
                    elem: 'content',
                    mods: {offset: 5},
                    content: '© 2013  ООО «Яндекс»'
                }
            ]
        }
    ]
};
