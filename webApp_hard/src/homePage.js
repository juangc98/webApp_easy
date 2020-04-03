const fs = require('fs')

moviesJson = fs.readFileSync('./data/movies.json', 'utf-8')
movies = JSON.parse(moviesJson)


let listaOrdenadaAlfabeticamente = movies.movies.sort(function (a, b) {
	if (a.title > b.title) {
		return 1;
	}
	if (a.title < b.title) {
		return -1;
	}
	// a must be equal to b
	return 0;
})



let listaHome = listaOrdenadaAlfabeticamente.map (function (e){
	return e.title
})




let seccionesHome = [ { 
	titulo: 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.'
},
{
	totalDePeliculasEnCartelera: movies.total_movies
},
{
	listadoDePeliculas: listaHome

},
{
	pieDePagina: 'Recordá que podés visitar las secciones: i.En Cartelera ii. Más Votadas iii.Sucursales iv.Contacto v.Preguntas Frecuentes'
},
]

module.exports = seccionesHome;