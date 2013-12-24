module.exports = function(bh) {
    bh.match('drawer__header', function(ctx) {
        var ImageHelper = require('../../helper/helper__image'),
            TextHelper = require('../../helper/helper__text');

        return {
            elem: 'block',
            mods: {common: 'header'},
            content: [
                TextHelper.getDrawerText(
                    '«Атом»: сценарии применения',
                    [
                        '«Атом» — это платформа, которая позволит сайтам в интернете адаптироваться под каждого конкретного '
                            + 'пользователя. Показывать ему только интересную информацию, помогать быстрее решать задачи.',
                        'Этого можно достигнуть за счёт индивидуальных изменений, не всегда заметных самому пользователю, '
                            + 'но делающих страницу более интересной, более удобной для него.'
                    ]),
                {
                    block: 'image',
                    src: '../../images/common/common-atom.png'
                }
            ]
        };
    });
};
