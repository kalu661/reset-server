const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, function() {
  console.log('Server express, escuchando en el puerto 3000');
});
