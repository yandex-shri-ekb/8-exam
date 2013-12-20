var TextHelper = require('../../helper/helper__text');

module.exports = {
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
