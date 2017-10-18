import React, { PropTypes } from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import autoBind from '../../lib/autoBind';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      canSubmit: false
    };

    autoBind(this, {
      bindOnly: ['enableButton', 'disableButton',  'submit', 'resetForm']
    });
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  submit(model) {
    this.props.onSubmit(model);
  }

  resetForm() {
    this.refs.form.reset();
  }

  render(){
    const errorSection = (this.props.invalidUser)?(<p>Invalid username or password.</p>):null;
    return (
      <div>
        <Formsy.Form ref="form" className="horizontal" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <Input formNoValidate required name="username" label="Username" placeholder="Your username goes here" value=""/>
          <Input
            required
            name="password"
            value=""
            label="Password"
            type="password"
            validations="minLength:4"
            validationError="Your password must be at least 4 characters long."
            placeholder="Your password goes here"
          />
          {errorSection}
          <div>
            <button type="button" onClick={this.resetForm}>Reset</button>
            &nbsp;
            <input type="submit" disabled={!this.state.canSubmit} value={this.props.loggingIn ? 'Logging-in... ' : 'Login'} />
          </div>
        </Formsy.Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  invalidUser: PropTypes.bool.isRequired
};

export default LoginForm;