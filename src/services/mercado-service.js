var request = require('request');
const axios = require('axios');


exports.historicoDoDia = async (moeda) => {
    var url = 'https://www.mercadobitcoin.net/api/' + moeda;
    var getTicker = await axios.get(url + '/ticker/');
    var data = getTicker.data.ticker;

    return data;
}


exports.orderbook = async (moeda) => {

    var url = 'https://www.mercadobitcoin.net/api/' + moeda;
    var orderbook = await axios.get(url + '/orderbook/');
    var data = orderbook.data;

    return data;
}

exports.trades = async (moeda) => {

    try {
        var url = 'https://www.mercadobitcoin.net/api/' + moeda;
        var getTicker = await axios.get(url + '/trades/');
        var data = getTicker.data;
    } catch (error) {
        console.log(error);
    }

    return data;
}