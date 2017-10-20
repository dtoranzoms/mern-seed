import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  let links = [
    { to: '/app/about', className: 'glyphicon glyphicon-exclamation-sign', label: 'About'}
  ];
  if(props.showRestrictedOptions) {
    links.unshift(
      { to: '/app/users', className: 'glyphicon glyphicon-user', label: 'Users'}
    );
    links.unshift(
      { to: '/', className: 'glyphicon glyphicon-home', label: 'Home'}
    );
  }

  const linksSection = links.map((link, index) =>
    (
      <li key={index} >
        <Link to={link.to} activeClassName="active"><i className={`${link.className}`}/> {link.label}</Link>
      </li>
    )
  );

  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <IndexLink to="/" activeClassName="navbar-brand" className="navbar-brand"><i className="glyphicon glyphicon-check" /> MERN seed</IndexLink>
        </div>
        <ul className="nav navbar-nav">
          {linksSection}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  showRestrictedOptions: PropTypes.bool.isRequired
};

export default Header;