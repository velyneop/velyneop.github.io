$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px' // Movendo para cima
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '0px' // Voltando à posição original
        }, 'slow');
    });
});