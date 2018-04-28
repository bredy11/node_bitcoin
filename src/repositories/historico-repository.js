const mongoose = require('mongoose');
const Historico = mongoose.model('Historico');

exports.create = async (data) => {
    try {
        var historico = new Historico(data);
        await historico.save();
    } catch (error) {
        console.log(error);
    }

}