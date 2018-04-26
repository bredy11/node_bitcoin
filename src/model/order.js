const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },   
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    type: {
        type: String,
        required: true,
        enum: ['COMPRA', 'VENDA'] 
    },
    status: {
        type: String,
        required: true,
        enum: ['FEITA', 'ANALISE','CANCELADA'],
        default: 'ANALISE'
    },
    moeda : [{
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

module.exports = mongoose.model('Order', schema);