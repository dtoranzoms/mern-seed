var LoginGenerator = require('./loginGenerator');
const acorn = require('acorn-jsx');
const escodegen = require('escodegen-wallaby');

module.exports = class extends LoginGenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  copyFiles() {

    //The following files are new files
    this.fs.copy(
      this.templatePath('apiAuthIndex.js'),
      this.destinationPath("api/auth/index.js")
    );

    this.fs.copy(
      this.templatePath('loginController.js'),
      this.destinationPath("api/auth/login.controller.js")
    );

    this.fs.copy(
      this.templatePath('signUpController.js'),
      this.destinationPath("api/auth/signup.controller.js")
    );

    this.fs.copy(
      this.templatePath('secret.js'),
      this.destinationPath("api/secret.js")
    );

    this.fs.copy(
      this.templatePath('loginActions.js'),
      this.destinationPath("app/actions/loginActions.js")
    );

    this.fs.copy(
      this.templatePath('signUpActions.js'),
      this.destinationPath("app/actions/signUpActions.js")
    );

    this.fs.copy(
      this.templatePath('loginForm.js'),
      this.destinationPath("app/components/auth/LoginForm.js")
    );

    this.fs.copy(
      this.templatePath('loginPage.js'),
      this.destinationPath("app/components/auth/LoginPage.js")
    );

    this.fs.copy(
      this.templatePath('signUpForm.js'),
      this.destinationPath("app/components/auth/SignUpForm.js")
    );

    this.fs.copy(
      this.templatePath('signUpPage.js'),
      this.destinationPath("app/components/auth/SignUpPage.js")
    );

    this.fs.copy(
      this.templatePath('authReducer.js'),
      this.destinationPath("app/reducers/authReducer.js")
    );

    this.fs.copy(
      this.templatePath('loginService.js'),
      this.destinationPath("app/services/loginService.js")
    );

    this.fs.copy(
      this.templatePath('signUpService.js'),
      this.destinationPath("app/services/signUpService.js")
    );

    this.fs.copy(
      this.templatePath('styles.css'),
      this.destinationPath("app/styles/styles.css")
    );

    //The following files replace the ones already in the project
    this.fs.copy(
      this.templatePath('addApiRoutes.js'),
      this.destinationPath("api/addApiRoutes.js")
    );

    this.fs.copy(
      this.templatePath('addApiRoutes.js'),
      this.destinationPath("api/addApiRoutes.js")
    );

    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath("api/server.js")
    );

    this.fs.copy(
      this.templatePath('userSchema.js'),
      this.destinationPath("api/user/user.schema.js")
    );

    this.fs.copy(
      this.templatePath('apiUserService.js'),
      this.destinationPath("api/user/user.service.js")
    );

    this.fs.copy(
      this.templatePath('actionTypes.js'),
      this.destinationPath("app/actions/actionTypes.js")
    );

    this.fs.copy(
      this.templatePath('app.js'),
      this.destinationPath("app/components/App.js")
    );

    this.fs.copy(
      this.templatePath('header.js'),
      this.destinationPath("app/components/common/Header.js")
    );

    this.fs.copy(
      this.templatePath('userForm.js'),
      this.destinationPath("app/components/users/UserForm.js")
    );

    this.fs.copy(
      this.templatePath('appReducersIndex.js'),
      this.destinationPath("app/reducers/index.js")
    );

    this.fs.copy(
      this.templatePath('initialState.js'),
      this.destinationPath("app/reducers/initialState.js")
    );

    this.fs.copy(
      this.templatePath('routes.js'),
      this.destinationPath("app/routes.js")
    );

    this.fs.copy(
      this.templatePath('apiEndpoints.js'),
      this.destinationPath("app/services/apiEndpoints.js")
    );

    this.fs.copy(
      this.templatePath('appUserService.js'),
      this.destinationPath("app/services/userService.js")
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath("package.json")
    );

  }

}