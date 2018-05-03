import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="application-main ">
        <div>
          <div className="clearfix container-lg mt-4 px-3">
            <div className="h-card col-3 float-left pr-3">
              <a className="u-photo d-block tooltipped tooltipped-s"></a>
              <div className="py-3"></div>
              <div className="mb-3 user-profile-bio"></div>
              <ul className="border-gray-light border-top py-3 vcard-details"></ul>
            </div>
            <div className="col-9 float-left pl-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
