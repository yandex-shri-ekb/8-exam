({
    block: 'page',
    title: 'Экзаменационная работа — Яндекс ШРИ в Екатеринбурге 2013 — Антон Жевак',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'popup',
            content: 'Привет',
            id: 'video',
            js: true
        },
        {
            block: 'aside-button',
            mods: { icon: 'close' },
            js: true
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'history',
                    content: [

                    ]
                },
                {
                    elem: 'aside',
                    content: [

                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
