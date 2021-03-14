// nos permite combinar dos arreglos diferentes

let lenguajes = ["Javascript", "PHP", "Python"];
let frameworks1 = ["React", "Laravel", "Django"];

// Unir los arreglos en 1 solo forma antigua

// let combinacion = lenguajes.concat(frameworks1);
// console.log(combinacion);

// nueva forma con el Spread Operator

let combinacion = [...lenguajes,...frameworks1];
console.log(combinacion);

// para hacer una copia de arreglo tambien lo podemos utilizar

let nuevoArreglo = [...frameworks1];
console.log(nuevoArreglo);

// para obtener el ultimo dato de un arreglo
let lenguajes2 = ["Javascript", "PHP", "Python"];

// let [ultimo] = lenguajes2.reverse();
// console.log(ultimo);

// para obtener el ultimo sin que el arreglo se volte lo hacemos con el Spread

let [ultimo] = [...lenguajes2].reverse();
console.log(ultimo);

// para sumar 

function suma(a,b,c) {
    console.log(a+b+c);
}

const numeros = [1,2,3];

suma(...numeros); 
