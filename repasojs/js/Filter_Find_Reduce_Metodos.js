// Metodos en Arreglos

const personas = [
    {nombre: "Humberto", edad: 37, aprendiendo: "Javascript"},
    { nombre: "Rebecca", edad: 33, aprendiendo: "PHP"},
    { nombre: "Luis", edad: 35, aprendiendo: "Go" },
    { nombre: "Pedro", edad: 25, aprendiendo: "AngularJS" },
    { nombre: "Juan", edad: 28, aprendiendo: "ReactJS" },
]

console.log(personas);

// --------------------------Para Filtrar-------------------

// mayores de 28 años
const mayores = personas.filter(persona => {
    // console.log(persona);
    return persona.edad > 28;
});

console.log(mayores);

// que esta aprendiendo Pedro? y su edad?

const pedro = personas.find(persona => {
    return persona.nombre == "Pedro";
});

console.log('Pedro esta aprendiendo: ' + pedro.aprendiendo);

// Para conocer el total de todas las edades
let total =  personas.reduce((edadTotal, personas) =>{
    return edadTotal + personas.edad;
}, 0)

console.log(total / personas.length);

