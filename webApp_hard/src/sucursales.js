const fs = require('fs')

theatersJson = fs.readFileSync('./data/theaters.json', 'utf-8')
theaters = JSON.parse(theatersJson)

let listaSucursales = theaters.theaters.map(function(e){
	return e.name + e.address + e.description;
});

let seccionesSucursales = [
	{ titulo : "Nuestras Salas"},
	{ totalSales : theaters.total_theaters},
	{ listadoDeSalas : listaSucursales}
]

module.exports = seccionesSucursales;

