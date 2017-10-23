const Generator = require('yeoman-generator');
const acorn = require('acorn-jsx');
const escodegen = require('escodegen-wallaby');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  nodeExistsInScope(node, context) {

    let nodeSrc = escodegen.generate(node);
    let contextSrc = escodegen.generate(context);

    return contextSrc.indexOf(nodeSrc) != -1;
  }

  extendObject(objectExpression, propertyName, propertyValue) {
    
    let existingProperty = objectExpression.properties.find((prop) =>
          prop.key.name === propertyName
    );

    let src = `x = {${propertyName}${propertyValue != undefined ? `: ${propertyValue}` : '' }}`;

    let newProperty = acorn.parse(src).body[0].expression.right.properties[0];

    if (!existingProperty) {
      objectExpression.properties.push(newProperty);
    } else {
      existingProperty.value = newProperty.value;
    }
  }

  modifyAddApiRoutesFile(destinationPath) {
    const input = this.fs.read(destinationPath);
    const currentTree = acorn.parse(input, { sourceType: "module" });
    const functionBody = currentTree.body.find(node => node.type === 'FunctionDeclaration').body;
    const newStatement = acorn.parse("app.use(require('./auth/index.js'));");

    if (!this.nodeExistsInScope(newStatement, functionBody))
    {
      functionBody.body.push(newStatement);
    }

    this.fs.write(destinationPath, escodegen.generate(currentTree));
  }

  modifyServerFile(destinationPath) {
    const input = this.fs.read(destinationPath);
    const currentTree = acorn.parse(input, { sourceType: "module" });
    const programBody = currentTree.body;
    const importStatements = ['import secret from \'./secret\';', 'import expressJWT from \'express-jwt\''];
    const appUseStatement = acorn.parse('app.use(\'/api\', expressJWT({ secret: secret }).unless({ path: [new RegExp(\'/api/auth/\')] }));');

    importStatements.forEach((statement) => {
      const newStatement = acorn.parse(statement, { sourceType: "module" });
      if (!this.nodeExistsInScope(newStatement, currentTree)) {
        programBody.unshift(newStatement);
      }
    });

    //Do not move it to the top, currentTree is different here so the index is different as well
    const firstExpressionStatementIndex = currentTree.body.findIndex(node => node.type === 'ExpressionStatement');

    if (!this.nodeExistsInScope(appUseStatement, currentTree)) {
      programBody.splice(firstExpressionStatementIndex, 0, appUseStatement);
    }

    this.fs.write(destinationPath, escodegen.generate(currentTree));
  }

  modifyUserSchemaFile(destinationPath) {
    const input = this.fs.read(destinationPath);
    const currentTree = acorn.parse(input, { sourceType: "module" });
    const userSchemaDeclaration = currentTree.body.find(node => {
      return node.type === 'VariableDeclaration' && node.declarations[0].id.name === 'userSchema'
    }).declarations[0].init.arguments[0];

    let generator = this;
    generator.extendObject(userSchemaDeclaration, "pepe", "String");

    this.fs.write(destinationPath, escodegen.generate(currentTree));
  }

}
