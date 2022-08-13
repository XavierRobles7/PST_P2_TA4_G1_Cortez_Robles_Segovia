const {Router}=require('express');
const router = Router();

const { getStores } = require('../controllers/storesControl.js');

router.route('/').get(getStores)

module.exports = router