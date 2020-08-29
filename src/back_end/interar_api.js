const request = require('request');


module.exports = class api_star_wars {

    constructor(nome_planeta) {
        this.nome_planeta = nome_planeta;
    }

    pegar_filmes() {
        request('https://swapi.dev/api/planets/' + this.nome_planeta, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            var planeta = JSON.parse(body);
            request({url:'http://localhost:3000/planetas/inserir_planeta',
                method: 'POST',
                json:{
                    Nome: planeta['results']["name"],
                    Clima: planeta['results']["climate"],
                    Terreno: planeta['results']["terrain"]
                 }})
        })
    }

    // inserir_planetas() {

    //     for (x = 0; x <= 1; x++) {
    //         request({url:'http://localhost:3000/planetas/inserir_planeta',
    //             method: 'POST',
    //             json:{
    //                 Nome: "Coruscant",
    //                 Clima: "Seco",
    //                 Terreno: "Planice"
    //              }})
    //     }

    // }

}