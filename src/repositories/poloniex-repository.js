var connection = require('../infra/connectionMysql')

exports.salvarValorAtual = async (data) => {

    try {

        await connection.query('insert  into  cotacao set ?', data);
    } catch (error) {

        throw error;
    }
}


exports.valorAtual = async () => {

    try {

        var cotacao = await connection.query('select * from cotacao order by data desc LIMIT 1 ');


        return cotacao;
    } catch (error) {

        throw error;
    }
}



exports.valorNoPeriodo = async (data) => {

    try {

        var cotacao = await connection.query('select * from cotacao where data > ? ', data);

        return cotacao;
    } catch (error) {

        throw error;
    }
}