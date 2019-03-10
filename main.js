// $(document).ready(function(){
//     $(".close-menu").click(function(){
//         $('.sidebar').removeClass("sidebar_open");
//         $('.main').removeClass("main_open");
//     });
//     $(".parent").children().each(function(){
//         $(this).on('click',function(){

//            $(this).parent().children().each(function(){
//                if($(this).hasClass("dropdown__menu")===true){
//                    $(this).children(".dropdown_child").removeClass("active");
//                }
//            });
//            if($(this).hasClass("dropdown__menu")===true){
//                $(this).children(".dropdown_child").toggleClass("active");
//            }
//         });
//     });
//     $(".open-menu").click(function(){
//         $('.sidebar').addClass("sidebar_open");
//         $('.main').addClass("main_open");
//     });
// });
$(document).ready(function(){
    $(".left-show").on('click',function(){
        $(".sidebar").removeClass("sidebar-hide");
        $(".main").removeClass("main-hide-sidebar");
        $(".right-hidden").show();
        $(".left-show").hide();
        $(".path").css({"left":"190px"});
    });

    $(".right-hidden").on('click',function(){
        $(".sidebar").addClass("sidebar-hide");
        $(".main").addClass("main-hide-sidebar");
        $(".right-hidden").hide();
        $(".left-show").css({"display":"block"});
        $(".path").css({"left":"15px"});
    });
    // $(".sidebar").on('click',function(){
    //     if($(".sidebar").hasClass(".sidebar-hide")===true){
    //         $(this).on('click',function(){
    //             $(".sidebar-menu").addClass("menu-show");
    //             $(".sidebar-menu").removeClass("menu-hide");
    //         });
    //     }
    //     else {
    //         $(".sidebar-menu").addClass("menu-hide");
    //         $(".sidebar-menu").removeClass("menu-show");
    //     }
    // })
    $('.item').each(function(){
        $(this).on('click',function(){
            var active = $(this).parent().find(".item");
            if( active.hasClass('open')){
                $(this).removeClass('open');
            }
        $(this).addClass('open');
        });
    });
        
});