var express = require('express');
var router = express.Router();


const userAdmController = require('../controllers/userADMController');


router.get('/cadastroSucesso', userAdmController.cadastroSucesso);

router.get('/cadastroADM', userAdmController.cadastroADM);
router.post('/cadastroADM', userAdmController.registroADM);




module.exports = router;