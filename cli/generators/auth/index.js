var LoginGenerator = require('./loginGenerator');

module.exports = class extends LoginGenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  crateFiles() {

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

  }

  modifyFiles() {

    this.modifyAddApiRoutesFile(this.destinationPath('api/addApiRoutes.js'));
    this.modifyServerFile(this.destinationPath('api/server.js'));
    this.modifyUserSchemaFile(this.destinationPath('api/user/user.schema.js'));

    //TODO: generate the rest of the files. The list is:
    //The following files replace the ones already in the project
    //  -> api/user/user.service.js
    //  -> app/actions/actionTypes.js
    //  -> app/components/App.js
    //  -> app/components/common/Header.js
    //  -> app/components/users/UserForm.js
    //  -> app/reducers/index.js
    //  -> app/reducers/initialState.js
    //  -> app/routes.js
    //  -> app/services/apiEndpoints.js
    //  -> app/services/userService.js
    //  -> package.json

  }

}