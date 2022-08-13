const topSalesControl = {};

topSalesControl.getTopSales = (req,res)=>res.send(
    '<h1>Top 20 tiendas con mayor ganancia</h1>'
    
);

module.exports = topSalesControl;