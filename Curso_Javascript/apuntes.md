# Apuntes Javascript

## Variables

 Las variables son case-sensitive y cuando se declaran no se necesita especificar el tipo.
 
 Existen diferentes tipos de variables:
- var: Permite cambiar el valor o reescribir la variable. 
- let: Solo se puede declarar una vez (si se puede cambiar su valor y se puede declarar sin valor).
- const: Solo se puede declarar una vez (y se le debe asignar un valor).

Por ejemplo, para una variable auxiliar declarada en un for, deberíamos utilizar let (ya que solo estaría definida dentro del for (scope), al estilo C++).

Entonces utilizamos let si queremos que la variable pueda cambiar su valor y declarar variables sin valor, y const si queremos que la variable no pueda cambiar su valor. 
    
Con arrays, podemos utilizar const con metodos como push() o pop(). Esto también pasa con los Objetos, es decir, las propiedades de los mismos pueden cambiar. Incluso podemos añadir nuevas propiedades.

## Operadores de comparación

JavaScript tiene comparaciones estrictas y de conversión de tipos. Una comparación estricta (por ejemplo, ===) solo es verdadera si los operandos son del mismo tipo y los contenidos coinciden. La comparación abstracta más comúnmente utilizada (por ejemplo, ==) convierte los operandos al mismo tipo antes de hacer la comparación. 

Para las comparaciones abstractas relacionales (p. Ej., <=), Los operandos primero se convierten en primitivos, y luego en el mismo tipo, antes de la comparación.

Si ambos operandos son objetos, entonces JavaScript compara las referencias internas que son iguales cuando los operandos se refieren al mismo objeto en la memoria.

## Arrays

~~~
var array = [1,5,10,'aa',true];
var array = [1,5,10];
~~~

Además tenemos las funciones:
- Longitud: .length
- Añadir elemento al final: push()
- Eliminar último elemento: pop()
- Añadir elemento al principio: unshift()
- Eliminar el primer elemento: shift()
- Encontrar el índice: indexOf()
- Eliminar un elemento (por su indice): splice(,1)
- Copar un array: slice()

## Árbol DOM (Document Object Model)

Podemos acceder a todos los elementos del documento HTML mediante Javascript. En este caso mediante let h1 = document.getElementById("titulo"), siendo "titulo" el id de un elemento. Este método devuelve todo el elemento (h1 con sus respectivas propiedades). 

Por ejemplo, para acceder al texto, podemos utilizar o cambiar el valor h1.innerHTML. 
Por ejemplo, para cambiar los estilos utilizamos h1.style.color = "red", h1.style.background, etc...


## Eventos 

Tenemos varios tipos: click, mouseover, mouseout, cut, copy, etc. Se manejan con la siguiente función

[Página referencia](https://developer.mozilla.org/es/docs/Web/Events)

~~~
var boton = document.getElementById("boton");

boton.addEventListener('mouseover', function(){
    console.log('Has hecho click')
});
~~~

## Funciones flecha

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

A continuación algunos ejemplos de funciones flecha: 
~~~
const sumar = (num1,num2) => {
    return (num1+num2);
}
~~~

Si reciben solo un parámetro, se pueden suprimir los ():
~~~
const mensaje = nombre => ("Hola soy " + nombre)

const resultado = mensaje("Juan");

console.log(resultado) --> 'Hola soy Juan'
~~~

Además, podemos establecer parámetros por defecto:
~~~
const suma = (num = 0) => {
    console.log(num+3);
}

suma() --> 3
~~~


## Template string (plantillas literales)

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

~~~
const numero = (num1,num2) => (
    `el numero es ${num1+num2}`
    )

const resultado = numero(10,20)
console.log(resultado) --> 'el numero es 30'
~~~

## Objetos

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. 

Se pueden declarar objetos y sus propiedades de dos maneras distintas:

~~~
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
mascota.colores = ['blanco','negro','gris']

console.log(mascota.colores)
~~~

La otra forma es mediante el constructor de objeto. **NOTA:** Las propiedades no asignadas de un objeto son undefined (y​ no null).
~~~
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

myCar.color; // undefined: 
~~~

## Objects destructuring (Desestructuración de Objetos)

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

~~~
const {edad, nombre} = mascota
console.log(nombre)
~~~

## Arrays de Objetos

Podemos crear arrays de objetos, es decir, arrays que a su vez contienen otra serie de arrays con sus respectivos elementos. Para acceder a ellos, debemos tener cuidado con la sintaxis.

~~~
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

// Para acceder al enlace de youtube, que se encuentra en las redes sociales
const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

// También podemos utilizar desestructuración de objetos
const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)

//Para recorrer el array de objetos, podemos utilizar: 
const arrayObjetos = [{nombre: 'Juan', edad: 32}, {nombre: 'Clara', edad: 21}, {nombre: 'Flora}, edad 41}];

arrayObjetos.forEach(element => {
    console.log(element.nombre)
});
~~~

# Fetch (con APIs)

El siguiente código extrae información de una API pública (pokeapi) y muestra los elementos de diferentes Pokemons.
~~~
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => res.json())
    .then(data => {
        console.log(data)
        data.results.forEach(element => {
            console.log(element.name)
        });
    })
    .catch(error => console.log(error))
~~~

A continuación se detallan todos las funciones utilizadas en el código:
- Fetch: Espera una promesa, para eso utilizamos then()
- Then1: Utilizamos función de flecha (la respuesta (res) la debe devolver con formato JSON)
- Then2: Una vez que devolvemos el JSON, debemos obtener la información que nos interesa, la cual está en data.results. Para recorrerlo utilizamos un forEach (con función de flecha). Cada elemento  se guarda en element. 
- Catch: Usada para capturar los errores, del lado del servidor. 


# Async y await

A continuación se utilizan await y async. Las ideas fundamentales son:
- await solo funciona dentro de funciones async.*
- await: espera la respuesta de fetch, y se guarda en res.
- data: espera la respuesta de res.json().

En el siguiente código, utilizamos un esquema try/catch, el cual nos permite ejecutar un fragmento de código en try. Si ocurre algún error, este se captura y se procesa en catch.

Además, obtenemos la información de la API mediante fetch(). Añadimos un await, que indica una promesa y por tanto, espera a que la API devuelva la información. Se guarda en res.

Una vez tenemos los datos, los transformamos a JSON, mediante .json(). Añadimos un await, puesto que tiene que esperar en primer lugar a la respuesta de la API mediante fetch().
~~~
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
~~~

## MAP

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Recorre el array y devuelve la propiedad del mismo que especifiquemos dentro de la llamada a la función.

~~~
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
~~~

## Filter

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. En el fragmento de codigo se ha utilizado una función flecha, pero podemos invocar a una función creada con anterioridad.

~~~
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
~~~
