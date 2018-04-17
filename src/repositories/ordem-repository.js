var connection = require('../infra/connectionMysql')

exports.criarOrdem = async (data) => {

    try {

        await connection.query('insert  into  ordem set ?', data);
    } catch (error) {

        throw error;
    }
}