const mysql = require("mysql2");

var connMysql = function(){
    return  mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "21",
        database: "todoList",
      });
}

module.exports = function() {
    return connMysql;
};
