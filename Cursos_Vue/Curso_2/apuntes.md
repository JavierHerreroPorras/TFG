# Apuntes curso VueJS

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
- computed: Aquí se declaran las propiedades computadas, es decir, aquellas a las que se les pueden aplicar cálculos o transformaciones. Se invocan sin parentesis. Dentro de computed podemos declarar datos que contienen lógica (EJEMPLO 3)
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

## Ciclo de vida
Etapas:
- beforeCreated: creación de la instancia
- created: cuando lee los eventos, datos, observadores...
- beforeMount: antes de insertar en el DOM
- mounted: al momento de insertar en el DOM (el saludo)
- beforeUpdate: se ejecuta antes de que detecte algún cambio en el sitio web.
- updated: se ejecuta al actualizar cualquier elemento del sitio web.
- beforeDestroy: se ejecuta antes de destruir la instancia (this.$destroy())
- destroyed: se ejecuta cuando se destruye la instancia de Vue. El sitio queda con el mismo contenido, pero ya no podemos interactuar con el mismo.

## Componentes

Los componentes son instancias reutilizables de Vue con un nombre. Se inicializan mediante la expresión:
~~~
Vue.component('nombre',{})
~~~

Y se invoca en el código HTML como una etiqueta. Un componente siempre tiene un template. Cada componente que creemos tiene que estar dentro del componente sobre el que se monta la instancia. Al utilizar un template, tenemos que utilizar un div como contenedor de lo que declaremos en el mismo.

Además, podemos declarar datos dentro del mismo, mediante la propiedad *data*. Pero, a diferencia de la instancia de Vue, los datos se devuelven mediate una función, como en la siguiente expresión:
~~~
Vue.component('contador',{
    template: //html
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+<button>
    </div>
    `,
    data(){
        return {
            numero: 0
        }
    }
})
~~~

### Comunicación entre componentes

Imaginamos el siguiente componente, en el cual el componente padre pasa al componente hijo un numero, mediante v-bind: (o su forma abreviada :). Este numero se recibe en el componente hijo y se refleja:

~~~
Vue.component('padre',{

    template: /*html*/
    `
    <div class = "p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo v-bind:numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
});
~~~

El componente hijo cuenta con unas props (atributos personalizados), donde almacena los datos que recibe desde el padre y posteriormente los refleja en la página. Por otra parte, para pasar parámetros al componente padre, utiliza eventos una vez que se ha montado - *mounted* (this.$emit('nombreHijo',this.nombre)). Este parámetro lo recibe el padre mediante v-on: o su forma abreviada @ (@nombreHijo="nombrePadre = $event"). Pero existen varios problemas al trabajar con los datos pasados de padres a hijos y viceversa (Los parámetros recibidos no se pueden modificar). Por ello surge Vuex:
~~~
Vue.component('hijo', {

    template: /*html*/
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Javier',
        }
    },
    mounted() {
        this.$emit('nombreHijo',this.nombre);
    },

});
~~~




