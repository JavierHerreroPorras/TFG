const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {name: 'Pera', cantidad: 10},
            {name: 'Manzana', cantidad: 0},
            {name: 'Platano', cantidad: 11},
        ],
        nuevaFruta: "",
        totalFrutas: 0,
    },
    methods: {
        agregarFruta () {
            this.frutas.push({name: this.nuevaFruta, cantidad: 0})
            this.nuevaFruta='';
        }
    }, 
    computed: {
        sumarFrutas() {
            this.totalFrutas = 0;
            for(fruta of this.frutas){
                this.totalFrutas = this.totalFrutas + fruta.cantidad;
            }

            return this.totalFrutas;
        }
    },
    template: `
        <div>
            <h1>{{titulo}}</h1>

            <input type="text" v-model="nuevaFruta" @keyup.enter="agregarFruta"/>
            <button @click="agregarFruta">Añadir</button>
            <div >
                <ul>
                    <li 
                    v-for="(fruta,index) in frutas"
                    :key=index>
                    <input type="number" v-model.number="fruta.cantidad">
                    -{{fruta.name}}
                    <button @click="fruta.cantidad++">+</button>
                    <span v-if="fruta.cantidad == 0"> (No hay stock)</span>
                    </li>
                </ul>

                <h4>Número total: {{sumarFrutas}}</h4>

            </div>
        </div>

    `
})