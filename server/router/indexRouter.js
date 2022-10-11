const router = require("express").Router();

// import controllers
const home = require('../controllers/homeController');
const register = require('../controllers/registerController')

router.get("/", home.index);

router.post("/register", register.registerPost);

module.exports = router;