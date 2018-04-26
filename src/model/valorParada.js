const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    venda: {
        type: Number,

    },
    compra: {
        type: Number,

    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    
    moeda: [{
        quantidade: {
            type: Number,
            required: true,

        },
        valor: {
            type: Number,
            required: true
        }


    }]
});

module.exports = mongoose.model('ValorParada', schema);