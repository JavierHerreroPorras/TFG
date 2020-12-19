
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    //Evitar que el formulario procese por defecto el formulario
    e.preventDefault();
    
    const datos = new FormData(formulario);

    console.log(datos.get('usuario'));
    console.log(datos.get('pass'));

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
        .then( data => {
            console.log(data)
        })
})