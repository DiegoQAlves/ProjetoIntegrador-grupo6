var express = require('express');
var router = express.Router();

const authController = require('../controllers/authControllers');

router.get("/login", authController.create)
router.post("/login", authController.store)

module.exports = router;
