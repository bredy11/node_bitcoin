 
const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();
const cotacaoRepository = require("../repositories/poloniex-repository")

exports.salvarCotacao = async (data) => {
  try {
    var resultado = await poloniex.returnTicker();
    var btc = resultado.USDT_BTC;

    var cotacao = {
      moeda: "USDT_BTC",
      valor:   parseFloat(btc.highestBid),
      data: new Date()
   
    };

    await cotacaoRepository.salvarValorAtual(cotacao);

  } catch (error) {
    console.log(error);
    throw error;
  }
} 