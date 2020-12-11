Vue.component('hijo',
{
    template: //html
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuir(2)">-</button>

        <button @click="obtenerCursos">Obtener cursos</button>
        <ul v-for="item of cursos">
            <li>{{item.nombre}}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
});