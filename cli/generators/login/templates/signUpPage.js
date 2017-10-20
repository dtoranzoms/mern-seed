import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from '../../lib/autoBind';
import * as signUpActions from '../../actions/signUpActions';
import SignUpForm from './SignUpForm';
import styles from '../../styles/styles.css';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    autoBind(this, {
      bindOnly: ['handleSignUp']
    });
  }

  handleSignUp(formData) {
    this.props.actions.signUp(formData);
  }

  render() {
    return (
      <div className="signUpForm">
        <h1>Sign up</h1>
        <SignUpForm
          onSubmit={this.handleSignUp}
          signingUp={this.props.signingUp}
          signUpError={this.props.signUpError}
        />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  actions: PropTypes.object.isRequired,
  signingUp: PropTypes.bool.isRequired,
  signUpError: PropTypes.bool.isRequired
};

function mapStatesToProps(state) {
  return {
    signingUp: state.reducers.auth.signingUp,
    signUpError: state.reducers.auth.signUpError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signUpActions, dispatch)
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(SignUpPage); 