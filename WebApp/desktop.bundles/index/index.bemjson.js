({
  block: 'page',
  title: 'Title of the page',
  favicon: '/favicon.ico',
  head: [
    { elem: 'css', url: 'index/_index.css', ie: false },
    { elem: 'css', url: 'index/_index.ie.css', ie: 'gte IE 6' },
    { elem: 'meta', attrs: { name: 'description', content: '' }},
    { elem: 'js', url: '/jquery-1.10.2.min.js' },
    { elem: 'js', url: '_index.js' }
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
                      block: "introductory-text",
                      mix: [
                        {
                          block: "grid",
                          mods: {
                            coll: "2",
                            size: "6"
                          }

                        }
                      ],
                      content: [
                        {
                          elem: "paragraf",
                          content: "Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под конкретного пользователя и готов поделиться этой технологией с другими."
                        },
                        {
                          elem: "paragraf",
                          content: "«Атом». Технологическая платформа, задача которой — предоставить сайтам возможность изменять содержание страниц под конкретного пользователя."
                        }
                      ]
                    },
                    {
                      block: "video-button",
                      mix: [
                        {
                          block: "grid",
                          mods: {
                            coll: "9",
                            size: "3"
                          }
                        }
                      ],
                      content: [
                        {
                          elem: "button",
                          content: [
                            {
                              elem: "max"
                            },
                            {
                              elem: "alex"
                            },
                            {
                              elem: "grig"
                            }
                          ]
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
            },
            {
              block: 'select-person',
              content: [
                {
                  block: 'grid-wrap',
                  content: [
                    {
                      block: "grid",
                      mods: {
                        coll: "3",
                        size: "2"
                      },
                      content: [
                        {
                          block: 'select-max'
                        },
                        {
                          block: 'person-name',
                          content: "Максим"
                        }
                      ]
                    },
                    {
                      block: "grid",
                      mods: {
                        coll: "6",
                        size: "2"
                      },
                      content: [
                        {
                          block: 'select-alex'
                        },
                        {
                          block: 'person-name',
                          content: "Алексей"
                        }
                      ]
                    },
                    {
                      block: "grid",
                      mods: {
                        coll: "9",
                        size: "2"
                      },
                      content: [
                        {
                          block: 'select-grig'
                        },
                        {
                          block: 'person-name',
                          content: "Григорий И. Дауге"
                        }
                      ]
                    }
                  ]
                }

              ]

            },
            {
              block: 'person-description',
              content: [
                {
                  block: 'grid-wrap',
                  content: [
                    {
                      block: 'max-description',
                      content: 'Предпочитает путешествовать самостоятельно и налегке. Уверен, что только так можно проникнуться культурой страны.',
                      mix: [
                        {
                          block: 'grid',
                          mods: {
                            coll: "2",
                            size: "4"
                          }
                        }
                      ]
                    },
                    {
                      block: 'alex-description',
                      content: 'В отпуск ездит вместе с женой и дочкой. Считает, что отдыхать лучше всего в отелях на побережье.',
                      mix: [
                        {
                          block: 'grid',
                          mods: {
                            coll: "5",
                            size: "4"
                          }
                        }
                      ]
                    },
                    {
                      block: 'grig-description',
                      content: 'Очень дорожит редкими отпусками и превыше всего ценит комфорт и качество обслуживания.',
                      mix: [
                        {
                          block: 'grid',
                          mods: {
                            coll: "8",
                            size: "4"
                          }
                        }
                      ]
                    }

                  ]
                }
              ]
            },
            {
              block: 'person-history',
              content: [
                {
                  block: 'history-max'
                },
                {
                  block: 'history-alex'
                },
                {
                  block: 'history-grig'
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
        }
      ]
    },
    {
      block: "hack"
    }
  ]
});
