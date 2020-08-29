const moongose = require('../Data_base')
const { SchemaType, SchemaTypes } = require('mongoose')


const Planeta_Schema = new moongose.Schema({
    planeta_id: {
        type: SchemaTypes.Number,
        required: true
    },
    Nome: {
        type: String,
        require: true
    },
    Clima: {
        type: String,
        require: true
    },
    Terreno: {
        type: String,
        require: true
    },
    Filmes: {
        type: SchemaTypes.Number,
        default: 0
    }

})

const Planeta = moongose.model('planetas', Planeta_Schema)

module.exports = Planeta