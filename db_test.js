var mysql = require("mysql");

var con = mysql.createConnection({
  host : "127.0.0.1"
});

con.connect(function(err){
  if(err){
    console.log('Error');
    return;
  }
  console.log('connection success');
});

con.end(function(err){

}
);
