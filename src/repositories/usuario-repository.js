var connection = require('../infra/connectionMysql')

exports.create = async (data) => {

    try {

        await connection.query('insert into usuario set ?', data);
    } catch (error) {
        console.log(error);
    }
}

exports.authenticate = async (data) => {
    try {

        const res = await connection.query("select * from usuario where email = ? and senha=?", [data.email, data.senha]);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getById = async (id) => {
    try {

        const res = await connection.query('select * from usuario where usuario_id=?', [id]);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}