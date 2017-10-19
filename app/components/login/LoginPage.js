import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from '../../lib/autoBind';
import * as loginActions from '../../actions/loginActions';
import LoginForm from './LoginForm';
import styles from '../../styles/styles.css';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);

    autoBind(this, {
      bindOnly: ['handleLogin']
    });
  }

  handleLogin(formData) {
    this.props.actions.login(formData);
  }

  render() {
    return (
      <div className="loginForm">
        <h1>Sign in</h1>
        <LoginForm
          onSubmit={this.handleLogin}
          loggingIn={this.props.loggingIn}
          invalidUser={this.props.invalidUser}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  invalidUser: PropTypes.bool.isRequired
};

function mapStatesToProps(state) {
  return {
    loggingIn: state.reducers.login.loggingIn,
    invalidUser: state.reducers.login.invalidUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(LoginPage);