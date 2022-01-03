const mongoose = require ('mongoose')

const databaseSchema =  new mongoose.Schema({
    Nome:{
        type:String,
        require: true
    },
    Cpf:{
        type:String,
        require: true
    },
    DataNascimento:{
        type:String,
        require: true,
    },
    Date:{
        type:Date,
        require:true,
        default: Date.now
    }
})
module.exports = mongoose.model('Cadastro', databaseSchema)



