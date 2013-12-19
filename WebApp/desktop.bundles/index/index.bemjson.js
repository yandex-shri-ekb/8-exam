({
  block: 'page',
  title: 'Title of the page',
  favicon: '/favicon.ico',
  head: [
    { elem: 'css', url: 'index/_index.css', ie: false },
    { elem: 'css', url: 'index/_index.ie.css', ie: 'gte IE 6' },
    { elem: 'meta', attrs: { name: 'description', content: '' }}
  ],
  content: [
    {
      block: "wrapper",
      content: [
        {
          block: 'history',
          content: [
            {
              block: 'head-history',
              content: [
                {
                  elem: "background"
                },
                {
                  elem: "title",
                  content: "А что если интернет подстроится<br> под вас?"
                }
              ]
            },
            {
              block: "video-history",
              content: [
                {
                  block: "grid-wrap",
                  content: [
                    {
                      block: "grid",
                      mods: {
                        coll: "2",
                        size: "6"
                      },
                      content: [

                        {
                          block: "introductory-text",
                          content: [
                            {
                              elem: "pragraf",
                              content: "Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под конкретного пользователя и готов поделиться этой технологией с другими."
                            },
                            {
                              elem: "pragraf",
                              content: "«Атом». Технологическая платформа, задача которой — предоставить сайтам возможность изменять содержание страниц под конкретного пользователя."
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "grid",
                      mods: {
                        coll: "9",
                        size: "3"
                      },
                      content: [
                        {
                          block: "video-button",
                          content: [
                            {
                              elem: "button"
                            },
                            {
                              elem: "title",
                              content: "Весь сайт в одном видео"
                            }
                          ]
                        }
                      ]

                    }

                  ]
                }
              ]

            }
          ]
        },
        {
          block: 'used-services',
          content: [
            {
              block: "head-services",
              content: "dsf"
            }
          ]
        },
      ]
    },
    {
      block: "hack"
    },

    { elem: 'js', url: '_index.js' }
  ]
});
