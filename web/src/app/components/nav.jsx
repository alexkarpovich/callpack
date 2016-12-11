import React, {Component, PropTypes} from 'react';


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
          <a href="/">ratio</a>
        </div>
        <div className="nav-items">
        {
          items.map((item, i) =>
            <div key={i} className="nav-item">
              <a href={item.href}>{item.title}</a>
            </div>
          )
        }
        </div>
        <div className="nav-actions">
          <a href="/signin">sign in</a>
          <a href="/signup">sign up</a>
        </div>
      </div>
    );
  }
}

export default Nav;
