// Un componente siempre tiene un template. Cada componente que creemos tiene que estar dentro del componente sobre el que se monta la instancia
// Al utilizar un template, tenemos que utilizar un div como contenedor
Vue.component('saludo',{
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Felicidades</h3>
    </div>
    `,
    data(){
        return {
            saludo: 'Hola desde Vue'
        }
    }
});