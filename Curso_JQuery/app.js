$(document).ready(function () {
 
/*
    //html() sustituye el contenido de los elementos h1
    $("h1").html('Etiqueta h1');
    //Al ser una clase, utilizamos .
    $('.display-4').html('desde clase');
    //Para seleccionar un id, utilizamos # 
    $("#idh1").html('desde id');
*/

/*
    //Seleccionar los h1 dentro de los container
    $(".container h1").html("Cambio de texto");

    //Para seleccionar el primero o el ultimo usamos :first o :last
    $(".container h1:first").html("Cambio de texto");
*/

/*
    //Agregar o quitar clases Bootstrap

    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');
*/

/*
    //Agregar elemento (final e inicio)
    $('#contenido').append('<h1>Elemento al final</h1>');
    $('#contenido').prepend('<h1>Elemento al principio</h1>');
*/

/*
    //Cambiar estilos CSS
    $('#color-azul').css('color', 'blue');
    $('#color-azul').css({color: 'blue', background:'salmon', padding:'20px'});
*/

/*
    //Borrar un elemento
    $('#color-azul').remove();

    //Ocultar elemento
    $('#color-azul').hide();
*/
/*
    //Añadir atributos a un elemento
    $('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ocqejkcDYl0opgPBLsgJY9tMGUe3_eOUjw&usqp=CAU');

    $('img:last').attr('width','50');
*/

/*
    let parrafo = $('#resultado p')
    //Eventos, en este caso con click
    $('.btn-primary').click(function(){
        parrafo.addClass('display-4');
    })

    $('.btn-danger').click(function() { 
        parrafo.removeClass('display-4');
    });

    $('.btn-warning').click(function(){
        parrafo.toggleClass('display-4');
    })
*/

/*
    //Trabajando con formularios
    $('#formulario').submit(function(e){
        e.preventDefault();
        let nombre = $('#nombre').val();
        console.log(nombre);
    })
*/

    //Trabajar con efectos (sobre el div)

    let resultado = $('#resultado')

    //Eventos, en este caso con click
    $('.btn-primary').click(function(){
        //resultado.hide(500);
        resultado.fadeOut(3000);
    })

    $('.btn-danger').click(function() { 
        //resultado.show(500);
        resultado.fadeIn(2000);
    });

    $('.btn-warning').click(function(){
        resultado.toggle(500);
    })


});



