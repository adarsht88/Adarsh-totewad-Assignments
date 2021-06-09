
var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.get('/',function(req,res){
  res.sendFile(__dirname +'/index.html');
});

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})
app.listen(3000)	