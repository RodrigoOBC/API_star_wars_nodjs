const request = require('request');

var id = 0
for (x = 1; x <= 60; x++) {
    request('https://swapi.dev/api/planets/' + x + '/', function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var planeta = JSON.parse(body);
        console.log('Nome:', planeta['name']); // Print the HTML for the Google homepage.
        console.log('Clima:', planeta['climate']); // Print the HTML for the Google homepage.
        console.log('Terreno:', planeta['terrain']); // Print the HTML for the Google homepage.

      
        id = id + 1

        request({
            url: 'http://localhost:3000/planeta/inserir_planeta',
            method: 'POST',
            json: {
                planeta_id: id,
                Nome: planeta["name"],
                Clima: planeta["climate"],
                Terreno: planeta["terrain"],
                Filmes: planeta["films"].length
            }
        })
    })
}

