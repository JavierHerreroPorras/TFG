# Apuntes curso Markdown

## Instancia de Vue

Se crea cuando la aplicación de Vue comienza, mediante la sentencia:
~~~
var vm = new Vue({
  // opciones
})  
~~~ 

Una instancia de Vue contiene los siguientes elementos (son reactivas, la vista cambia si los datos son modificados es decir, si ya existían cuando se creó la instancia):
- el: Elemento del DOM sobre el que se montará la instancia de Vue.
- data: Es un objeto de datos para la instancia. Los objetos deben ser simples y, debe declararse como una función que devuelve el objeto de datos inicial (si no se comparte por referencia en todas las instancias creadas).
- computed: Aquí se declaran las propiedades computadas, es decir, aquellas a las que se les pueden aplicar cálculos o transformaciones.
- watch: 
- methods: Métodos que se utilizarán dentro de la instancia.
- template: String que se utiliza como plantilla para la instancia de Vue, que reemplazará al elemento montado.
- hooks de ciclo de vida:  

La principal diferencia entre *computed properties* y *methods* es que *methods* se llama siempre que se renderiza la instancia de Vue, mientras que *computed properties* solamente se invocan en el caso de que alguna variable de las que dependan cambie su valor, por tanto, la eficiencia de esta última es mejor (no aceptan parámetros).

## v-bind

Con esta directiva podemos vincular un atributo HTML o alguna propiedad de un componente a un valor existente en nuestra instancia de Vue. Por ejemplo, en HTML declaramos:

    <img :src = "imagen" />

Mientras que nuestra instancia de Vue contará con:

~~~
const app = new Vue({
  el: '#app',
  data: {
    imagen: "https://vuejs.org/images/logo.png"
  },
})
~~~ 

Por tanto, esta imagen tomará como fuente el logo de Vue de dicho link. Si cambiamos el valor del link de forma dinámica, Vue lo detecta y vuelve a cargar dicha imagen con el nuevo link.

## v-model
Es una directiva que permite el *data-binding* en Vue, es decir, si cambiamos el valor de una variable en la vista cambia en el controlador y vice versa. En Vue, esta directiva se utiliza como: 

    <input v-model="NombrePropiedad"/>

## v-bind:class (:class)

Es una directiva utilizada en el *data-binding* en Vue, la cual nos permite manipular las clases de un elemento y los estilos relacionados a las mismas. Por ejemplo: 

    <div :class="{ active: isActive }"></div>

Este ejemplo indica que este *div* pertenecerá o no a la clase *active* dependiendo del valor del dato *isActive*. Podemos trabajar también con Bootstrap:

    <div :class="{'bg-info': color,'bg-success':!color}"></div>

## keyup, keypress, keydown...

[PAGINA](https://vuejs.org/v2/guide/events.html#System-Modifier-Keys)

[CHEATSHEET](https://learnvue.co/2020/01/a-vue-event-handling-cheatsheet-the-essentials/)

Son utilizados para escuchar eventos relacionados relacionados el teclado. Además existen otros eventos relacionados con el ratón(mover, rueda, doble click, etc). Existen otros eventos para cualquier elemento en HTML (pej: click en button), los cuales son manejados con **v-on:evento** o la forma abreviada, **@evento**.





