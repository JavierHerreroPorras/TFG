// En un archivo aparte
// En store guardamos los datos correspondientes. 

const store = new Vuex.Store({
    state: {
        numero: 10,
        cursos: [],
    },
    mutations: {
        aumentar(state){
            state.numero++;
        },
        disminuir(state,n){
            state.numero -= n;
        },
        llenarCursos(state,cursosAccion){
            state.cursos = cursosAccion
        }
    },
    actions: {
        obtenerCursos: async function({commit}) {
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            // Hacemos un commit que llama a la mutacion llenarCursos, que recibe el objeto de cursos (los datos del json)
            commit('llenarCursos',cursos);

        }
    }
});

const app = new Vue({
    el: '#app',
    store: store,
});

