const CronJob = require('cron').CronJob
const job = new CronJob('0 * * * * *', () => {
    console.log('teste de back');
}, null, true);
