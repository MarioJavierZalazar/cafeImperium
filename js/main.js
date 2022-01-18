$(document).ready(function(){

       // efecto menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({top:'0'},2000 + (index * 500));
    });


    // efecto Header

    if($(window).width() > 800){
        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .texto').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

// Scroll

    var  nosotros = $('#nosotros').offset().top,
    carta = $('#laCarta').offset().top,
    img = $('#img').offset().top,
    locacion = $('#locacion').offset().top;
 
    $('#btn-nos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros 
        }, 500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: carta
        },500);
    });

    $('#btn-img').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: img
        },500);
    });

    $('#btn-loc').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: locacion
        },500);
    });


});
