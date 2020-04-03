const fs = require('fs')

moviesJson = fs.readFileSync('./data/movies.json', 'utf-8')
movies = JSON.parse(moviesJson)


let listaCartelera = movies.movies.map(function (e){
	return e.title + ' - ' + "(" + e.overview + ")";
})
                 
let seccionesCartelera = [
	  { titulo: "En Cartelera"

     },
{
	totalDePeliculas: movies.total_movies
},
{
	listadoDePeliculas: listaCartelera
}
]

module.exports = seccionesCartelera;