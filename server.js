const express = require('express');
const app = express();
const port= 3000;

app.get('/', function(req, res) {
    res.send('Ola mundo');
});

app.listen(port, function() {
    console.log('servidor rodando na porta' + port)
})
 
