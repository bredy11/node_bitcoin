const mercadoService = require('../services/mercado-service');
const timestamp = require('unix-timestamp');
exports.iniciarAnalise = async () => {

    var historico = await mercadoService.historicoDoDia('LTC');

    var historicoOrdemList = await mercadoService.orderbook('LTC');

    var histicoDeCompraEVenda = await mercadoService.trades('LTC');





}


exports.grafico = async () => {


    var grafico = {
        periodo: []
    }

    var periodos = 15;
    var j = 0;
    try {
        var hit = await mercadoService.trades('LTC');

        var periodo = periodos;
        var dataInicial = timestamp.toDate(hit[0].date).getTime();
        var mov = [];
        for (i = 0; i < hit.length; i++) {
            dataInicial = dataInicial + ((periodos * 60) * 1000);
            console.log(i);


            var data = timestamp.toDate(hit[i].date).getTime();
            var teste = Date(dataInicial);
            var teste2 =  new Date(data);
            console.log("data do array   " +teste2);
            console.log("data do range   " +teste);
            if (dataInicial > data) {
                mov.push({
                    valor: hit[i].price,
                    dataMov: timestamp.toDate(hit[i].date)

                });

            } else {

                i = j;
                grafico.periodo.push(mov);

                periodo += periodos;
            }




        }
    } catch (error) {
        console.error(error);
    }
    return grafico;
















}