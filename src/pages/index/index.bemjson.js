module.exports = {
    block: 'page',
    title: 'Атом',
    styles: [
        {elem: 'css', url: '_index.css'}
    ],
    scripts: [
        {elem: 'js', url: '_index.js'}
    ],
    content: [
        {
            block: 'container',
        },
        {
            block: 'drawer'
        },
        {
            block: 'fixed-layer',
            content: {
                elem: 'content',
                content: {
                    block: 'pers-switch',
                    mods: {position: 'fixed'},
                    js: true
                }
            }
        },
        {
            block: 'fixed-layer',
            mods: {
                position: 'center'
            },
            content: {
                elem: 'content',
                content: {block: 'pers-current'}
            }
        },
        {
            block: 'popup'
        }
    ],
    js: true
};
