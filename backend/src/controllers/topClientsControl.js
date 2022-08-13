const topClientsControl = {};

topClientsControl.getTopClients = (req,res)=>res.send(
    '<h1>Top 10 tiendas más visitadas</h1>'
    
);

module.exports = topClientsControl;