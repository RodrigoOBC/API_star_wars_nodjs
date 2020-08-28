const moongose = require('../Data_base')


const Planeta_Schema = new moongose.Schema({
    
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