/*
Árbol DOM (Document Object Model)

    Podemos acceder a todos los elementos del documento HTML mediante Javascript. En este caso mediante
    let h1 = document.getElementById("titulo"), siendo "titulo" el id de un elemento. Este método devuelve 
    todo el elemento (h1 con sus respectivas propiedades). 

    Por ejemplo, para acceder al texto, podemos utilizar o cambiar el valor h1.innerHTML. 
    Por ejemplo, para cambiar los estilos utilizamos h1.style.color = "red", h1.style.background, etc...
 */

var boton = document.getElementById("boton");

// Cada vez que se hace un click sobre el botón, llamamos a una función anónima (podemos invocar una función creada por nosotros mismos)
/*
function cambiar(){
  parrafo.style.color = "olive";  
}

boton.onclick = cambiar --> 0j0: Invocar sin parentesis, porque si no la función se ejecuta de forma automatica. 
*/
/*boton.onclick = function(){
    parrafo.style.color = "olive";
}*/

//Podemos acceder a todos los elementos de la clase. Por ejemplo para cambiar estilos, etc.
var parrafo = document.getElementsByClassName('lead');

// Acceder al primer parrafo (p). Si queremos acceder a todos, utilizamos querySelectorAll
var parrafo = document.querySelector('p');

/* EVENTOS */
var boton = document.getElementById("boton");

//Esperando a que se realice una acción con botón
// click, mouseover, mouseout
boton.addEventListener('mouseover', function(){
    console.log('Has hecho click')
});

