const moongose = require('mongoose')


const Planeta_Schema = new moongose.Schema({
    id:{
        type: BigInt,
        require: true
    },
    Nome:{
        type: String,
        require: true
    },
    Clima:{
        type: String,
        require: true
    },
    Terreno:{
        type: String,
        require: true
    }

})

const Planeta = moongose.model('planetas',Planeta_Schema)

module.exports = Planeta