let express = require('express');
let router = express.Router();

const authController = require('../controllers/authControllers');

router.get("/login", authController.create)
router.post("/login", authController.store)

module.exports = router;
