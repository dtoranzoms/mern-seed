import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import Footer from './common/Footer';

// This component handles the App template used on every page.
class App extends React.Component {
  render(){
    return (
      <div>
        <Header showAllLinks={this.props.showAllHeaderLinks}/>
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
  showAllHeaderLinks: PropTypes.bool.isRequired
};

function mapStatesToProps(state) {
  return {
    showAllHeaderLinks: state.reducers.login.loggedIn
  };
}

export default connect(mapStatesToProps)(App);
