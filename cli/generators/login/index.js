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

/*module.exports = class extends CrudGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true });

    this.option('api', {
      desc: 'Include API related files',
      type: Boolean
    });

    this.includeApi = this.options.api || this.options.api === undefined;
  }

  writing() {
    const name = this.options.name.toLowerCase().trim();
    const pluralizedName = pluralize(name);
    const NAME = name.toUpperCase();
    const data = {
      name,
      ucName: utils.toFirstLetterUpperCase(name),
      pluralizedName,
      pluralizedUcName: utils.toFirstLetterUpperCase(pluralizedName),
      NAME,
      PLURALIZED_NAME: pluralize(NAME)
    };

    // Only include API files when needed.
    if (this.includeApi) {
      // Schema.
      this.fs.copyTpl(
        this.templatePath('schema.js'),
        this.destinationPath(`api/${name}/${name}.schema.js`),
        data
      );

      // Controller.
      this.fs.copyTpl(
        this.templatePath('service.js'),
        this.destinationPath(`api/${name}/${name}.service.js`),
        data
      );

      // Service.
      this.fs.copyTpl(
        this.templatePath('controller.js'),
        this.destinationPath(`api/${name}/${name}.controller.js`),
        data
      );

      // Index.
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(`api/${name}/index.js`),
        data
      );

      // Add Express API routes to server.
      this.addApiRoutes(
        this.destinationPath('api/addApiRoutes.js'),
        data
      );

  addApiRoutes(destinationPath, data) {
    
    let currentTree = acorn.parse(this.fs.read(destinationPath), { sourceType: "module" });
    let functionBody = currentTree.body.find(node => node.type === 'FunctionDeclaration').body;
    let newStatement = acorn.parse(`app.use(require('./${data.name}/index.js'))`)

    if (!this.nodeExistsInScope(newStatement, functionBody))
    {
      functionBody.body.push(newStatement);
    }

    this.fs.write(destinationPath, escodegen.generate(currentTree));
  }



    }

    // Actions.
    this.fs.copyTpl(
      this.templatePath('actions.js'),
      this.destinationPath(`app/actions/${name}Actions.js`),
      data
    );

    // Reducer.
    this.fs.copyTpl(
      this.templatePath('reducer.js'),
      this.destinationPath(`app/reducers/${name}Reducer.js`),
      data
    );

    // Service.
    this.fs.copyTpl(
      this.templatePath('appService.js'),
      this.destinationPath(`app/services/${name}Service.js`),
      data
    );

    // Components.
    this.fs.copyTpl(
      this.templatePath('components/page.js'),
      this.destinationPath(`app/components/${name}/${data.ucName}Page.js`),
      data
    );
    this.fs.copyTpl(
      this.templatePath('components/list.js'),
      this.destinationPath(`app/components/${name}/${data.ucName}List.js`),
      data
    );
    this.fs.copyTpl(
      this.templatePath('components/detail.js'),
      this.destinationPath(`app/components/${name}/${data.ucName}.js`),
      data
    );
    this.fs.copyTpl(
      this.templatePath('components/form.js'),
      this.destinationPath(`app/components/${name}/${data.ucName}Form.js`),
      data
    );
    this.fs.copyTpl(
      this.templatePath('components/addPage.js'),
      this.destinationPath(`app/components/${name}/${data.ucName}AddPage.js`),
      data
    );
    this.fs.copyTpl(
      this.templatePath('components/editPage.js'),
      this.destinationPath(`app/components/${name}/${data.ucName}EditPage.js`),
      data
    );

    // Update action types.
    this.appendTpl(
      this.templatePath('actionTypes.js'),
      this.destinationPath('app/actions/actionTypes.js'),
      data
    );

    // Update API endpoints.
    this.appendTpl(
      this.templatePath('apiEndpoints.js'),
      this.destinationPath('app/services/apiEndpoints.js'),
      data
    );

    // Update reducers configuration.
    this.updateReducersConfiguration(
      this.destinationPath('app/reducers/index.js'), 
      this.destinationPath('app/reducers/initialState.js'), 
      data
    );

    // Update routes.
    this.updateRoutes(
      this.templatePath('routes.js'),
      this.destinationPath('app/routes.js'),
      data
    );
  }
};*/
