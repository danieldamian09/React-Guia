// Metodos o Funciones en un Objeto

const persona2 = {
    nombre: 'Humberto',
    trabajo: 'Desarrollo Web',
    edad: 37,
    musicaRock: true,
    mostarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona2.mostarInformacion()