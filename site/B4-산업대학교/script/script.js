$(document).ready(function() {
    // nav
    $("#header .nav > ul > li").on("mouseover", function() {
        $("#header .bg_nav").stop().slideDown(150);
        $("#header .nav > ul > li > ul").stop().slideDown(300);
    });
    $("#header .nav > ul > li").on("mouseleave", function() {
        $("#header .bg_nav").stop().slideUp(400);
        $("#header .nav > ul > li > ul").stop().slideUp(300);
    });

    // slider
    let currentIndex = 0;
    $("#slider .sliderWrap").append($(".slide").first().clone(true));

    setInterval(function() {
        currentIndex++;
        $("#slider .sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3) {
            setTimeout(function() {
                $("#slider .sliderWrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // popup
    $(".popup_open").on("click", function() {
        $(".popup_view").show();
    });
    $(".popup_close").on("click", function() {
        $(".popup_view").hide();
    });
});