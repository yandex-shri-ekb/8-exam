$(document).ready(function(){
	randomPerson();
    floatingSwitch();
    lightboxToggle();
    toggleRightSide();
    switchingPerson();
    hoverPerson();
    switchingPersonFloat();
    changeStatusPerson();
    topAfterClickPersonBottom();
    openCloseIconToggle();
});

$( window ).resize(function() {

    toggleRightSide();

});


function toggleRightSide(){

    var rightSide = $('.b-right-side');


    if($(window).width()< 1800){

        rightSide.css('cursor', 'pointer');
        $('.open-icon').show();


        rightSide.toggle(function(){
            $('.open-icon').removeClass('open-icon').addClass('close-icon');
            var windowWidth = $(window).width();
            var leftMargin = windowWidth-810;

            $(this).animate({
                left: leftMargin
            }, 500);
            }, function(){
                $('.close-icon').removeClass('close-icon').addClass('open-icon');
                $('.b-right-side').animate({
                    left: "970px"
                }, 500);

        });

    } else{

        $('.b-right-side').css('cursor', 'default');
        $('.b-right-side').animate({
            left: "970px"
        }, 500);
        $('.open-icon, .close-icon').hide();

    };

}

function initSwitch(onclick, hasmax, hasalex, hasgeorgiy){

    onclick.click(function(){


        if($(this).hasClass(hasmax)){

            toggleClassActivePerson($('.b-person-avatar_max_small'), 'b-container_blue', 'b-container_red', 'b-container_yellow', $('.b-story-max'), $('.b-right-side__max'));

        }
        if($(this).hasClass(hasalex)){

            toggleClassActivePerson($('.b-person-avatar_alex_small'), 'b-container_blue', 'b-container_yellow', 'b-container_red', $('.b-story-alex'), $('.b-right-side__alex'));

        }
        if($(this).hasClass(hasgeorgiy)){

            toggleClassActivePerson($('.b-person-avatar_georgiy_small'),'b-container_yellow' , 'b-container_red', 'b-container_blue', $('.b-story-georgiy'), $('.b-right-side__georgiy'));
        }
        else{
            return false;
        }

    });

}

function switchingPerson(){

    initSwitch($('.b-person-avatar'), 'b-person-avatar_max_small', 'b-person-avatar_alex_small', 'b-person-avatar_georgiy_small' );

}

function switchingPersonFloat(){

    initSwitch($('.b-float-switch__item'), 'b-float-switch__item_max', 'b-float-switch__item_alex', 'b-float-switch__item_georgiy' );
    $('.b-float-switch__item').click(function(){
        $('.b-float-switch').find('.b-float-switch__item').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('b-float-switch__item_max')){
            $('.b-float-person').removeClass('b-float-person_alex b-float-person_georgiy').addClass('b-float-person_max');
        }
        if($(this).hasClass('b-float-switch__item_alex')){
            $('.b-float-person').removeClass('b-float-person_max b-float-person_georgiy').addClass('b-float-person_alex');
        }
        if($(this).hasClass('b-float-switch__item_georgiy')){
            $('.b-float-person').removeClass('b-float-person_alex b-float-person_max').addClass('b-float-person_georgiy');
        }
    });
}


function changeStatusPerson(){

    $(window).scroll(function(){
        if(($('.b-person-description').offset().top - $(window).scrollTop()) < (-195) && ($('.b-person-description').offset().top - $(window).scrollTop()) > (-896)){
            $('.b-float-switch__item_max').removeClass('b-float-switch__item_max-dress b-float-switch__item_max-train b-float-switch__item_max-moped').addClass('b-float-switch__item_max-liner');
            $('.b-float-switch__item_alex').removeClass('b-float-switch__item_alex-eye b-float-switch__item_alex-car b-float-switch__item_alex-drink').addClass('b-float-switch__item_alex-ticket');
            $('.b-float-switch__item_georgiy').removeClass('b-float-switch__item_georgiy-driving b-float-switch__item_georgiy-taxi b-float-switch__item_georgiy-yoga').addClass('b-float-switch__item_georgiy-bed');
        }
        if(($('.b-person-description').offset().top - $(window).scrollTop()) < (-895) && ($('.b-person-description').offset().top - $(window).scrollTop()) > (-1795)){
            $('.b-float-switch__item_max').removeClass('b-float-switch__item_max-liner b-float-switch__item_max-train b-float-switch__item_max-moped').addClass('b-float-switch__item_max-dress');
            $('.b-float-switch__item_alex').removeClass('b-float-switch__item_alex-ticket b-float-switch__item_alex-car b-float-switch__item_alex-drink').addClass('b-float-switch__item_alex-eye');
            $('.b-float-switch__item_georgiy').removeClass('b-float-switch__item_georgiy-bed b-float-switch__item_georgiy-taxi b-float-switch__item_georgiy-yoga').addClass('b-float-switch__item_georgiy-driving');
        }
        if(($('.b-person-description').offset().top - $(window).scrollTop()) < (-1796) && ($('.b-person-description').offset().top - $(window).scrollTop()) > (-2495)){
            $('.b-float-switch__item_max').removeClass('b-float-switch__item_max-liner b-float-switch__item_max-dress b-float-switch__item_max-moped').addClass('b-float-switch__item_max-train');
            $('.b-float-switch__item_alex').removeClass('b-float-switch__item_alex-ticket b-float-switch__item_alex-eye b-float-switch__item_alex-drink').addClass('b-float-switch__item_alex-car');
            $('.b-float-switch__item_georgiy').removeClass('b-float-switch__item_georgiy-bed b-float-switch__item_georgiy-driving b-float-switch__item_georgiy-yoga').addClass('b-float-switch__item_georgiy-taxi');
        }
         if(($('.b-person-description').offset().top - $(window).scrollTop()) < (-2496)){
            $('.b-float-switch__item_max').removeClass('b-float-switch__item_max-liner b-float-switch__item_max-train b-float-switch__item_max-dress').addClass('b-float-switch__item_max-moped');
            $('.b-float-switch__item_alex').removeClass('b-float-switch__item_alex-ticket b-float-switch__item_alex-car b-float-switch__item_alex-eye').addClass('b-float-switch__item_alex-drink');
            $('.b-float-switch__item_georgiy').removeClass('b-float-switch__item_georgiy-bed b-float-switch__item_georgiy-taxi b-float-switch__item_georgiy-driving').addClass('b-float-switch__item_georgiy-yoga');
        }
    });

}


function toggleClassActivePerson(small, remove1, remove2, add, story, side){
    $('.b-person-avatar').removeClass('active');
    small.addClass('active');
    $('.b-container').removeClass(remove1).removeClass(remove2).addClass(add);
    $('.b-story').removeClass('active');
    story.addClass('active');
    $('.b-right-side_story').removeClass('active');
    side.addClass('active');
};

function hoverPerson(){

    $('.b-first-block__person .b-person-avatar_max_small').hover(function(){
        $('.b-person-description__item_left').show();
    }, function(){
            $('.b-person-description__item_left').hide();
        }

    );
    $('.b-first-block__person .b-person-avatar_alex_small').hover(function(){
        $('.b-person-description__item_middle').show();
        }, function(){
            $('.b-person-description__item_middle').hide();
        }

    );
    $('.b-first-block__person .b-person-avatar_georgiy_small').hover(function(){
        $('.b-person-description__item_right').show();
        }, function(){
            $('.b-person-description__item_right').hide();
        }

    );

}


function lightboxToggle(){
    var body = $('html, body');
    var modal_container = $('.b-lightbox__overflow');
    var modal_custom = $('.b-lightbox__custom');

    $('.open-lightbox').on('click', function(){
        body.css('overflow-y','hidden');
        $('.b-wrapper').css('overflow-y','hidden');
        $('.b-lightbox__content iframe').attr('src', '//player.vimeo.com/video/75709551?title=0&amp;byline=0&amp;portrait=0&amp;color=ffcc00');
        modal_container.animate({opacity: "show"}, 300);
        modal_custom.animate({ top: '50%' }, 500);
        return false;
    });


    modal_container.click( function(){
        $('.b-lightbox__content iframe').removeAttr('src');
        modal_custom.animate({ top: '-1000px' }, 500);
        modal_container.animate({opacity: "hide"}, 1000);
        setTimeout(function () {
            body.css('overflow-y','auto');
            $('.b-wrapper').css('overflow-y','auto');
        }, 500);

    });
}

function floatingSwitch(){
    $(window).scroll(function(){
        if(($('.b-first-block__person').offset().top - $(window).scrollTop()) < (-410) && ($('.b-first-block__person').offset().top - $(window).scrollTop()) > (-2895)) {

            $('.b-float-switch').find('.b-float-switch__item').removeClass('active');
            if($('.b-container').hasClass('b-container_yellow')){
                $('.b-float-person').removeClass('b-float-person_alex b-float-person_georgiy');
                $('.b-float-person').addClass('b-float-person_max');
                $('.b-float-switch__item_max').addClass('active');
            }

            if($('.b-container').hasClass('b-container_red')){
                $('.b-float-person').removeClass('b-float-person_max b-float-person_georgiy');
                $('.b-float-person').addClass('b-float-person_alex');
                $('.b-float-switch__item_alex').addClass('active');

            }

            if($('.b-container').hasClass('b-container_blue')){
                $('.b-float-person').removeClass('b-float-person_max b-float-person_alex');
                $('.b-float-person').addClass('b-float-person_georgiy');
                $('.b-float-switch__item_georgiy').addClass('active');
            }

            $('.b-float-switch').fadeIn(500);
            $('.b-float-person').fadeIn(500);

        } else{
            $('.b-float-switch').fadeOut(500);
            $('.b-float-person').fadeOut(500);
        }
    });
}

function topAfterClickPersonBottom(){
    $('.b-person_bottom .b-person-avatar').click(function(){
        $('html, body').animate({scrollTop: 1500}, 'slow')
    });
}


function randomPerson(){

	var themPerson= [
		{param1: $('.b-person-avatar_max_small'), param2: 'b-container_blue', param3: 'b-container_red', param4: 'b-container_yellow', param5: $('.b-story-max'), param6: $('.b-right-side__max')},
		{param1: $('.b-person-avatar_alex_small'), param2: 'b-container_blue', param3: 'b-container_yellow', param4: 'b-container_red', param5: $('.b-story-alex'), param6: $('.b-right-side__alex')},
		{param1: $('.b-person-avatar_georgiy_small'), param2: 'b-container_yellow', param3: 'b-container_red', param4: 'b-container_blue', param5: $('.b-story-georgiy'), param6: $('.b-right-side__georgiy')}
	]

	var number = Math.floor(Math.random()*(3-0+1)+0);
	var parametrs = themPerson [number]  
	
	toggleClassActivePerson(parametrs.param1, parametrs.param2, parametrs.param3, parametrs.param4, parametrs.param5, parametrs.param6);  

}


function openCloseIconToggle(){
    $('.open-close-icon').click(function(){
        if($(this).hasClass('open-icon')){
            var windowWidth = $(window).width();
            var leftMargin = windowWidth-810;
            $(this).removeClass('open-icon').addClass('close-icon');
            $('.b-right-side').animate({
                left: leftMargin
            }, 500);
        }else{
            $('.close-icon').removeClass('close-icon').addClass('open-icon');
            $('.b-right-side').animate({
                left: "970px"
            }, 500);
        }

    });
}