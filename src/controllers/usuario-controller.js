const repository = require('../repositories/usuario-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

const mongoose = require('mongoose');
const teste =  mongoose.model('usuario');
/*
 * Cria um usuario
 * http://localhost:3000/usuario
 * request
 * {
"nome":"rafael teste",
"cpf":"544752",
"email":"rafa@teste.com",
"senha":"teste"

}
 */
exports.post = async (req, res, next) => {


    try {
        if (req.body.senha == null || req.body.senha == '') {
            res.status(420).send({
                message: 'Preencha o campo senha'
            });
            return;
        }


        var usuario = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
            senha: md5(req.body.senha + global.SALT_KEY)


        }


        if (usuario.nome == null || usuario.email == null || usuario.cpf == null || usuario.nome == '' || usuario.email == '' || usuario.cpf == '') {

            res.status(420).send({
                message: 'Preencha todos os campos'
            });
            return;
        }

        // Cria o usuario
        await repository.create(usuario);

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
/**
 * http://localhost:3000/usuario/login
 *request 
 * {
	
"email":"rafa@teste.com",
"senha":"teste"
}
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login = async (req, res, next) => {
    try {

        const customer = await repository.autenticar({
            email: req.body.email,
            senha: md5(req.body.senha + global.SALT_KEY)
        });


        if (!customer || customer.length == 0) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        var usuario = customer[0];


        const token = await authService.generateToken({
            id: usuario.usuario_id,
            email: usuario.email,
            name: usuario.nome
        });

        res.status(201).send({
            token: token,
            data: {
                email: usuario.email,
                name: usuario.nome
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.refreshToken = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);
        const customer = await repository.getById(data.id);


        if (!customer || customer.length == 0) {
            res.status(404).send({
                message: 'Cliente não encontrado'
            });
            return;
        }

        var usuario = customer[0];
        const tokenData = await authService.generateToken({
            id: usuario.usuario_id,
            email: usuario.email,
            name: usuario.nome
        });

        res.status(201).send({
            token: tokenData,
            data: {
                email: usuario.email,
                name: usuario.nome
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};