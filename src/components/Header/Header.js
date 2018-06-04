import React, { Component } from 'react';
import './Header.css';

import searchShortcutHint from '../../assets/images/search-shortcut-hint.svg';

class Header extends Component {
  render() {
    return (
      <header className="Header  f5">
        <div className="d-flex flex-justify-between px-3 container-lg">
          <div className="d-flex flex-justify-between ">
            <div>
              <a className="header-logo-invertocat">
                <svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="HeaderMenu d-flex flex-justify-between flex-auto">
            <div className="d-flex">
              <div>
                <div className="header-search">
                  <form>
                    <label className="d-flex flex-items-center flex-justify-between form-control header-search-wrapper header-search-wrapper-jump-to position-relative">
                      <input
                        className="form-control header-search-input"
                        placeholder="Search or jump to…"
                      ></input>
                      <img
                        className="mr-2 header-search-key-slash"
                        src={searchShortcutHint}
                        alt="search-shortcut-hint"
                      ></img>
                    </label>
                  </form>
                </div>
              </div>
              <ul className="d-flex pl-2 flex-items-center text-bold list-style-none">
                <li>
                  <a className="HeaderNavlink px-2">Pull requests</a>
                </li>
                <li>
                  <a className="HeaderNavlink px-2">Issues</a>
                </li>
                <li>
                  <a className="HeaderNavlink px-2">Marketplace</a>
                </li>
                <li>
                  <a className="HeaderNavlink px-2">Explore</a>
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <ul className="user-nav d-flex flex-items-center list-style-none">
                <li className="dropdown">
                  <span className="d-inline-block  px-2">
                    <a className="notification-indicator tooltipped">
                      <svg className="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                        <path fillRule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path>
                      </svg>
                    </a>
                  </span>
                </li>
                <li className="dropdown">
                  {/* trick: details on click automatically add open atribut */}
                  <details className="d-flex details-reset dropdown-details flex-items-center px-2">
                    <summary className="HeaderNavlink">
                      <svg className="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path>
                      </svg>
                      <span className="dropdown-caret mt-1"></span>
                    </summary>
                    <ul className="dropdown-menu dropdown-menu-sw">
                      <a className="dropdown-item">New repository</a>
                      <a className="dropdown-item">Import repository</a>
                      <a className="dropdown-item">New gist</a>
                      <a className="dropdown-item">New organization</a>
                    </ul>
                  </details>
                </li>
                <li className="dropdown">
                  <details className="d-flex details-reset dropdown-details flex-items-center pl-2">
                    <summary className="HeaderNavlink name mt-1">
                      <img
                        className="avatar float-left mr-1"
                        height={20}
                        width={20}
                        src="https://avatars0.githubusercontent.com/u/8888039?s=40&v=4"
                        alt="@IDriuk"
                      />
                      <span className="dropdown-caret"></span>
                    </summary>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
