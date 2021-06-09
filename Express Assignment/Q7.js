var express = require('express');
var morgan = require('morgan');
const app = express();
const items = [
    {   
        id: 01,
        item: 'Apple',
        price: 100
    },
    {   
        id: 02,
        item: 'Banana',
        price: 200
    },
    {
        id: 03,
        item: 'Orange',
        price: 300
    },
    {
        id: 04,
        item: 'Mango',
        price: 500
    }
];
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.use(morgan('dev'));
app.use(express.static('public'))

app.get('/',(req,res) => {
    
    res.render('home', {items});
})

app.post('/',  urlencodedParser,  function(req,res){
    var str1=req.body.str;
    items.push({item: str1});
    console.log(items);
    res.render('home',{items})
})

app.get('/items/:id',(req,res) => {
    for(let i=0;i<items.length;i++){
        if(items[i].id == req.params.id){
            console.log(items[i]);
            res.send(items[i]);
        }
        else{
            res.send('Element not found')
        }
    }
})



port=8080;
app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`)
});