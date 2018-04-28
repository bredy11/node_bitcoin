const mongoose = require('mongoose');
const ValorParada = mongoose.model('ValorParada');

exports.create = async (data) => {
    try {
        var valorParada = new ValorParada(data);
        await valorParada.save();
    } catch (error) {
        console.log(error);
    }

}