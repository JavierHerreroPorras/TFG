const app = new Vue({
    el: '#app',
    data: {
      cursos: [
        {name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
      ],
      mostrar: false,
      mensaje: "Hola Vue.js!",
      imagen: "https://vuejs.org/images/logo.png"
    },
    methods: {
      toggleMostrar: function() {
        this.mostrar = !this.mostrar
      }
    }
  })