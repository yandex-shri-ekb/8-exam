var ImageHelper = require('../../../../helper/helper__image'),
    TextHelper = require('../../../../helper/helper__text');

module.exports = {
    block: 'grid',
    mods: {red: 1},
    mix: {
        block: 'area',
        js: {area: 1, type: 'red'}
    },
    content: [
        {
            elem: 'content',
            mods: {
                orientation: 'bottom',
                size: 'full'
            },
            content: [
                ImageHelper.easyGetImage('red', 'path-2', 3, 'bottom'),
                ImageHelper.easyGetImage('red', 'portret', 1, 'bottom'),
                ImageHelper.easyGetImage('red', 'book', 2, 'bottom'),
                ImageHelper.easyGetImage('red', 'bear', 0, 'bottom')
            ]
        },
        ImageHelper.easyGetImage('red', 'path-1', 1),
        TextHelper.getText(
            [
                'Устав от турецких пляжей, Алексей Быков решил вывезти семью в Таиланд.',
                'Он выбирает тур так, чтобы уложиться в адекватную сумму, но порадовать всех: '
                    + 'приемлемый уровень комфорта, детская анимация, недалеко от пляжа, «все включено».'
            ],
            {red: 1, align: 'center'},
            4, 1),
        ImageHelper.easyGetImage('red', 'tour', 6),
        ImageHelper.easyGetImage('red', 'pasports', 7)
    ]
};
