var connection = require('../infra/connectionMysql')

exports.salvarValorAtual = async (data) => {

    try {

        await connection.query('insert  into  cotacao set ?', data);
    } catch (error) {
        
        throw error;
    }
}