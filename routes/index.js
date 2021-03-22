const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const carrinhoController = require('../controllers/carrinhoController');
const quizzController = require('../controllers/quizzController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", indexController.index)
router.get("/login", loginController.index)
router.get("/carrinho", carrinhoController.index)
router.get("/quizz", quizzController.index)

module.exports = router;
