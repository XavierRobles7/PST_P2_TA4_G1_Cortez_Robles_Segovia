const {Router}=require('express');
const router = Router();

const { getTopSales } = require('../controllers/topSalesControl.js');

router.route('/').get(getTopSales)

module.exports = router