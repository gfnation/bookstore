var sql = require("mysql");

exports.open_connection_default = function(){
  var connection = mysql.createConnection({
  host : '127.0.0.1',
  database : 'bookstore'
});
return connection;

exports.create_cust = function(connection, CustomerID, FirstName, LastName, Email, Address){
  var query = "INSERT INTO customer (CustomerID, FirstName, LastName, Email. Address)" + "VALUES(?, ?, ?, ?, ?)"

  connection.query(query, [CustomerID, FirstName, LastName, Email, Address]);
}


create_cust(open_connection_default, 0000, "Nick", "Kroeze", "email@email.com", "24 Myrtle Ave");

document.getElementById("test").innerHTML = create_cust(open_connection_default, 0000, "Nick", "Kroeze", "email@email.com", "24 Myrtle Ave");
