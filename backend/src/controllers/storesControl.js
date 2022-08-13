const storeControl = {};

storeControl.getStores = (req,res)=>res.send(
    '<h1>Lista de Tiendas</h1>'
    
);

module.exports = storeControl;