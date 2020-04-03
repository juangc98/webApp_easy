const fs = require('fs')

moviesJson = fs.readFileSync('./data/movies.json', 'utf-8')
movies = JSON.parse(moviesJson)

function mayoresA7(){
	let total = 0;
		for(pelis of movies.movies){
			if (pelis.vote_average >= 7){
				total++
			}
		}
		return total;

}

function promedio(){
	let total =0;
	for(pelis of movies.movies){
		if (pelis.vote_average >= 7){
			total= (total + pelis.vote_average)
		}
	}
		return total/mayoresA7();
}


let listaMasVotadas = movies.movies.map(function (movies) {
	if (movies.vote_average >= 7) {
		return movies.title + ' - ' + movies.vote_average + ' - ' + "(" + movies.overview + ")";
	}
	
})

let listaMasVotadasClean = listaMasVotadas.filter(Boolean);




let masVotadas = [{
	titulo:"Más votadas",
	totalPeliculas: mayoresA7(),
	ratingPromedio: promedio(),
	listadoPeliculas: listaMasVotadasClean
}]

module.exports = masVotadas;