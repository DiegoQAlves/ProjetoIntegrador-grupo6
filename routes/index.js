const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexControllers');
const lojaController = require('../controllers/lojaController');
const carrinhoController = require('../controllers/carrinhoControllers');
const quizzController = require('../controllers/quizzControllers');
const sobreController = require('../controllers/sobreControllers');
const contatoController = require('../controllers/contatoContollers');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", indexController.index)

router.get("/loja", lojaController.index)

router.get("/carrinho", carrinhoController.index)

router.get("/quizz", quizzController.index)

router.get("/sobre-nos", sobreController.index)

router.get("/contato", contatoController.index)

module.exports = router;
