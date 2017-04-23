
function updateBook(isbn, Title, Author, Publisher, Price, Year, BookCat)
{
var mysql = require("mysql");

var con = mysql.createConnection({
  host : '127.0.0.1',
  user: 'root',
  password: '',
  database: 'bookstore'
});

con.connect();

con.query('INSERT INTO book (ISBN, title, author, publisher, price, year, book_catagory) VALUES (' + isbn + ', ' + Title +', ' + Author+ ', '+ Publisher+ ', '+ Price +', ' + Year +', ' + BookCat+')');
con.query('SELECT * FROM book');

con.end();
}
