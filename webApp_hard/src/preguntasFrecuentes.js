const fs = require('fs')

faqsJson = fs.readFileSync('./data/faqs.json', 'utf-8')
faqs = JSON.parse(faqsJson)

let seccionesPreguntasFrecuentes = [

	{titulo : "Preguntas Frecuentes"},
	{totalDePreguntas : faqs.total_faqs},
	{listadosDePreguntas : faqs.faqs}

]

module.exports = seccionesPreguntasFrecuentes;