module.exports = function(bh) {
    bh.match('container__info', function(ctx) {
        var ImageHelper = require('../../helper/helper__image'),
            TextHelper = require('../../helper/helper__text');

        return {
            block: 'grid',
            mods: {common: 'info'},
            mix: {block: 'container', elem: 'info'},
            content: [
                TextHelper.getText(
                    [
                        'Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, '
                            + 'а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под '
                            + 'конкретного пользователя и готов поделиться этой технологией с другими.',
                        '«Атом». Технологическая платформа, задача которой — предоставить сайтам возможность изменять '
                            + 'содержание страниц под конкретного пользователя.'
                    ],
                    {common: 'atom-info'},
                    6, 1),
                {
                    elem: 'content',
                    mods: {offset: 8},
                    content: {
                        block: 'video',
                        js: true
                    }
                }
            ]
        };
    });
};
