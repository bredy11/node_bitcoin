
const repository = require('../repositories/usuario-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.post = async (req, res, next) => {


    try {

        await repository.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
            senha: md5(req.body.senha + global.SALT_KEY)
        });

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

exports.authenticate = async (req, res, next) => {
    try {


    
        const customer = await repository.authenticate({
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