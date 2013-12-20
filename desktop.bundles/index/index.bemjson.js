({
    block: 'page',
    title: 'Яндекс.Атом',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index/_index.css'},
        { elem: 'css', url: 'index/all.css'},
        { elem: 'js', url: 'index/jquery.min.js' },
        { elem: 'js', url: 'index/_index.js' }
    ],
    content: [
        {
            block: 'layout',
            js: true,
            content: [
                {
                    block: 'header'
                },
                {
                    block: 'intro'
                },
                {
                    block: 'persons',
                    mods: {
                        'position': 'top'
                    },
                    js: true,
                    persons: [
                        {
                            name: 'Максим',
                            subtitle: 'Предпочитает путешествовать самостоятельно и налегке. Уверен, что только так можно проникнуться культурой страны.',
                            color: 'yellow'
                        },
                        {
                            name: 'Алексей',
                            subtitle: 'В отпуск ездит вместе с женой и дочкой. Считает, что отдыхать лучше всего в отелях на побережье.',
                            color: 'red'
                        },
                        {
                            name: 'Григорий И. Дауге',
                            subtitle: 'Очень дорожит редкими отпусками и превыше всего ценит комфорт и качество обслуживания.',
                            color: 'blue'
                        }
                    ]
                },
                {
                    block: 'story-toggler',
                    mods: {
                        display: 'hide'
                    },
                    js: true
                },
                {
                    block: 'story',
                    js: true
                },
                {
                    block: 'persons',
                    mods: {
                        'position': 'bottom'
                    },
                    js: true,
                    persons: [
                        {
                            name: 'Максим',
                            color: 'yellow'
                        },
                        {
                            name: 'Алексей',
                            color: 'red'
                        },
                        {
                            name: 'Григорий И. Дауге',
                            color: 'blue'
                        }
                    ]
                },
                {
                    block: 'footer'
                }
            ]
        },
        {
            block: 'sidebar',
            mods: {
                'fixed': 'no',
                'show': 'no'
            },
            js: true
        },
        {
            block: 'sidebar-toggle-button',
            tag: 'button',
            mods: {
                state: 'help'
            },
            js: true
        },
        {
            block: 'main-video',
            js: true,
            mods: {
                show: 'no'
            }
        },
        {
            block: 'overlay',
            js: true,
            mods: {
                show: 'no'
            }
        }
    ]
});