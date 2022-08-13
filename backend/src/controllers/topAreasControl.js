const topAareasControl = {};

topAareasControl.getTopAreas = (req,res)=>res.send(
    '<h1>Top 5 tiendas con mayor área</h1>'
    
);

module.exports = topAareasControl;