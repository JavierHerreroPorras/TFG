// el $ se utiliza solo dentro del template.
// 1 forma: con una computed property, que devuelve store.state.numero
/// NUEVO: ... -> rest property
Vue.component('titulo',
{
    template: //html
    `
    <div>
        <h1>numero {{ numero }}</h1>
        <!--<h1>numero {{ $store.state.numero }}</h1>-->
        <hijo></hijo>
    </div>
    `,
    /*computed: {
        numero(){
            return store.state.numero
        }
    }*/
    computed: {
        ...Vuex.mapState(['numero'])
    }
})

