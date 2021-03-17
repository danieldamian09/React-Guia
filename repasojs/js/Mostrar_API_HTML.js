const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // pasar la cantidad de usuarios a descargar de la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    // el llamado ajax consta de 3 o 4 partes

    // 1) llamado AJAX
    const xhr = new XMLHttpRequest();

    // 2) abrimos la conexion
    xhr.open('GET', api, true);
    // toma tres parametros primero GET o POST, luego la direccion URL a la API, y si quieres que sea Asincrono lo colocas TRUE

    // 3) on load
    xhr.onload = () => {
        // aca es donde revisas la respuesta
        if (xhr.status === 200) {
            // si el status es 200 significa que el llamado es correcto
            resolve(JSON.parse(xhr.responseText).results)
            // .results viene de la API, xhr.responseText es la respuesta, JSON.parse lo convierto de un string a un objeto de JS
        } else {
            reject(Error(xhr.statusText));
            // xhr.statusText no va a traer el resultado cuando sea incorrecto

        }
    }

    // opcional (on error)
    xhr.onerror = (error) => {
        reject(error);
    }

    // 4) Send envias el request (lo que viene siendo la base de datos)
    xhr.send()
});

descargarUsuarios(10)
    .then(
        mienbros => imprimirHTML(mienbros),
        error => console.error(
            new Error('Hubo un error ' + error)
        )
    )

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
        <li>
            Nombre: ${usuario.name.first} ${usuario.name.last}
            Pais: ${usuario.nat}
            Imagen:
                    <img src="${usuario.picture.medium}">
        </li>
        `;
    });

    const contenedorApp1 = document.querySelector('#app');
    contenedorApp1.innerHTML = html;

}