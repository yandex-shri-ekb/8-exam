var getTextContent = function(text) {
    return typeof text === 'string'
        ? text
        : text.map(function(p) {
            return {
                elem: 'paragraph',
                content: p
            };
        });
};

module.exports = {
    getText: function(text, mods, size, offset) {
        return {
            elem: 'content',
            mods: {
                size: size,
                offset: offset
            },
            content: {
                block: 'text',
                mods: mods,
                content: getTextContent(text)
            }
        };
    },

    getDrawerText: function(title, text) {
        return {
            block: 'text',
            mods: {
                drawer: true
            },
            content: [].concat(
                {
                    elem: 'title',
                    content: title
                },
                getTextContent(text))
        };
    }
};
