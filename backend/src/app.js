const express = require('express');
const server = express();
const cors = require('cors');

//Configuraciones
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(express.json());
server.use('/stores', require('./routes/stores.js'));
server.use('/topAreas', require('./routes/topAreas.js'));
server.use('/topClients', require('./routes/topClients.js'));
server.use('/topSales', require('./routes/topSales.js'));
server.use(cors());

//Rutas
server.get('/', function (req, res) {
   res.send('<h1> TA4 G1 - P2 </h1> <h2> Bienvenido a la base de datos del grupo 1 de Stores.csv </h2>')
});

server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})


module.exports = server;