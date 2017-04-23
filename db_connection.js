var express = require("express");
var mysql = require("mysql");
var app = express();

var con = mysql.createConnection({
  host : '127.0.0.1',
  user: 'root',
  password: '',
  database: 'bookstore'
});

con.connect();
app.get('/', function (req, res) {
  res.send('Hello World!')
})

console.log("listening");


app.post('/api/book', function(req, res, next){
  var book = req.body.param;
  var query = con.query('INSERT INTO book VALUES $', book, function(err, result){
    if(err){
      console.error(err);
      return res.send(err);
    }else{
      return res.send('OK');
    }
  });

});
app.listen(8080);
