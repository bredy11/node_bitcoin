const  Poloniex =    require('poloniex-api-node');
let poloniex = new Poloniex();
poloniex.subscribe('ticker');
poloniex.on('message', (channelName, data) => {
 
    console.log(`Ticker: ${data}`);
  
});
poloniex.openWebSocket();