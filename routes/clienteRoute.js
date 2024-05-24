var express = require("express");
var router = express.Router();


const clienteController = require('../controllers/clienteControllers');

router.get('/clientes', clienteController.geral);


router.get('/cadastro-cliente', clienteController.cadastro);
router.post('/cadastro-cliente', clienteController.registro);

module.exports = router;