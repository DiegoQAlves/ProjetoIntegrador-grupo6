const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexControllers');
const lojaController = require('../controllers/lojaController');
const carrinhoController = require('../controllers/carrinhoControllers');
const quizzController = require('../controllers/quizzControllers');
const sobreController = require('../controllers/sobreControllers');
const contatoController = require('../controllers/contatoContollers');
const authController = require('../controllers/authControllers');
const HidratanteController = require("../controllers/hidratanteController")
const userController = require("../controllers/userController")
const perfumeController = require("../controllers/perfumeController")
const cadastrarProdutoController = require('../controllers/cadastrarProdutoController');


const authMidleware = require("../middlewares/auth");

router.get("/", indexController.index)

router.get("/login", authController.create)
router.post("/login", authController.store)

router.get("/registro", userController.create)
router.post("/registro", userController.store)

router.get("/cadastrar", cadastrarProdutoController.index)

router.get("/loja", lojaController.index)
router.get("/hidratantes", HidratanteController.index)
router.get("/perfumes", perfumeController.index)

router.get("/carrinho", carrinhoController.index)

router.get("/quizz", quizzController.index)

router.get("/sobre", sobreController.index)

router.get("/contato", contatoController.index)

module.exports = router;
