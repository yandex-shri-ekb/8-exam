var PersHelper = require('../../helper/helper__pers');

module.exports = {
    block: 'grid',
    mods: {common: 'switch-bottom'},
    content: [
        PersHelper.getPers('yellow', 'Максим', 1),
        PersHelper.getPers('red', 'Алексей Быков', 4),
        PersHelper.getPers('blue', 'Георгий И. Дауге', 7)
    ]
};
