module.exports.listaPedentes = function (app, req, res) {
  const dbConnection = app.db.db();
  app.model.todoModel.getTodoPendentes(dbConnection, function (error, result) {
    res.send(result);
  });
};
module.exports.listaConcluida = function (app, req, res) {
  const dbConnection = app.db.db();
  app.model.todoModel.getTodoConcluida(dbConnection, function (error, result) {
    res.send(result);
  });
};

module.exports.insert = function (app, req, res) {
  const dbConnection = app.db.db();
  app.model.todoModel.insertTodo(dbConnection, req, function (error, result) {
    res.send(result);
  });
};

module.exports.update = function (app, req, res) {
  const dbConnection = app.db.db();
 
  app.model.todoModel.updateTodo(dbConnection, req, function (error, result) {
    res.send(result);
  });
};
module.exports.updateStatus = function (app, req, res) {
  const dbConnection = app.db.db();
 
  app.model.todoModel.updateStatus(dbConnection, req, function (error, result) {
    res.send(result);
  });
};
