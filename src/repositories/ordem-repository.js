const mongoose = require('mongoose');
const Ordem = mongoose.model('Ordem');

exports.criarOrdem = async (data) => {

    try {
        var ordem = new Ordem(data);
        await ordem.save();
    } catch (error) {
        console.log(error);
    }

}