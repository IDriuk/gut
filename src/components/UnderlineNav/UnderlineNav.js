import React, { Component } from 'react';
import './UnderlineNav.css';


class UnderlineNav extends Component {
  render() {
    return (
      <div className="UnderlineNav top-0 user-profile-nav">
        <nav className="UnderlineNav-body">
          {
            [
              ["Overview", null],
              ["Repositories", 16],
              ["Stars", 7],
              ["Followers", 7],
              ["Following", 2]]
              .map(([title, counter], index) =>
                index !== 0 ?
                  <a key={index} className="UnderlineNav-item">
                    {title}
                    &nbsp;
                    {counter && <span className="Counter">{counter}</span>}
                  </a> :
                  <a key={index} className={"UnderlineNav-item selected"}>
                    {title}
                  </a>
              )
          }
        </nav>
      </div>
    );
  }
}

export default UnderlineNav;
