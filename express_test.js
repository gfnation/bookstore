var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('POST')
})

app.listen(8080, function () {
  console.log('Example app listening on port 3306!')
})
