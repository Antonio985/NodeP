const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

router.get('/message', function(req, res) {
    res.send('lista de mensajess');
})

router.delete('/message', function(req, res) {
    res.send('Mensaje añadido');
})

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');
