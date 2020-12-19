/* Fetch */

let contenido = document.getElementById('contenido')

function traer() {
    recuperarDatos(contenido);
}

const recuperarDatos = async(contenido) =>{
    try {
        const res = await fetch('text.txt');
        const data = await res.text();
        contenido.innerHTML = `${data}`
    } catch (error) {
        console.log(error);  
    }
}
