global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb://rafael:rafael@ds012538.mlab.com:12538/dbtreinamento',
    sendgridKey: 'SUA CHAVE',
    conexaoMysql: {
        host: 'localhost',
		user: 'root',
		password: '',
		database: 'quaresma'
    }
}