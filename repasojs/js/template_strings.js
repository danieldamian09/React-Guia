// template string

const nombre = "Humberto";
const trabajo = "Desarrollador Web";


//  concatenar javascript

console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo)

console.log(`Nombre: ${nombre} Trabajo: ${trabajo}`);

// seria con ctrl + alt + }

// concatenar con multiples lineas
const contenedorApp = document.querySelector('#app')


// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +
//             '</ul>';


let html = `
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>
            `;

contenedorApp.innerHTML = html;

// console.log(contenedorApp);