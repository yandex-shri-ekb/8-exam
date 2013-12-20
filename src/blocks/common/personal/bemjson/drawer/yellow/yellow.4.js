var TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'drawer',
    elem: 'block',
    mods: {yellow: 4},
    attrs: {'data-adjusted-to': '.grid_yellow_4'},
    content: [
        TextHelper.getDrawerText(
            'Выбор интересных мест для посещения',
            [
                'Когда Максим выбирает в интернете достопримечательности для посещения в путешествии, '
                    + 'сайт предлагает ему обратить внимание и на другие объекты, которые могут быть ему интересны.'
            ]),
        {
            block: 'image',
            src: '../../images/yellow/right/yellow-right-4.jpg'
        }
    ]
};
