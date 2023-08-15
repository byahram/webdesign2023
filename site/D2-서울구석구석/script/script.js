$(document).ready(function() {
    // nav
    $("#header .nav > ul > li").on("mouseover", function() {
        $(this).find(".submenu").stop().slideDown(300);
    });
    $("#header .nav > ul > li").on("mouseleave", function() {
        $(this).find(".submenu").stop().slideUp(300);
    });

    // slider
    let currentIndex = 0;
    $("#slider .slider__wrap").append($("#slider .slider__wrap .slide").first().clone(true));

    setInterval(function() {
        currentIndex++;
        $("#slider .slider__wrap").animate({marginTop: -currentIndex * 400 + "px"}, 600);

        if(currentIndex == 3) {
            $("#slider .slider__wrap").animate({marginTop: 0}, 0);
            currentIndex = 0;
        }
    }, 3000);

    // tab
    let tabTit = $("#contents .content1 .c1_tit ul li");
    let tabCont = $("#contents .content1 .c1_cont > div");
    tabCont.hide().eq(0).show();

    tabTit.on("click", function() {
        let index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });
});