import UserService from '../user/user.service';

class SignUpController {

  signup(req, res, next) {
    const user = req.body.user;

    UserService.create({name: user.username, email: user.email, password: user.password}, (err) => {
      if (err) return next(err);

      res.status(200).json({});
    });
  }

}

export default new SignUpController(); 