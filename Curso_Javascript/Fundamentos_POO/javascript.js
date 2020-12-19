/*APUNTES
    
    - Objeto en Javascript

*/

/*const Pelicula = {
    nombre: 'Perdidos',
    id: 1,
    reproducir(){
        return `reproduciendo ${this.nombre}`;
    }
}

console.log(Pelicula.reproducir());*/

class Pelicula {

    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `reproduciendo ${this.nombre}`;
    }

}

const pelicula1 = new Pelicula("Harrys",1);

console.log(pelicula1.reproducir());

