// sirve para extraer los valores de un objeto

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

// console.log(aprendiendoJS);

// como se hacia antes del destructuring

// let version = aprendiendoJS.version;
// console.log(version);

// Destructuring forma nueva

let {version, frameworks} = aprendiendoJS;
// console.log(version);
// console.log(frameworks);

// para acceder a las propiedades de un objeto dentro de otro objeto

let {nueva} = aprendiendoJS.version;
console.log(nueva);

let {anterior} = aprendiendoJS.version;
console.log(anterior);
