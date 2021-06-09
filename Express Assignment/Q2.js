
const express = require('express');

const app = express();
const port =  8080;
app.get('/year', function(req, res) {
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
    const age = req.query.age;
    let currentYear = new Date().getFullYear();
    let year = currentYear - age;
    res.send(
        `You were born in ${year}.`
    );
  });
app.listen(port);
console.log('Server started at http://localhost:' + port);