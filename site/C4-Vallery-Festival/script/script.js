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
    $("#slide .slide__wrap").append($("#slide .slide__wrap .slider").first().clone(true));

    setInterval(function() {
        currentIndex++;
        $("#slide .slide__wrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3) {
            setTimeout(function() {
                $("#slide .slide__wrap").animate({marginLeft: 0}, 0);  
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // popup
    $("#contents .cont1 ul li.popup_open").on("click", function() {
        $(".popup_view").show();
    });
    $(".popup_view .inner .btn_close .popup_close").on("click", function() {
        $(".popup_view").hide();
    });
});