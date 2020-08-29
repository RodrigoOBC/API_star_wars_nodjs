// const request = require('request');


// for (x = 1; x <= 60; x++) {
//     request('https://swapi.dev/api/planets/' + x + '/', function (error, response, body) {
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         var planeta = JSON.parse(body);
//         console.log('Nome:', planeta['name']); // Print the HTML for the Google homepage.
//         console.log('Clima:', planeta['climate']); // Print the HTML for the Google homepage.
//         console.log('Terreno:', planeta['terrain']); // Print the HTML for the Google homepage.



//         request({
//             url: 'http://localhost:3000/planeta/inserir_planeta',
//             method: 'POST',
//             json: {
//                 planeta_id: x,
//                 Nome: planeta["name"],
//                 Clima: planeta["climate"],
//                 Terreno: planeta["terrain"]
//             }
//         })
//     })
// }

