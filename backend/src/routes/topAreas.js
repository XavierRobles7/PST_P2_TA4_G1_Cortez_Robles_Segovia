const {Router}=require('express');
const router = Router();

const { getTopAreas } = require('../controllers/topAreasControl.js');

router.route('/').get(getTopAreas)

module.exports = router