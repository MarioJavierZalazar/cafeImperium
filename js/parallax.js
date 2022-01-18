$(document).ready(function(){
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .texto').css({
                'transform': 'translate(0px,' + scroll / 4 + '%)'
            });

            $('.nosotros article').css({
                'transform': 'translate(0px, -' + scroll / 6 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if( windowWidth < 800 ){
            $('.nosotros article').css({
                'transform': 'translate(0px, 0px)'
            });
        };
    });
});