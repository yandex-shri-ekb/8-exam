$(document).ready(function() {

    /**
     * Видео от Яндекс.Видео
     */
    $(".button").click(function (){
        $(".shadow_back").css("display", "block");
        $(".video_popup").css("display", "block");
    });

    $(".shadow_back").click(function (){
        $(".shadow_back").css("display", "none");
        $(".video_popup").css("display", "none");
    });


    /**
     * Если размер экрана меньше, чем 990px:
     * - делаем правой блок "ссылкой"
     * - добавляем событие на клик на эту ссылку
     * - прописываем анимацию
     */

    function windowSize(){
        if ($(window).width() <= '1770'){
            $(".wrap_right_block").addClass("click");

            //При клике на правый блок (если клик доступен) прижимаем правый блок к экрану
            $(".click").click(function (){
                if ($(this).hasClass("open"))
                {
                    $(this).removeClass("open");
                    $(this).removeAttr("style");
                }
                else
                {
                    $(this).addClass("open");
                    $(this).animate({"right": "0"});
                }

            });

        } else if ($(window).width() > '1820'){
            $(".wrap_right_block").removeAttr("style");
            $(".wrap_right_block").removeClass("click");
            $(".wrap_right_block").removeClass("open");
            $(".wrap_right_block").css("margin","0 0 0 954px");
        } else if($(".wrap_right_block").hasClass("click")) {
            $(".wrap_right_block").removeClass("click");
        }

    }
    $(window).on('load resize',windowSize);


    /**
     * Переключение персонажей
     */

    function eventAdd(color, action){

         //Круг внизу
        $(".pers").removeClass("active");
        $("div.one_pers[title='"+color+"']").children().addClass("active");


        //Круг вверху
        $(".pers_footer").removeClass("active");
        $("div.one_pers_footer[title='"+color+"']").children().addClass("active");


        //Верхний лев_блок
        $(".left_block_one").css("background-color", color);

        //Кнопка
        $(".button").css("background-color", color);

        //Фон кругов вверх
        $(".left_block_three").css("background-color", color);

        //Фон кругов вверх
        $(".left_block_five").css("background-color", color);

        $(".actives").animate({left: "954"}, 100);
        if (color == "#ffe05d") {
            $("#boy").animate({left: "0"}, 100);
            $(".left_block_four").css("background", "#ffe05d");
        } else if(color == "#ff8282") {
            $("#man").animate({left: "0"}, 100);
            $(".left_block_four").css("background", "#ff8282");
        } else if(color == "#72c4f6") {
            $("#grademan").animate({left: "0"}, 100);
            $(".left_block_four").css("background", "#72c4f6");
        }
        setTimeout(function () {
            $(".actives").css("display", "none");
            $(".actives").css("left", "-972px");

            $(".actives").removeClass("actives");

            if (color == "#ffe05d") {
                $("#boy").addClass("actives");

                $(".right_block_three.yellow").css("display", "block");
                $(".right_block_four.yellow").css("display", "block");
                $(".right_block_five.yellow").css("display", "block");
                $(".right_block_six.yellow").css("display", "block");

                $(".right_block_three.red").css("display", "none");
                $(".right_block_three.blue").css("display", "none");
                $(".right_block_four.red").css("display", "none");
                $(".right_block_four.blue").css("display", "none");
                $(".right_block_five.red").css("display", "none");
                $(".right_block_five.blue").css("display", "none");
                $(".right_block_six.red").css("display", "none");
                $(".right_block_six.blue").css("display", "none");

            } else if(color == "#ff8282") {
                $("#man").addClass("actives");

                $(".right_block_three.red").css("display", "block");
                $(".right_block_four.red").css("display", "block");
                $(".right_block_five.red").css("display", "block");
                $(".right_block_six.red").css("display", "block");

                $(".right_block_three.yellow").css("display", "none");
                $(".right_block_three.blue").css("display", "none");
                $(".right_block_four.yellow").css("display", "none");
                $(".right_block_four.blue").css("display", "none");
                $(".right_block_five.yellow").css("display", "none");
                $(".right_block_five.blue").css("display", "none");
                $(".right_block_six.yellow").css("display", "none");
                $(".right_block_six.blue").css("display", "none");

            } else if(color == "#72c4f6") {
                $("#grademan").addClass("actives");

                $(".right_block_three.blue").css("display", "block");
                $(".right_block_four.blue").css("display", "block");
                $(".right_block_five.blue").css("display", "block");
                $(".right_block_six.blue").css("display", "block");

                $(".right_block_three.yellow").css("display", "none");
                $(".right_block_three.red").css("display", "none");
                $(".right_block_four.yellow").css("display", "none");
                $(".right_block_four.red").css("display", "none");
                $(".right_block_five.yellow").css("display", "none");
                $(".right_block_five.red").css("display", "none");
                $(".right_block_six.yellow").css("display", "none");
                $(".right_block_six.red").css("display", "none");
            }

        }, 250);
        $("#boy").css("display","block");
        $("#man").css("display","block");
        $("#grademan").css("display","block");

        //Если выбрали персонажа в подвале - скролим вверх
        if(action == "1") {
            /* Плавная прокрутка наверх */
            $('body, html').animate({
                scrollTop: 1000
            });

        }

    };

    $(".one_pers_footer").click(function (){
        var color = $(this).attr("title");
        var action = 1;
        eventAdd(color, action);

    });

    $(".one_pers").click(function (){
        var color = $(this).attr("title");
        var action = 0;
        eventAdd(color, action);
    });
});