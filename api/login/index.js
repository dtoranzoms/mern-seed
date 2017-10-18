import { Router } from 'express';
import controller from './login.controller';

var router = new Router();

router.post('/api/login', controller.login);

module.exports = router;