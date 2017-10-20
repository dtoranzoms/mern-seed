const Generator = require('yeoman-generator');
const ejs = require('ejs');
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

}
