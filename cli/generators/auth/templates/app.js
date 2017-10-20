import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import Footer from './common/Footer';

// This component handles the App template used on every page.
class App extends React.Component {
  render(){
    return (
      <div>
        <Header showRestrictedOptions={this.props.isUserAuthenticated}/>
        <div className="container-fluid">
          {this.props.children}
        </div>
        <hr />
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired
};

function mapStatesToProps(state) {
  return {
    isUserAuthenticated: state.reducers.auth.loggedIn
  };
}

export default connect(mapStatesToProps)(App);