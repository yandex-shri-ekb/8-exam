var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {blue: 3},
    mix: {
        block: 'area',
        js: {area: 3, type: 'blue'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('blue', 'path-4', 1, 'bottom'),
                ImageHelper.easyGetImage('blue', 'iphone', 2, 'bottom')
            ]
        },
        TextHelper.getText(
            [
                'Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск.',
                'Добираться до аэропорта он будет на такси.'
            ],
            {blue: 3, align: 'center'},
            4, 1),
        ImageHelper.easyGetImage('blue', 'cards', 5),
        ImageHelper.easyGetImage('blue', 'money', 10),
        ImageHelper.easyGetImage('blue', 'tie', 6),
        ImageHelper.easyGetImage('blue', 'krug', 10)
    ]
};
