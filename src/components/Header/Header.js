import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import searchShortcutHint from '../../assets/images/search-shortcut-hint.svg';
import avatar2 from '../../assets/images/avatar2.jpg';

import MarkGithub from '../../assets/icons/MarkGithub';
import Bell from '../../assets/icons/Bell';
import Repo from '../../assets/icons/Repo';
import Plus from '../../assets/icons/Plus';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {searchActive: false, focusSuggestion: false};
  }

  componentDidMount() {
    this.props.fetchSuggestions();
  }

  render() {
    const { suggestions } = this.props;
    const { searchActive, focusSuggestion } = this.state;

    return (
      <header className="Header  f5">
        <div className="d-flex flex-justify-between px-3 container-lg">
          <div className="d-flex flex-justify-between ">
            <div>
              <a className="header-logo-invertocat">
                <MarkGithub size="32"/>
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
                        className={`form-control header-search-input ${searchActive ? "jump-to-field-active jump-to-field-active-non-empty" : "" }`}
                        placeholder="Search or jump to…"
                        onFocus={() => this.setState({searchActive: true})}
                        onBlur={() => this.setState({searchActive: false, focusSuggestion: false})}
                      ></input>
                      <img
                        className="mr-2 header-search-key-slash"
                        src={searchShortcutHint}
                        alt="search-shortcut-hint"
                      ></img>
                      <div className={`Box jump-to-suggestions overflow-hidden position-absolute ${searchActive ? "" : "d-none"}`}>
                        <ul className="jump-to-suggestions-results-container">
                          {suggestions.map(name =>
                          <li
                            key={name}
                            className={`d-flex f5 flex-items-center flex-justify-start navigation-item p-0 ${focusSuggestion === name ? "navigation-focus" : ""}`}
                            onMouseOver={()=>this.setState({focusSuggestion: name})}
                          >
                            <a className="d-flex flex-auto flex-items-center jump-to-suggestions-path no-underline p-2">
                              <div className="jump-to-octicon mr-2 text-center">
                                <Repo />
                              </div>
                              <div className="css-truncate css-truncate-target flex-auto jump-to-suggestion-name no-wrap overflow-hidden">{name}</div>
                              <div className="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-on-nav-focus js-jump-to-badge-jump">
                                Jump to&nbsp;
                                <span className="d-inline-block ml-1 v-align-middle">↵</span>
                              </div>
                            </a>
                          </li>)}
                        </ul>
                      </div>
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
                      <Bell />
                    </a>
                  </span>
                </li>
                <li className="dropdown">
                  {/* trick: details on click automatically add open atribut */}
                  <details className="details-expanded d-flex details-reset dropdown-details flex-items-center px-2">
                    <summary className="HeaderNavlink">
                      <Plus />
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
                  <details className="details-expanded d-flex details-reset dropdown-details flex-items-center pl-2">
                    <summary className="HeaderNavlink name mt-1">
                      <img
                        className="avatar float-left mr-1"
                        height={20}
                        width={20}
                        src={avatar2}
                        alt="@IDriuk"
                      />
                      <span className="dropdown-caret"></span>
                    </summary>
                    <ul className="dropdown-menu dropdown-menu-sw">
                      <li className="dropdown-header header-nav-current-user css-truncate">
                        Signed in as &shy;
                        <strong className="css-truncate-target">IDriuk</strong>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item">Your profile</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Your stars</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Your gists</a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item">Help</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Settings</a>
                      </li>
                      <li>
                        <form className="logout-form">
                          <button type="submit" className="dropdown-item dropdown-signout">Sign out</button>
                        </form>
                      </li>
                    </ul>
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

Header.propTypes = {
  suggestions: PropTypes.array.isRequired
};

export default Header;
