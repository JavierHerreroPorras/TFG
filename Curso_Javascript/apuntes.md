# Apuntes Javascript

# Variables

 Las variables son case-sensitive y cuando se declaran no se necesita especificar el tipo.
 
 Existen diferentes tipos de variables:
    - var: Permite cambiar el valor o reescribir la variable. 
    - let: Solo se puede declarar una vez (si se puede cambiar su valor y se puede declarar sin valor).
    - const: Solo se puede declarar una vez (y se le debe asignar un valor).

Por ejemplo, para una variable auxiliar declarada en un for, deberíamos utilizar let (ya que solo estaría definida dentro del for (scope), al estilo C++).

Entonces utilizamos let si queremos que la variable pueda cambiar su valor y declarar variables sin valor, y const si queremos que la variable no pueda cambiar su valor. 
    
Con arrays, podemos utilizar const con metodos como push() o pop(). Esto también pasa con los Objetos, es decir, las propiedades de los mismos pueden cambiar. 

# Operadores de comparación

JavaScript tiene comparaciones estrictas y de conversión de tipos. Una comparación estricta (por ejemplo, ===) solo es verdadera si los operandos son del mismo tipo y los contenidos coinciden. La comparación abstracta más comúnmente utilizada (por ejemplo, ==) convierte los operandos al mismo tipo antes de hacer la comparación. 

Para las comparaciones abstractas relacionales (p. Ej., <=), Los operandos primero se convierten en primitivos, y luego en el mismo tipo, antes de la comparación.

Si ambos operandos son objetos, entonces JavaScript compara las referencias internas que son iguales cuando los operandos se refieren al mismo objeto en la memoria.

# Arrays

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

# Árbol DOM (Document Object Model)

Podemos acceder a todos los elementos del documento HTML mediante Javascript. En este caso mediante let h1 = document.getElementById("titulo"), siendo "titulo" el id de un elemento. Este método devuelve todo el elemento (h1 con sus respectivas propiedades). 

Por ejemplo, para acceder al texto, podemos utilizar o cambiar el valor h1.innerHTML. 
Por ejemplo, para cambiar los estilos utilizamos h1.style.color = "red", h1.style.background, etc...


# Eventos 

Tenemos varios tipos: click, mouseover, mouseout, cut, copy, etc. Se manejan con la siguiente función

[Página referencia](https://developer.mozilla.org/es/docs/Web/Events)

~~~
var boton = document.getElementById("boton");

boton.addEventListener('mouseover', function(){
    console.log('Has hecho click')
});
~~~

