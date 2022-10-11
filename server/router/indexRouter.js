const router = require("express").Router();

// import controllers
const home = require('../controllers/homeController');

router.get("/", home.index);

module.exports = router;