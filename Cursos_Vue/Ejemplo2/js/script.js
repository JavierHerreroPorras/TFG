Vue.component('tv-show-list', {
    data: function() {
        return {
            tvshows: [
                {name: 'Game of Thrones', seasons: 7},
                {name: 'Breaking Bad', seasons: 5},
                {name: 'LOST', seasons: 6},
                {name: 'Battlestar Galactica', seasons: 4}
            ]
        }
    },
    template: `
        <ul>
            <tv-show 
                v-for="(show, index) in tvshows" 
                :key="index"
                :name= "show.name"
                :seasons= "show.seasons">
            </tv-show>
        </ul>
    `
})

Vue.component("tv-show",{
    props: {
        name: String,
        seasons: Number,
    },
    template: `
        <li>
            <strong>{{ name }}</strong> ({{ seasons }} Temporadas)
        </li>
    `
})

const app = new Vue({
    el: "#app",
    data: {
        mostrar: true,
    },
    methods: {
        changeVisibility: function(){
            this.mostrar = !this.mostrar
        }
    }
})