import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


class Nav extends Component {
  render() {
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
        <div className="nav-actions">
          <Link to={'/signin'}>sign in</Link>
          <Link to={'/signup'}>sign up</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
