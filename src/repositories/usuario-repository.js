 var connection = require('../infra/connectionMysql')

 exports.create = async (data) => {

     console.log(conexao);
     try {

         await connection.query('insert into usuario set ?', data);
     } catch (error) {
         console.log(error);
     }
 }

 exports.authenticate = async (data) => {
     const res = await connection.query("select * from usuario where email = ? and senha=?", [data.login, data.senha]);
     return res;
 }

 exports.getById = async (id) => {
     const res = await await connection.query('select * from usuario where id=?', [id]);
     return res;
 }