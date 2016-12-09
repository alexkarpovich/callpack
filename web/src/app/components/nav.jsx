import React, {Component, ProptTypes} from 'react';


class Nav extends Component {
  render() {
    const items = [
      {title: 'One', href: '/one'},
      {title: 'Two', href: '/two'},
      {title: 'Three', href: '/three'},
    ];

    return (
      <div className="nav">
        {
          items.map((item, i) =>
            <div key={i} className="nav-item">
              <a href={item.href}>{item.title}</a>
            </div>
          )
        }
      </div>
    );
  }
}

export default Nav;
