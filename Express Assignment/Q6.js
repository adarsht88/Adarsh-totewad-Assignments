var express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('views'))

app.get('/',(req,res) => {
    res.render('home');
})
port=3000;
app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`)
});