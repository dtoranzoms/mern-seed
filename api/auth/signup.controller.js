import UserService from '../user/user.service';
import jwt from 'jsonwebtoken';
import secret from '../secret';

class SignUpController {

  signup(req, res, next) {
    const user = req.body.user;
    const searchCondition = {name: user.username, password: user.password};
    const token = jwt.sign(user, secret);

    UserService.create({name: user.username, email: user.email, password: user.password}, (err, foundUser) => {
      if (err) return next(err);

      res.status(200).json({token});
    });
  }

}

export default new SignUpController();