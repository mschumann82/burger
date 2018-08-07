// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
const orm = {
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (" + "'" + vals[0] + "', " + vals[1] + ");";

        console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  updateOne: function(table, objColVals, condition, cb) {
    
    let queryString = "UPDATE " + table;

    queryString += " SET devoured=";
    queryString += true;
    queryString += " WHERE ";
    queryString += JSON.parse(JSON.stringify(condition));
    queryString += ";";
    

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burgers.js).
module.exports = orm;
