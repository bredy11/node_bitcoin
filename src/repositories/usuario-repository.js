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
    const res = await Usuario.findOne({
        email: data.email,
        senha: data.senha
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Usuario.findById(id);
    return res;
}

exports.todosUsuario = async (id) => {
    const res = await Usuario.find();
    return res;
}

exports.inserirMoeda = async (usuario, moeda) => {

    if (moeda.tipo == 'LTC') {

        usuario.moedas.ltc.quantidade += moeda.quantidade;
    } else if (moeda.tipo == 'BTC') {
        usuario.moedas.btc.quantidade += moeda.quantidade;
    }

    if (moeda.valor != null) {

        usuario.valor = moeda.valor;
    }

    await Usuario
        .findByIdAndUpdate(usuario.id, {
            $set: {
                valor: usuario.valor,
                moedas: usuario.moedas
            }
        });
}