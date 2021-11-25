const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers'); 
const userController = require('../controllers/userController');

router.post('/register', catchErrors(userController.register));
router.post('/login', catchErrors(userController.register));






module.exports = router;