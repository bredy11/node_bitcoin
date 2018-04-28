const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
 
    type: {
        type: String,
        required: true,
        enum: ['COMPRA', 'VENDA']
    },
    data: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['FEITA', 'ANALISE','CANCELADA'],
        default: 'ANALISE'
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

module.exports = mongoose.model('Historico', schema);