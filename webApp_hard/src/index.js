const seccionesHome = require('./homePage')
const seccionesCartelera = require('./enCartelera')
const seccionesMasVotadas = require('./contacto')
const seccionesSucursales = require('./masVotadas')
const seccionesContacto = require('./preguntasFrecuentes')
const seccionesPreguntasFrecuentes = require('./sucursales')

let index = {
    home: seccionesHome,
    caretlera: seccionesCartelera,
    masVotadas: seccionesMasVotadas,
    sucursales: seccionesSucursales,
    contacto: seccionesContacto,
    preguntasFrecuentes: seccionesPreguntasFrecuentes
}

module.exports = index;