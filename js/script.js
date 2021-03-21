/* Activador de jQuery   Funcion principal de jQuery */
$(document).ready(function() { 

    // Activación de transición del menú principal y del menú movil
    $('header article nav a, aside#menu-moviles nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    /* Funciones de abrir y cerrar el menú responsive */
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },300,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault()
    });

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            right: -290
        },300,'easeOutExpo');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });

    $('#img_sandwiches').click(function(){
        var bandera = $('#sandwiches_clasicos').attr('open_sec');
        if(bandera == 'si'){
            $('#sandwiches_clasicos').hide();
            $('#sandwiches_clasicos').attr('open_sec', 'no');
        } else{
            $('#entradas').hide();
            $('#entradas').attr('open_sec', 'no');
            $('#bebidas').hide();
            $('#bebidas').attr('open_sec', 'no');
            $('#postres').hide();
            $('#postres').attr('open_sec', 'no');
            $('#sandwiches_clasicos').show();
            $('#sandwiches_clasicos').attr('open_sec', 'si'); 

        }
    });

    $('#img_entradas').click(function(){
        var bandera = $('#entradas').attr('open_sec');
        if(bandera == 'si'){
            $('#entradas').hide();
            $('#entradas').attr('open_sec', 'no');
        } else{
            $('#sandwiches_clasicos').hide();
            $('#sandwiches_clasicos').attr('open_sec', 'no');
            $('bebidas').hide();
            $('bebidas').attr('open_sec', 'no');
            $('#postres').hide();
            $('#postres').attr('open_sec', 'no');
            $('#entradas').show();
            $('#entradas').attr('open_sec', 'si');

        }
    });

    $('#img_bebidas').click(function(){
        var bandera = $('#bebidas').attr('open_sec');
        if(bandera == 'si'){
            $('#bebidas').hide();
            $('#bebidas').attr('open_sec', 'no');
        } else{
            $('#sandwiches_clasicos').hide();
            $('#sandwiches_clasicos').attr('open_sec', 'no');
            $('#entradas').hide();
            $('#entradas').attr('open_sec', 'no');
            $('#postres').hide();
            $('#postres').attr('open_sec', 'no');
            $('#bebidas').show();
            $('#bebidas').attr('open_sec', 'si');

        }
    });

    $('#img_postres').click(function(){
        var bandera = $('#postres').attr('open_sec');
        if(bandera == 'si'){
            $('#postres').hide();
            $('#postres').attr('open_sec', 'no');
        } else{
            $('#sandwiches_clasicos').hide();
            $('#sandwiches_clasicos').attr('open_sec', 'no');
            $('#entradas').hide();
            $('#entradas').attr('open_sec', 'no');
            $('#bebidas').hide();
            $('#bebidas').attr('open_sec', 'no');
            $('#postres').show();
            $('#postres').attr('open_sec', 'si');

        }
    });
});