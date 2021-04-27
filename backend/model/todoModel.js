module.exports = function () {
  this.getTodoPendentes = function(dbConnection, callback){
        dbConnection.query("SELECT * FROM lista  where status = 0 ", callback);
  }
  this.getTodoConcluida = function(dbConnection, callback){
        dbConnection.query("SELECT * FROM lista where status = 1", callback);
  }
  this.insertTodo = function(dbConnection, req, callback){
      dbConnection.query("INSERT INTO lista  set ?",req.body, callback);
  }
  this.updateTodo = function(dbConnection, req, callback){
      dbConnection.query("UPDATE lista set nome = ?, descricao = ?, email = ? , status = ? , countStatus = ?  WHERE id = ? ",
       [req.body.nome,req.body.descricao,req.body.email,req.body.status,req.body.countStatus, req.params.id], callback);
  }
  this.updateStatus = function(dbConnection, req, callback){

    console.log(req.body);
      dbConnection.query("UPDATE lista set  status = ? , countStatus = ?  WHERE id = ? ",
       [req.body.status,req.body.countStatus, req.params.id], callback);
  }
  return this;
  
};
