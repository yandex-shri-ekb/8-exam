module.exports = {
    getPers: function(type, name, offset, desc, size) {
        size || (size = 4);
        return {
            elem: 'content',
            mods: {
                size: size,
                offset: offset
            },
            content: {
                block: 'pers-switch',
                elem: 'item',
                mods: {
                    type: type
                },
                content: [
                    {elem: 'icon'},
                    {elem: 'name', content: name},
                    {elem: 'desc', content: desc}
                ],
                js: {
                    type: type
                }
            }
        };
    }
};
