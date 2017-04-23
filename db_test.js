var mysql = require("mysql");

var con = mysql.createConnection({
  host : '127.0.0.1',
  user: 'root',
  password: '',
  database: 'bookstore'
});

con.connect();

con.query('INSERT INTO book (ISBN, title, author, publisher, price, year, book_catagory) VALUES (0001111111111, "title", "author", "publisher", "price", 1994, "horror") ');
con.query('SELECT * FROM book');

con.end();
