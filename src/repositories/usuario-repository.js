function usuarioDao(connection) {
    this._connection = connection;
}

usuarioDao.prototype.salva = async (usuario, callback) =>{
    await this._connection.query('insert into usuario set ?', usuario, callback);
}

usuarioDao.prototype.lista = function (callback) {
   this._connection.query('select * from usuario', callback);
}

usuarioDao.prototype.login = function (usuarioLogin, callback) {
    console.log(usuarioLogin.login);
    this._connection.query("select * from usuario where email = ? and senha=?",
        [usuarioLogin.login,usuarioLogin.senha], callback);

}
 
module.exports = function () {
    return usuarioDao;
};