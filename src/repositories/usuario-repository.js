const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.create = async (data) => {
    try {
        var usuario = new Usuario(data);
        await usuario.save();
    } catch (error) {
        console.log(error);
    }

}

exports.autenticar = async (data) => {

}

exports.getById = async (id) => {

}