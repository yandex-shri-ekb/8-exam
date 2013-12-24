module.exports = function(bh) {
    bh.match('drawer__presentation', function(ctx) {
        var ImageHelper = require('../../helper/helper__image'),
            TextHelper = require('../../helper/helper__text');

        return {
            elem: 'block',
            mods: {common: 'presentation'},
            content: [
                TextHelper.getDrawerText(
                    'Презентация платформы «Атом» на конференции YaС 2013',
                    [
                        'Yet another Conference (YaС) — технологическая конференция Яндекса, которая ежегодно проходит '
                            + 'в Москве, начиная с 2010 года.',
                    ]),
                {
                    block: 'image',
                    src: '../../images/common/right/common-right-1.jpg'
                }
            ]
        };
    });
};
