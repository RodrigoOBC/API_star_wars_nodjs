const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/planetas',{ useNewUrlParser:true})
mongoose.Promise = global.Promise

module.exports = mongoose