$(document).ready(function() {

    /**
     * Если размер экрана меньше, чем 990px:
     * - делаем правой блок "ссылкой"
     * - добавляем событие на клик на эту ссылку
     * - прописываем анимацию
     */

    function windowSize(){
        if ($(window).width() <= '1770'){
            $(".right_block").addClass("click");

            //При клике на правый блок (если клик доступен) прижимаем правый блок к экрану                              //ВЫНЕСТИ ЗА ФУНКЦИЮ!
            $(".click").click(function (){
                if ($(this).hasClass("open"))
                {
                    $(this).removeClass("open");
                    $(this).removeAttr("style");
                }
                else
                {
                    $(this).addClass("open");
                    $(this).animate({"right": "0"});                                                                    //ДОБАВИТЬ ОБРАТНУЮ АНИМАЦИЮ
                }

            });

        }

        else if ($(window).width() > '1820'){
            $(".right_block").removeAttr("style");
            $(".right_block").removeClass("click");
            $(".right_block").removeClass("open");
            $(".right_block").css("margin","0 0 0 952px");
        } else if($(".right_block").hasClass("click")) {
            $(".right_block").removeClass("click");
        }

    }
    $(window).on('load resize',windowSize);


    /**
     * Переключение персонажей
     */
    $(".one_pers").click(function (){

        var color = $(this).attr("name");

        //Круг вверху
        $(".pers").removeClass("active");
        $(this).children().addClass("active");

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
            $(".actives").css("left", "-954px");

            $(".actives").removeClass("actives");

            if (color == "#ffe05d") {
                $("#boy").addClass("actives");

                $(".right_block_three.yellow").css("display", "block");
                $(".right_block_four.yellow").css("display", "block");

                $(".right_block_three.red").css("display", "none");
                $(".right_block_three.blue").css("display", "none");
                $(".right_block_four.red").css("display", "none");
                $(".right_block_four.blue").css("display", "none");

            } else if(color == "#ff8282") {
                $("#man").addClass("actives");

                $(".right_block_three.red").css("display", "block");
                $(".right_block_four.red").css("display", "block");

                $(".right_block_three.yellow").css("display", "none");
                $(".right_block_three.blue").css("display", "none");
                $(".right_block_four.yellow").css("display", "none");
                $(".right_block_four.blue").css("display", "none");

            } else if(color == "#72c4f6") {
                $("#grademan").addClass("actives");

                $(".right_block_three.blue").css("display", "block");
                $(".right_block_four.blue").css("display", "block");

                $(".right_block_three.yellow").css("display", "none");
                $(".right_block_three.red").css("display", "none");
                $(".right_block_four.yellow").css("display", "none");
                $(".right_block_four.red").css("display", "none");
            }

        }, 250);
        $("#boy").css("display","block");
        $("#man").css("display","block");
        $("#grademan").css("display","block");
    });
});