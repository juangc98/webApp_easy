const seccionesHome = require('./homePage')
const seccionesCartelera = require('./enCartelera')
const seccionesMasVotadas = require('./masVotadas')
const seccionesSucursales = require('./sucursales')
const seccionesContacto = require('./contacto')
const seccionesPreguntasFrecuentes = require('./preguntasFrecuentes')

let index = {
    home: seccionesHome,
    cartelera: seccionesCartelera,
    masVotadas: seccionesMasVotadas,
    sucursales: seccionesSucursales,
    contacto: seccionesContacto,
    preguntasFrecuentes: seccionesPreguntasFrecuentes
}

module.exports = index;