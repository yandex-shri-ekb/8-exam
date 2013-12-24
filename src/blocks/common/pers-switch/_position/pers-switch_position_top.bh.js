module.exports = function(bh) {
    bh.match('pers-switch_position_top', function(ctx) {
        var PersHelper = require('../../helper/helper__pers');

        ctx.content({
            block: 'grid',
            mods: {common: 'switch-top'},
            mix: {
                block: 'area',
                js: {area: 'top', type: 'common', direction: 'down'}
            },
            content: [
                PersHelper.getPers(
                    'yellow', 'Максим', 1,
                    'Предпочитает путешествовать самостоятельно и налегке. Уверен, что только так можно проникнуться культурой страны.'),
                PersHelper.getPers(
                    'red', 'Алексей Быков', 4,
                    'В отпуск ездит вместе с женой и дочкой. Считает, что отдыхать лучше всего в отелях на побережье.'),
                PersHelper.getPers(
                    'blue', 'Георгий И. Дауге', 7,
                    'Очень дорожит редкими отпусками и превыше всего ценит комфорт и качество обслуживания.')
            ]
        });
    });
};
