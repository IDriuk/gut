import React, { Component, Fragment } from 'react';
import './UnderlineNav.css';

// skey: sticky, sticky-js, jQuery Sticky Kit

class UnderlineNav extends Component {
  constructor(props) {
    super(props);

    this.state = { sticky: false, offsetLeft: 0 };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ offsetLeft: this.nav.offsetLeft})
  }

  // skey: offset window
  handleScroll() {
    if (window.pageYOffset > 80) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  }

  render() {
    const { sticky, offsetLeft } = this.state;
    const displayPlaceholder = sticky ? "block" : "none";
    const navStyle = !sticky ? { position: "static" }
                             : { position: "fixed",
                                 top: 0,
                                 left: offsetLeft,
                                 width: 727,
                                 marginTop: 0
                               }
    return (
      <Fragment>
        <div
          className="UnderlineNav user-profile-nav top-0 is-placeholder"
          style={{visibility: "hidden", display: displayPlaceholder, height: 55}}
        ></div>
        <div
          className={`UnderlineNav user-profile-nav top-0 ${sticky ? "is-stuck" : "" }`}
          style={navStyle}
          ref={(node) => {this.nav = node}}
        >
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
