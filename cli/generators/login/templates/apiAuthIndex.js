import { Router } from 'express';
import loginController from './login.controller';
import signUpController from './signup.controller';

var router = new Router();

router.post('/api/auth/login', loginController.login);
router.post('/api/auth/signup', signUpController.signup);

module.exports = router; 
