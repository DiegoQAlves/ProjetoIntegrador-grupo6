const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const perfilController = require('../controllers/perfilController');
const carrinhoController = require('../controllers/carrinhoController');
const quizzController = require('../controllers/quizzController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", indexController.index)
router.get("/perfil", perfilController.index)
router.get("/carrinho", carrinhoController.index)
router.get("/perfil", perfilController.index)
router.get("/quizz", quizzController.index)

module.exports = router;
