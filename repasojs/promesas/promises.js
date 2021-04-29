// promises

// cuando se hagan llamados asincronos en JS, podemos tener dos opciones que el codigo ejecute bien o que falle, asi podemos manejar ambos escenarios

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;

        if(descuento){
            resolve('Descuento aplicado')
        }else{
            reject('No se pudo aplicar descuento')
        }
    }, 3000);
})

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});