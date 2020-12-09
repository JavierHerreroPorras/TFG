/*
Árbol DOM (Document Object Model)

    Podemos acceder a todos los elementos del documento HTML mediante Javascript. En este caso mediante
    let h1 = document.getElementById("titulo"), siendo "titulo" el id de un elemento. Este método devuelve 
    todo el elemento (h1 con sus respectivas propiedades). 

    Por ejemplo, para acceder al texto, podemos utilizar o cambiar el valor h1.innerHTML. 
    Por ejemplo, para cambiar los estilos utilizamos h1.style.color = "red", h1.style.background, etc...

var boton = document.getElementById("boton");

 Cada vez que se hace un click sobre el botón, llamamos a una función anónima (podemos invocar una función creada por nosotros mismos)

function cambiar(){
  parrafo.style.color = "olive";  
}

boton.onclick = cambiar --> 0j0: Invocar sin parentesis, porque si no la función se ejecuta de forma automatica. 

boton.onclick = function(){
    parrafo.style.color = "olive";
}

Podemos acceder a todos los elementos de la clase. Por ejemplo para cambiar estilos, etc.
var parrafo = document.getElementsByClassName('lead');

 Acceder al primer parrafo (p). Si queremos acceder a todos, utilizamos querySelectorAll
var parrafo = document.querySelector('p');

EVENTOS
var boton = document.getElementById("boton");

Esperando a que se realice una acción con botón click, mouseover, mouseout
boton.addEventListener('mouseover', function(){
    console.log('Has hecho click')
});
*/


const sumar = (num1,num2) => {
    return (num1+num2);
}

const mensaje = nombre => ("Hola soy " + nombre)

const resultado = mensaje("Juan");

console.log(resultado)

const suma = (num = 0) => {
    console.log(num+3);
}

suma()

/* TEMPLATE STRING*/
const numero = (num1,num2) => (
    `el numero es ${num1+num2}`
    )

const resultado = numero(10,20)
console.log(resultado)


/* OBJETOS: Las propiedades son pares clave: valor */
const mascota = {
    nombre: "Tom",
    edad: 10,
    vivo: true 
}

//Para acceder a sus propiedades
console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.vivo)

//Para añadir nuevas propiedades (Ojo, ahora se utiliza =)
mascota.id = 1

console.log(mascota)

//Añadimos una propiedad que es un array
mascota.dias = [1,7,9,15]

console.log(mascota.dias)

/* Destructuring Objectos--> Acceder a diferentes propiedades sin guardar en variables */

const {edad, nombre} = mascota
console.log(nombre)

/* Array de Objetos */
const web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        },
        facebook: {
            enlace: 'facebook.com/bluuweb',
            nombre: 'bluuweb fb'
        }
    }
}

const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

const {enlace, nombre} = web.redesSociales.youtube

console.log(enlace)
console.log(nombre)

/* Fetch con APIs 
    Fetch --> Espera una promesa, para eso utilizamos then
    Then1 --> Utilizamos función de flecha (la respuesta (res) la debe devolver con formato JSON)
    Then2 --> Una vez que devolvemos el JSON, debemos obtener la información que nos interesa, la cual
    está en data.results. Para recorrerlo utilizamos un forEach (con función de flecha). Cada elemento 
    se guarda en element. 
    Catch --> Usada para capturar los errores, del lado del servidor. 
*/

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => res.json())
    .then(data => {
        console.log(data)
        data.results.forEach(element => {
            console.log(element.name)
        });
    })
    .catch(error => console.log(error))


/* Async / await 

    - await solo funciona dentro de funciones async
    - await: espera la respuesta de fetch, y se guarda en res
    - data: espera la respuesta de res.json()
*/
const obtenerPokemons = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemons()



/* MAP recorre el array y devuelve solamente la propiedad name (especificada dentro de la función)
*/
const obtenerPokemons = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        //console.log(data)
        const arrayNombres = data.results.map(poke => poke.name)
        console.log(arrayNombres)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemons()

/* FILTER devuelve los elementos de un array que cumplan una condición */
const obtenerPokemons = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        //console.log(data)
        const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur')
        console.log(arrayNombres)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemons()