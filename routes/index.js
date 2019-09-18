var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");
/*
 * GET home page.
 */
router.get('/', ctrlMain.index);
router.get('/register', ctrlMain.get_register);
router.get('/login', ctrlMain.get_login);
module.exports = router;