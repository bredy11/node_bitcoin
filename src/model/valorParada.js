const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    tipo: {
        type: String,
    },
    "status": {
        type: Boolean,
        default: true
    },
    "valorAlerta": {
        type: Number,
        required: true
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

module.exports = mongoose.model('ValorParada', schema);