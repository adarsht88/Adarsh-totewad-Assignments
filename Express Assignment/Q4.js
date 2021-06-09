
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send("Hello World!")
  })

app.get('/time', function (req, res) {
    res.send( { date: new Date().toDateString() })
  })

app.listen(process.env.port || 8080);