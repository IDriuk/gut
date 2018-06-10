import React, { Component, Fragment } from 'react';
import './UnderlineNav.css';

// skey: sticky, sticky-js, jQuery Sticky Kit

class UnderlineNav extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="UnderlineNav user-profile-nav top-0 is-placeholder"
          style={visibility: "hidden", display: "none", height: 55}
        ></div>
        <div className="UnderlineNav user-profile-nav top-0">
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
      </Fragment>
    );
  }
}

export default UnderlineNav;
