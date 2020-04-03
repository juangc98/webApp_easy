
const index = require('./src/index')




function routeo(url,res){
    switch (url) {
		// Home
		case '/':
            res.end(JSON.stringify(index.home, null, " "));
			break;
		// En cartelera
		case '/en-cartelera':
			res.end(JSON.stringify(index.cartelera, null, " "));
			break;
		// Ranking
		case '/mas-votadas':
			res.end(JSON.stringify(index.masVotadas, null, " "));
			break;
		// Sucursales
		case '/sucursales':
			res.end(JSON.stringify(index.sucursales, null, " "));
			break;

		// Contacto
		case '/contacto':
			res.end(JSON.stringify(index.contacto, null, " "));
			break;
		
	    // FAqs
		case '/preguntas-frecuentes':
			res.end(JSON.stringify(index.preguntasFrecuentes, null, " "));
			break;


		default:
			res.end('404 not found')
    }
}

module.exports = routeo;