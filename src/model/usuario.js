const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    keyMercado: {
        type: String

    },
    roles: [{
        type: String,
        required: true,

    }],
    valor: {
        type: Number

    },
    moedas: {
        ltc: {
            quantidade: {
                type: Number,
                default: 0
            }
        },
        btc: {
            quantidade: {
                type: Number,
                default: 0
            }
        }


    }




});

module.exports = mongoose.model('Usuario', schema);