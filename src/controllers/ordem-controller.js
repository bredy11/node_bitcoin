 const repository = require('../repositories/poloniex-repository');
 const ordemRepository = require('../repositories/ordem-repository');
 const authService = require('../services/auth-service');
 let date = require('date-and-time');
 /**
  * pega o ultimo valor salvo no banco
  http://localhost:3000/ordem   tipo get
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 exports.getValorAtual = async (req, res, next) => {
     try {
         var data = await repository.valorAtual();
         res.status(200).send(data);
     } catch (e) {
         res.status(500).send({
             message: 'Falha ao processar sua requisição'
         });
     }
 }


 /**
  * recupera os ultimos minutos passado por parametro
 em minutos o parametro
 * http://localhost:3000/ordem/5     tipo get
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 exports.getPeriodo = async (req, res, next) => {
     try {
         let today = new Date();
         date.locale('pt');
         var minutos = req.params.minutos;
         let dataDecrementada = date.addMinutes(today, parseInt(minutos) * (-1));

         console.log(dataDecrementada);
         var data = await repository.valorNoPeriodo(dataDecrementada);
         res.status(200).send(data);
     } catch (e) {
         console.log(e);
         res.status(500).send({
             message: 'Falha ao processar sua requisição'
         });
     }
 }
 /**
  * salva a ordem do usuario
  * post  http://localhost:3000/ordem  
  * request ex:
  * {
 	"qtdbtc":"1",
 	"valorPorBtc":8000.00,
 	"tipo":"COMPRAR"
 }
  * 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 exports.post = async (req, res, next) => {
     try {
         const token = req.body.token || req.query.token || req.headers['x-access-token'];
         const data = await authService.decodeToken(token);
         var ordem = {
             usuario: data.id,
             valor_por_btc: req.body.valorPorBtc,
             type: req.body.type,
             status:req.body.status,
             moeda:req.body.moeda,
             quantidade:req.body.quantidade,
             createDate:new Date()
         }
       
  
         await ordemRepository.criarOrdem(ordem);
         res.status(201).send({
             message: 'A ordem foi gravada com sucesso!'
         });
     } catch (e) {
         console.log(e);
         res.status(500).send({
             message: 'Falha ao processar sua requisição'
         });
     }
 };