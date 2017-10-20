import UserService from '../user/user.service';
import jwt from 'jsonwebtoken';
import secret from '../secret';

class LoginController {

  login(req, res, next) {
    const user = req.body.user;
    const searchCondition = {name: user.username, password: user.password};
    const token = jwt.sign(user, secret);

    UserService.findBy(searchCondition, (err, foundUser) => {
      if (err) return next(err);

      //If there's no user, then we get an empty array
      if (foundUser.length === 0) {
        res.status(404).json({});
      }
      else {
        res.status(200).json({token});
      }

    });

  }

}

export default new LoginController(); 