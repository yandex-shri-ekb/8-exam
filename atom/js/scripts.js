$(function() {

    /*
     * DEFINE
     */

    var yel = $('.b-icons__yel'),
        red = $('.b-icons__red'),
        blu = $('.b-icons__blu'),
        wrap = $('.b-wrap'),
        icons = $('.b-icons'),
        helpr = $('.b-helper'),
        avatar = $('.b-avatar'),
        sbstrt = $('.b-substrate'),
        vidBut = $('.b-video-button'),
        sidebar = $('.b-sidebar'),
        helprIco = $('.b-helper__icon'),

        userY = $('.b-set-user__yel'),
        userR = $('.b-set-user__red'),
        userB = $('.b-set-user__blu'),

        descY = $('.b-set-user-desc__y'),
        descR = $('.b-set-user-desc__r'),
        descB = $('.b-set-user-desc__b'),

         docHght = $(document).height(),
        sec1Hght = $('.b-sect_num_1').height(),
        sub1Hght = $('.b-subsect_num_1').height(),
        sub2Hght = $('.b-subsect_num_2').height(),
        sub3Hght = $('.b-subsect_num_3').height(),
        sub4Hght = $('.b-subsect_num_4').height(),
        sec3Hght = $('.b-sect_num_3').height(),

        sideImg2 = $('.b-side-section-2__img'),
        sideImg3 = $('.b-side-section-3__img'),
        sideImg4 = $('.b-side-section-4__img'),
        sideImg5 = $('.b-side-section-5__img'),
        sideTxt2 = $('.b-side-section-2__text'),
        sideTxt3 = $('.b-side-section-3__text'),
        sideTxt4 = $('.b-side-section-4__text'),
        sideTxt5 = $('.b-side-section-5__text'),
        sideHdr2 = $('.b-side-section-2__header'),
        sideHdr3 = $('.b-side-section-3__header'),
        sideHdr4 = $('.b-side-section-4__header'),
        sideHdr5 = $('.b-side-section-5__header'),

        isAnimating = true,
        isFunctionRun = false;

    sidebar.height(docHght + 17).width($(document).width() - 954);
    sbstrt.height(docHght);

    // 'return'-functions

    function isWideScreen() {
        return ($(document).width() > 1812);
    }

    function showZone() {
        return (($(window).scrollTop() - 20 > sec1Hght) && 
                ($(window).scrollTop() + 20 < docHght - sec3Hght - $(window).height()));
    }

    function showDescrY() {
        descY.css({
            'display': 'block'
        });
        descR.css({
            'display': 'none'
        });
        descB.css({
            'display': 'none'
        });
    }

    function showDescrR() {
        descY.css({
            'display': 'none'
        });
        descR.css({
            'display': 'block'
        });
        descB.css({
            'display': 'none'
        });
    }

    function showDescrB() {
        descY.css({
            'display': 'none'
        });
        descR.css({
            'display': 'none'
        });
        descB.css({
            'display': 'block'
        });
    }

    // Active-object

    var Active = {
        isChangeUserFirstTime: true,
        val: '',
        addActiveClass: function() {
            switch (this.val) {
                case 'y':
                    yel.addClass('b-icons__yel_active_on');
                    red.removeClass('b-icons__red_active_on');
                    blu.removeClass('b-icons__blu_active_on');

                    userY.addClass('b-set-user__yel_act_yes');
                    userR.removeClass('b-set-user__red_act_yes');
                    userB.removeClass('b-set-user__blu_act_yes');

                    showDescrY();
                    avatar.attr('class','b-avatar b-avatar_usr_yel');

                    sideImg2.attr('class','b-side-section-2__img b-side-section-2__img_col_y');
                    sideImg3.attr('class','b-side-section-3__img b-side-section-3__img_col_y');
                    sideImg4.attr('class','b-side-section-4__img b-side-section-4__img_col_y');
                    sideImg5.attr('class','b-side-section-5__img b-side-section-5__img_col_y');

                    sideImg2.attr('src','blocks/b-side-section-2/img/_col/b-side-section-2__img_col_y.jpg');
                    sideImg3.attr('src','blocks/b-side-section-3/img/_col/b-side-section-3__img_col_y.jpg');
                    sideImg4.attr('src','blocks/b-side-section-4/img/_col/b-side-section-4__img_col_y.jpg');
                    sideImg5.attr('src','blocks/b-side-section-5/img/_col/b-side-section-5__img_col_y.jpg');

                    sideTxt2.text('Уже в результатах поиска Максим может уточнить удобные даты и перейти сразу на сай' +
                                  'т с подходящими ему вариантами.');
                    sideTxt3.text('Предложения на главной странице выбраны на основе информации о предпочтениях Макси' +
                                  'ма, полученных сайтом от «Атома».');
                    sideTxt4.text('Зная предпочтения Максима, сайт предлагает ему подходящий способ добраться до аэро' +
                                  'порта и рекомендует время отправления.');
                    sideTxt5.text('Когда Максим выбирает в интернете достопримечательности для посещения в путешестви' +
                                  'и, сайт предлагает ему обратить внимание и на другие объекты, которые могут быть е' +
                                  'му интересны.');

                    sideHdr2.text('Покупка авиабилетов');
                    sideHdr3.text('Рекомендации по покупке подходящих товаров');
                    sideHdr4.text('Предложение купить билет на аэроэкспресс');
                    sideHdr5.text('Выбор интересных мест для посещения');
                    break;

                case 'r':
                    yel.removeClass('b-icons__yel_active_on');
                    red.addClass('b-icons__red_active_on');
                    blu.removeClass('b-icons__blu_active_on');

                    userY.removeClass('b-set-user__yel_act_yes');
                    userR.addClass('b-set-user__red_act_yes');
                    userB.removeClass('b-set-user__blu_act_yes');

                    showDescrR();
                    avatar.attr('class','b-avatar b-avatar_usr_red');

                    sideImg2.attr('class','b-side-section-2__img b-side-section-2__img_col_r');
                    sideImg3.attr('class','b-side-section-3__img b-side-section-3__img_col_r');
                    sideImg4.attr('class','b-side-section-4__img b-side-section-4__img_col_r');
                    sideImg5.attr('class','b-side-section-5__img b-side-section-5__img_col_r');

                    sideImg2.attr('src','blocks/b-side-section-2/img/_col/b-side-section-2__img_col_r.jpg');
                    sideImg3.attr('src','blocks/b-side-section-3/img/_col/b-side-section-3__img_col_r.jpg');
                    sideImg4.attr('src','blocks/b-side-section-4/img/_col/b-side-section-4__img_col_r.jpg');
                    sideImg5.attr('src','blocks/b-side-section-5/img/_col/b-side-section-5__img_col_r.jpg');

                    sideTxt2.text('В острове Алексей Быков сразу указывает параметры для поиска тура. Из результатов ' +
                                  'убраны слишком дорогие и престижные для Алексея отели. В списке вариантов — туры, ' +
                                  'идеально подходящие для семейного отдыха с детьми.');
                    sideTxt3.text('Контактные линзы из прошлого заказа Алексея скоро должны подойти к концу. Сайт, на' +
                                  ' котором он обычно их приобретает, отправляет ему напоминание о повторной покупке ' +
                                  'с кнопкой перехода на предзаполненную форму заказа в один клик.');
                    sideTxt4.text('Алексею предлагается оптимальный маршрут с учётом времени вылета и прогнозом пробо' +
                                  'к.');
                    sideTxt5.text('При поиске ресторанов для посещения, сайт рекомендует Алексею места на основе инфо' +
                                  'рмации о его предпочтениях и вкусах.');

                    sideHdr2.text('Покупка тура');
                    sideHdr3.text('Напоминание от интернет-магазина');
                    sideHdr4.text('Рекомендация по времени выезда с учётом пробок на дорогах');
                    sideHdr5.text('Рекомендации по выбору ресторана');
                    break;

                default:
                    yel.removeClass('b-icons__yel_active_on');
                    red.removeClass('b-icons__red_active_on');
                    blu.addClass('b-icons__blu_active_on');

                    userY.removeClass('b-set-user__yel_act_yes');
                    userR.removeClass('b-set-user__red_act_yes');
                    userB.addClass('b-set-user__blu_act_yes');

                    showDescrB();
                    avatar.attr('class','b-avatar b-avatar_usr_blu');

                    sideImg2.attr('class','b-side-section-2__img b-side-section-2__img_col_b');
                    sideImg3.attr('class','b-side-section-3__img b-side-section-3__img_col_b');
                    sideImg4.attr('class','b-side-section-4__img b-side-section-4__img_col_b');
                    sideImg5.attr('class','b-side-section-5__img b-side-section-5__img_col_b');

                    sideImg2.attr('src','blocks/b-side-section-2/img/_col/b-side-section-2__img_col_b.jpg');
                    sideImg3.attr('src','blocks/b-side-section-3/img/_col/b-side-section-3__img_col_b.jpg');
                    sideImg4.attr('src','blocks/b-side-section-4/img/_col/b-side-section-4__img_col_b.jpg');
                    sideImg5.attr('src','blocks/b-side-section-5/img/_col/b-side-section-5__img_col_b.jpg');

                    sideTxt2.text('Список отелей, показанных на главной странице сайта бронирования, основан на получ' +
                                  'енных от «Атома» гипотезах. В списке на первых местах те отели, которые наверняка ' +
                                  'понравятся Григорию Иогановичу.');
                    sideTxt3.text('Сайт рекомендует Григорию Иогановичу различные товары, которые точно ему подойдут.');
                    sideTxt4.text('Григорию Иогановичу приходит уведомление с рекомендацией вызвать такси с учётом вр' +
                                  'емени отправления его рейса.');
                    sideTxt5.text('На сайте про оздоровительные процедуры в Таиланде Григорию Иогановичу сразу предла' +
                                  'гаются подходящие ему варианты, учитывающие его предпочтения.');

                    sideHdr2.text('Рекомендации по подбору отеля');
                    sideHdr3.text('Рекомендации по покупке подходящих товаров');
                    sideHdr4.text('Напоминание о заказе такси');
                    sideHdr5.text('Рекомендации по оздоровительным процедурам');
            }
        },
        setUser: function() {
            switch (this.val) {
                case 'y':
                    if(!this.isChangeUserFirstTime) {
                        wrap.animate({
                            'backgroundColor': '#ffe05d'
                        }, 300);
                        vidBut.animate({
                            'backgroundColor': '#ffe05d'
                        }, 300);
                    } else {
                        wrap.css({
                            'backgroundColor': '#ffe05d'
                        });
                        vidBut.css({
                            'backgroundColor': '#ffe05d'
                        });
                    }
                    break;

                case 'r':
                    if(!this.isChangeUserFirstTime) {
                        wrap.animate({
                            'backgroundColor': '#ff8282'
                        }, 300);
                        vidBut.animate({
                            'backgroundColor': '#ff8282'
                        }, 300);
                    } else {
                        wrap.css({
                            'backgroundColor': '#ff8282'
                        });
                        vidBut.css({
                            'backgroundColor': '#ff8282'
                        });
                    }
                    break;

                default:
                    if(!this.isChangeUserFirstTime) {
                        wrap.animate({
                            'backgroundColor': '#72c4f6'
                        }, 300);
                        vidBut.animate({
                            'backgroundColor': '#72c4f6'
                        }, 300);
                    } else {
                        wrap.css({
                            'backgroundColor': '#72c4f6'
                        });
                        vidBut.css({
                            'backgroundColor': '#72c4f6'
                        });
                    }
            }
            this.isChangeUserFirstTime = false;
        },
        changeStory: function(newStory) {
            if(!($(newStory).hasClass('oldStory'))) {
                $(newStory)
                    .css({
                        'display': 'block'
                    })
                    .animate({
                        'left': '36px'
                    }, 500);
                if($('.oldStory').length) {
                    $('.oldStory').animate({
                        'left': '1200px'
                    }, 500);
                    setTimeout(function() {
                        $('.oldStory').css({
                            'display': 'none',
                            'left': '-1200px'
                        });
                        $('.oldStory').removeClass('oldStory');
                    }, 550);
                }
                setTimeout(function() {
                    $(newStory).addClass('oldStory');
                }, 600);
            }
        },
        change: function(to) {
            if(!isFunctionRun && ((to) || (this.isChangeUserFirstTime))) {
                isFunctionRun = true;
                if(!(this.isChangeUserFirstTime)) {
                    this.val = to;
                } else {
                    var rndNum = Math.random();
                    this.val = rndNum < .33 ? 'y' : rndNum < .67 ? 'r' : 'b';
                }
                this.setUser(to);
                this.addActiveClass();
                this.changeStory('.b-story-' + this.val);
                setTimeout(function() {
                    isFunctionRun = false;
                }, 800);
            }
        }
    }

    // icons-functions

    function hideIcons() {
        icons
            .stop()
            .animate({
                'top': '-300px'
            }, 150);
        avatar
            .stop()
            .animate({
                'top': $(window).height() + 300 +'px'
            }, 150);
    }

    function showIcons() {
        var check = showZone();
        if(check) {
            var avatrPos = ($(window).height() - 200) / 2 + 'px',
                scrllTop = $(window).scrollTop();
            icons
                .stop()
                .animate({
                    'top': '50px'
                }, 150);
            avatar
                .stop()
                .animate({
                    'top': avatrPos
                }, 150);
        }
    }

    function checkIcons() {
        if($(window).scrollTop() - 20 <= sec1Hght + sub1Hght) {
            yel.attr('class','b-icons__yel b-icons__yel_subsect-num_1');
            red.attr('class','b-icons__red b-icons__red_subsect-num_1');
            blu.attr('class','b-icons__blu b-icons__blu_subsect-num_1');
            Active.addActiveClass();
        } else if(($(window).scrollTop() - 20 > sec1Hght + sub1Hght) &&
                  ($(window).scrollTop() - 20 <= sec1Hght + sub1Hght + sub2Hght)) {
            yel.attr('class','b-icons__yel b-icons__yel_subsect-num_2');
            red.attr('class','b-icons__red b-icons__red_subsect-num_2');
            blu.attr('class','b-icons__blu b-icons__blu_subsect-num_2');
            Active.addActiveClass();
        } else if(($(window).scrollTop() - 20 > sec1Hght + sub1Hght + sub2Hght) &&
                  ($(window).scrollTop() - 20 <= sec1Hght + sub1Hght + sub2Hght + sub3Hght)) {
            yel.attr('class','b-icons__yel b-icons__yel_subsect-num_3');
            red.attr('class','b-icons__red b-icons__red_subsect-num_3');
            blu.attr('class','b-icons__blu b-icons__blu_subsect-num_3');
            Active.addActiveClass();
        } else if($(window).scrollTop() - 20 > sec1Hght + sub1Hght + sub2Hght + sub3Hght) {
            yel.attr('class','b-icons__yel b-icons__yel_subsect-num_4');
            red.attr('class','b-icons__red b-icons__red_subsect-num_4');
            blu.attr('class','b-icons__blu b-icons__blu_subsect-num_4');
            Active.addActiveClass();
        }
    }

    function horizScrll() {
        var scrllLft = $(window).scrollLeft();
        if(scrllLft > 0) {
            icons.css({
                'left': (285 - scrllLft) + 'px'
            });
            avatar.css({
                'left': (371 - scrllLft) + 'px'
            });
        }
    }

    function changPos() {
        if(isAnimating) {
            var check = showZone();
            if(check) {
                checkIcons();
                horizScrll();
                showIcons();
            } else {
                hideIcons();
            }
        }
    }

    // sidebar-functions

    function showSide() {
        if(isAnimating && !isWideScreen()) {
            isAnimating = false;
            hideIcons();
            sbstrt.css({
                'display': 'block'
            });
            sidebar
                .animate({
                    'left': ($(document).width() - 858) + 'px',
                    'width': '858px'
                }, 300)
                .css({
                    'cursor': 'default'
                });
            helprIco.addClass('b-helper__icon_ico_cross');
        }
    }

    function hideSide() {
        sbstrt.css({
            'display': 'none'
        });
        sidebar
            .animate({
                'left': '954px',
                'width': ($(window).width() > 990 ? $(document).width() - 954 : 36) +'px'
            }, 300)
            .css({
                'cursor': 'pointer'
            });
        isAnimating = true;
        checkIcons();
        horizScrll();
        helprIco.removeClass('b-helper__icon_ico_cross');
        setTimeout(function() {
            showIcons()
        }, 150);
    }

    function windowResizing() {
        if(isWideScreen()) {
            sidebar.css({
                'left': '954px',
                'width': ($(window).width() - 954) + 'px'
            });
            if(sbstrt.css('display') != 'none') {
                sbstrt.css({
                    'display': 'none'
                });
            }
            if(!isAnimating) {
                isAnimating = true;
            }
            if(helpr.css('display') != 'none') {
                helpr.css({
                    'display': 'none'
                });
            }
            if(sidebar.css('cursor') != 'default') {
                sidebar.css({
                    'cursor': 'default'
                });
            }
        } else {
            if(isAnimating) {
                if(helpr.css('display') == 'none') {
                    helpr.css({
                        'display': 'block'
                    });
                }
                helprIco.removeClass('b-helper__icon_ico_cross');
                if(sidebar.css('cursor') == 'default') {
                    sidebar.css({
                        'cursor': 'pointer'
                    });
                }
                sidebar.width($(window).width() > 990 ? $(window).width() - 954 : 36);
            } else {
                sidebar.css({
                    'left': ($(window).width() > 990 ? $(window).width() - 858 : 132) + 'px',
                    'width': '858px'
                });
            }
        }
    }
    
    function closeModal() {
        $('.b-modal').css({
            'display': 'none'
        });
        $('.b-modal-substrate').css({
            'opacity': '0',
            'display': 'none'
        });
        $('.b-vimeo').remove();
    }

    function openModal() {
        $('.b-modal').css({
            'display': 'block'
        });
        $('.b-modal-main').append('<iframe class="b-vimeo" src="http://player.vimeo.com/video/75709551?title=0&amp;by' +
                                  'line=0&amp;portrait=0&amp;color=ffcc00&amp;autoplay=1" width="617" height="347" fr' +
                                  'ameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        $('.b-modal-substrate')
            .css({
                'display': 'block'
            })
            .animate({
                'opacity': '0.7'
            }, 300);
            
        $('.b-modal-substrate, .b-modal-main__close').click(function() {
            closeModal();
        });
    }

    function srollUp() {
        isAnimating = false;
        $('html, body').animate({
            scrollTop: $('.b-set-user__num_1').offset().top
        }, 2000);
        setTimeout(function() {
            isAnimating = true;
        }, 2000);
    }

    /*
     * RUN
     */

    Active.change();
    windowResizing();

    $(window)
        .scroll(function() {
            changPos();
        })
        .resize(function() {
            changPos();
            windowResizing();
        });

    userY
        .hover(function() {
            if(Active.val != 'y') {
                showDescrY();
            }
        }, function() {
            if(Active.val == 'r') {
                showDescrR();
            } else if(Active.val == 'b') {
                showDescrB();
            }
        })
        .click(function() {
            if($(this).hasClass('b-set-user__yel_scroll_yes') && (Active.val != 'y')) {
                srollUp();
            }
            Active.change('y');
        });

    userR
        .hover(function() {
            if(Active.val != 'r') {
                showDescrR();
            }
        }, function() {
            if(Active.val == 'y') {
                showDescrY();
            } else if(Active.val == 'b') {
                showDescrB();
            }
        })
        .click(function() {
            if($(this).hasClass('b-set-user__red_scroll_yes') && (Active.val != 'r')) {
                srollUp();
            }
            Active.change('r');
        });

    userB
        .hover(function() {
            if(Active.val != 'b') {
                showDescrB();
            }
        }, function() {
            if(Active.val == 'y') {
                showDescrY();
            } else if(Active.val == 'r') {
                showDescrR();
            }
        })
        .click(function() {
            if($(this).hasClass('b-set-user__blu_scroll_yes') && (Active.val != 'b')) {
                srollUp();
            }
            Active.change('b');
        });

    $('.b-video-button').click(function() {
        openModal();
    });

    yel.click(function() {
        Active.change('y');
    });
    red.click(function() {
        Active.change('r');
    });
    blu.click(function() {
        Active.change('b');
    });

    sidebar.click(function() {
        showSide()
    });

    $('.b-helper').click(function() {
        isAnimating ? showSide() : hideSide();
    });

    sbstrt.click(function() { hideSide() });

    if (!Modernizr.borderradius) {
        $('body').append('<link rel="stylesheet" href="css/no-borderradius.css">');
    }

    if (!Modernizr.boxshadow) {
        sidebar.prepend('<div class="b-sidebar__no-boxshadow"></div>');
        $('b-modal-shadow').prepend('<div class="b-modal-shadow__cor b-modal-shadow__cor_pos_bot-rig"></div>');
        $('body').append('<link rel="stylesheet" href="css/no-boxshadow.css">');
    }

    if (Modernizr.opacity) {
        $('body').append('<link rel="stylesheet" href="css/no-opacity.css">');
    }

    if (Modernizr.generatedcontent) {
        $('body').append('<link rel="stylesheet" href="css/no-generatedcontent.css">');
    }

});


