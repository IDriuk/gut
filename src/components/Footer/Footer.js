import React, { Component } from 'react';
import './Footer.css';
import MarkGithub from '../../assets/icons/MarkGithub';

class Footer extends Component {
  render() {
    return (
      <div className="footer container-lg px-3">
        <div className="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
          <ul className="list-style-none d-flex flex-wrap">
            <li className="mr-3">
              © 2018&nbsp;
              <span>GitHub</span>
              , Inc.
            </li>
            <li className="mr-3">
              <a>Terms</a>
            </li>
            <li className="mr-3">
              <a>Privacy</a>
            </li>
            <li className="mr-3">
              <a>Security</a>
            </li>
            <li className="mr-3">
              <a>Status</a>
            </li>
            <li >
              <a>Help</a>
            </li>
          </ul>
          <a className="footer-octicon">
            <MarkGithub size="24"/>
          </a>
          <ul className="list-style-none d-flex flex-wrap ">
            <li className="mr-3">
              <a>Contact GitHub</a>
            </li>
            <li className="mr-3">
              <a>API</a>
            </li>
            <li className="mr-3">
              <a>Training</a>
            </li>
            <li className="mr-3">
              <a>Shop</a>
            </li>
            <li className="mr-3">
              <a>Blog</a>
            </li>
            <li >
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-justify-center pb-6">
          <span className="f6 text-gray-light"></span>
        </div>
      </div>
    );
  }
}

export default Footer;
