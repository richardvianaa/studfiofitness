var express = require('express');
var router = express.Router();

var homeController = require('../controllers/homeControllers');

router.get('/pag-inicial', homeController.index);

module.exports = router;