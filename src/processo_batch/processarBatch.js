const CronJob = require('cron').CronJob
const poloniex = require('../services/poloniex-service');

const job = new CronJob('0 * * * * *', () => {
    console.log('teste de back');
    
}, null, true);
