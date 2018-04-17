const CronJob = require('cron').CronJob
const integracao = require('../services/poloniex-service');

const job = new CronJob('0 * * * * *', () => {
    integracao.salvarCotacao();
    console.log("cotação salva");
}, null, true);