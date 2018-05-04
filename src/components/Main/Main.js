import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="application-main ">
        <div>
          <div className="clearfix container-lg mt-4 px-3">
            <div className="h-card col-3 float-left pr-3">
              <a className="u-photo d-block tooltipped tooltipped-s">
                <img
                  class="avatar width-full rounded-2"
                  src="https://avatars1.githubusercontent.com/u/8888039?s=460&v=4"
                  width={230}
                  height={230}
                  alt=""
                />
              </a>
              <div className="py-3">
                <h1 className="vcard-names">
                  <span className="p-name vcard-fullname d-block overflow-hidden">Ivan Driuk</span>
                  <span className="p-nickname vcard-username d-block">IDriuk</span>
                </h1>
              </div>
              <div className="mb-3 user-profile-bio">
                <div className="d-inline-block mb-3">
                  <div>React.js developer from Poltava</div>
                </div>
                <button className="btn width-full">Edit bio</button>
              </div>
              <ul className="border-gray-light border-top py-3 vcard-details">
                <li className="vcard-detail pt-1 css-truncate css-truncate-target">
                  <svg className="octicon octicon-location" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                  </svg>
                  <span>Poltava, Ukraine</span>
                </li>
              </ul>
            </div>
            <div className="col-9 float-left pl-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
