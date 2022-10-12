const router = require("express").Router();

// import controllers
const home = require('../controllers/homeController');
const register = require('../controllers/registerController')
const login = require('../controllers/loginController')
const todo = require('../controllers/todoController')


router.get("/", home.index);

router.post("/register", register.registerPost);

router.post("/login", login.loginPost);

router.post("/todo/create", todo.toDoAdd);
router.post("/todo/delete/:id", todo.toDoRemove);
router.post("/todo/update/:id", todo.toDoChange);
router.post("/todo/toggle/:id", todo.toDoToggle);


module.exports = router;