const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // Pasamos la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado ajax (consta de 3 o 4 partes dependiendo)

    // 1- llamado
    const xhr = new XMLHttpRequest();

    // 2- abrir la conexion
    // toma 3 parametros: get o post, api y true para que sea asincrono
    xhr.open('GET', api, true);

    // 3- on load (aca es donde revisas la respuesta)
    xhr.onload = () => {
        if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional on error
    xhr.onerror = (error) => reject(error);

    //4- send
    xhr.send()
})


descargarUsuarios(10)
    .then(
        mienbros => imprimirHTML(mienbros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )


    function imprimirHTML(usuarios) {
        console.log(usuarios)
    }