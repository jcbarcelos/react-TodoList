module.exports = function (app) {
  app.get("/", function (req, res) {
    app.controller.controller.listaPedentes(app, req, res);
  });
  app.get("/concluida", function (req, res) {
    app.controller.controller.listaConcluida(app, req, res);
  });
  app.post("/", function (req, res) {
    app.controller.controller.insert(app, req, res);
  });
  app.put("/:id", function (req, res) {
    app.controller.controller.update(app, req, res);
  });
  app.put("/status/:id", function (req, res) {
    app.controller.controller.updateStatus(app, req, res);
  });
};
