/* Fetch */

let contenido = document.getElementById('contenido')

function traer() {
    recuperarDatos(contenido);
}
/*
const recuperarDatos = async(contenido) =>{
    try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        console.log(data.results[0].email);
        contenido.innerHTML = `
            <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle"></img>
            <p>Nombre: ${data.results[0].name.last}</p>
        `
    } catch (error) {
        console.log(error);  
    }
}*/

const recuperarDatos = async(contenido) =>{
    try {
        const res = await fetch('tabla.json');
        const data = await res.json();
        tabla(data);
    } catch (error) {
        console.log(error);  
    }
}

const tabla = datos => {
    contenido.innerHTML="";
    datos.forEach(element => {
        contenido.innerHTML += 
        `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.nombre}</td>
            <td>${element.email}</td>
            <td>${element.estado ? "Activo" : "Eliminado"}</td>
        </tr>
        `
    });
}

