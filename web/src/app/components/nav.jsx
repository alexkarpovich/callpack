import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


class Nav extends Component {
  render() {
    const {auth} = this.props;
    const {actions} = this.context;
    const items = [
      {title: 'one', href: '/one'},
      {title: 'two', href: '/two'},
      {title: 'three', href: '/three'},
    ];

    return (
      <div className="nav">
        <div className="brand">
          <Link to={'/'}>ratio</Link>
        </div>
        <div className="nav-items">
        {
          items.map((item, i) =>
            <div key={i} className="nav-item">
              <Link to={item.href}>{item.title}</Link>
            </div>
          )
        }
        </div>
        {!auth.isLoggedIn ? (
          <div className="nav-actions">
            <Link to={'/signin'}>sign in</Link>
            <Link to={'/signup'}>sign up</Link>
          </div>
        ) : (
          <div className="nav-actions">
            <Link to={'/'} onClick={() => actions.auth.signout()}>sign out</Link>
            <Link to={'/profile'}>User</Link>
          </div>
        )}
      </div>
    );
  }
}

Nav.contextTypes = {
  actions: PropTypes.object.isRequired,
};

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Nav;
