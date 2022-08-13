const {Router}=require('express');
const router = Router();

const { getTopClients } = require('../controllers/topClientsControl.js');

router.route('/').get(getTopClients)

module.exports = router