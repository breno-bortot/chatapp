const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers'); 
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/register', catchErrors(userController.register));

router.post('/login', catchErrors(userController.login));

router.put('/edit/:id', auth, catchErrors(userController.edit));

router.delete('/delete/:id', auth, catchErrors(userController.delete));

router.get('/listAll', auth, catchErrors(userController.listAll));










module.exports = router;