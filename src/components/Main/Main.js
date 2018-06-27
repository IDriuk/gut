import React, { Component } from 'react';
import './Main.css';

import UnderlineNav from '../../containers/UnderlineNavContainer';
import PinnedRepos from '../../containers/PinnedReposContainer';
import CalendarGraph from '../CalendarGraph/CalendarGraph';

import avatar3 from '../../assets/images/avatar3.jpg';
import avatar1 from '../../assets/images/avatar1.jpg';

import Location from '../../assets/icons/Location';
import Push from '../../assets/icons/Push';
import Fold from '../../assets/icons/Fold';
import Unfold from '../../assets/icons/Unfold';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editBio: false,
      jumpToDropdown: false,
      rollupOpen: true
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 305) {
      this.setState({ stickyAvatar: true });
    } else {
      this.setState({ stickyAvatar: false });
    }
  }

  render() {
    const {editBio, jumpToDropdown, rollupOpen, stickyAvatar} = this.state;

    return (
      <div className="application-main ">
        <div>
          <div className="clearfix container-lg mt-4 px-3">
            <div className="h-card col-3 float-left pr-3">

              <div className={`user-profile-sticky-bar js-user-profile-sticky-bar ${stickyAvatar ? "is-stuck" : ""}`}>
                {/* skey: display table, table-cell */}
                <div className="user-profile-mini-vcard d-table">
                  <span className="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
                    <img
                      className="rounded-1"
                      src={avatar3}
                      alt="@IDriuk"
                      width={32}
                      height={32}
                    />
                  </span>
                  <span className="d-table-cell v-align-middle lh-condensed js-user-profile-following-mini-toggle">
                    <strong>IDriuk</strong>
                  </span>
                </div>
              </div>

              <a
                className="u-photo d-block tooltipped tooltipped-s"
                aria-label="Change your avatar"
              >
                <img
                  className="avatar width-full rounded-2"
                  src={avatar1}
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
              {!editBio && <div className="mb-3 user-profile-bio">
                <div className="d-inline-block mb-3">
                  <div>React.js developer from Poltava</div>
                </div>
                <button
                  className="btn width-full"
                  onClick={() => this.setState({editBio: true})}
                >Edit bio</button>
              </div>}
              {editBio && <form className="mb-3">
                <div>
                  <textarea
                    className="form-control mb-2 width-full"
                    placeholder="Add a bio"
                    rows="5"
                    defaultValue="React.js developer from Poltava"
                  ></textarea>
                  <div className="d-flex flex-justify-between flex-items-center">
                    <div>
                      <button type="submit" className="btn btn-sm btn-primary">Save</button>&nbsp;
                      <button
                        type="reset"
                        className="btn btn-sm"
                        onClick={() => this.setState({editBio: false})}
                      >Cancel</button>
                    </div>
                  </div>
                </div>
              </form>}
              <ul className="border-gray-light border-top py-3 vcard-details">
                <li className="vcard-detail pt-1 css-truncate css-truncate-target">
                  <Location />
                  <span>Poltava, Ukraine</span>
                </li>
              </ul>
            </div>

            <div className="col-9 float-left pl-2">
              <UnderlineNav />

              <div className="position-relative">
                <div className="mt-4">

                  <div>
                    <details className="details-reset">
                      <summary className="btn-link muted-link float-right mt-1 pinned-repos-setting-link">Customize your pinned repositories</summary>
                    </details>
                    <h2 className="f4 mb-2 text-normal">Pinned repositories</h2>
                    <PinnedRepos />
                  </div>

                  <div className="js-contribution-graph ">
                    <div className="contributions-setting float-right">
                      <button className="btn-link contributions-setting-link muted-link select-menu-button">
                        Contribution settings
                      </button>
                    </div>
                    <h2 className="f4 text-normal mb-2">
                      594 contributions in the last year
                    </h2>

                    <div className="mb-5 border border-gray-dark rounded-1 py-2">

                      <CalendarGraph />

                      <div className="contrib-footer clearfix mt-1 mx-3 px-3 pb-1">
                        <div className="float-left text-gray">
                          <a>Learn how we count contributions</a>
                        </div>
                        <div className="contrib-legend text-gray">
                          Less
                          <ul className="legend">
                            <li style={{backgroundColor: "#eee"}} ></li>&nbsp;
                            <li style={{backgroundColor: "#c6e48b"}} ></li>&nbsp;
                            <li style={{backgroundColor: "#7bc96f"}} ></li>&nbsp;
                            <li style={{backgroundColor: "#239a3b"}} ></li>&nbsp;
                            <li style={{backgroundColor: "#196127"}} ></li>&nbsp;
                          </ul>
                          More
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-2 float-right pl-5">
                    <ul className="filter-list small">
                      {[8, 7, 6, 5, 4].map(i =>
                        <li key={i} >
                          <a className={`filter-item mb-2 px-3 py-2 ${i===8 ? "selected" : ""}`}>201{i}</a>
                        </li>
                      )}
                    </ul>
                  </div>

                  <h2 className="f4 text-normal mb-2">
                    Contribution activity
                    <span className={`contributions-setting dropdown float-right ${jumpToDropdown ? "active" : ""}`}>
                      <button
                        className="btn-link contributions-setting-link muted-link select-menu-button text-normal"
                        onClick={()=>{this.setState({jumpToDropdown: !jumpToDropdown})}}
                      >
                        Jump to &shy;
                      </button>
                      <span className="dropdown-menu-content">
                        <span className="f5 dropdown-menu dropdown-menu-sw">
                          {[
                            "First pull request",
                            "First issue",
                            "First repository",
                            "Joined GitHub"].map(name => <a key={name} className="dropdown-item">{name}</a>)}
                        </span>
                      </span>
                    </span>
                  </h2>

                  <div
                    className="activity-listing contribution-activity"
                    style={{minHeight: 210}}
                  >
                    <div className="col-10 contribution-activity-listing float-left">
                      <div className="profile-timeline discussion-timeline width-full pb-4">
                        <h3 className="profile-timeline-month-heading bg-white d-inline-block h6 pr-2 py-1">
                          May <span className="text-gray"> 2018</span> &shy;
                        </h3>
                        <div className={`ml-3 pl-4 position-relative profile-rollup-wrapper py-4 ${rollupOpen ? "open" : ""}`}>
                          <span className="discussion-item-icon">
                            <Push />
                          </span>
                          <button className="btn-link f4 lh-condensed muted-link no-underline width-full">
                            <span className="float-left">
                              Created 36 commits in 1 repository
                            </span>
                            <span className="d-inline-block float-right">
                              <span
                                className="profile-rollup-toggle-closed float-right"
                                onClick={()=>this.setState({rollupOpen: !rollupOpen})}
                              >
                                <Fold />
                              </span>
                              <span
                                className="profile-rollup-toggle-open float-right"
                                onClick={()=>this.setState({rollupOpen: !rollupOpen})}
                              >
                                <Unfold />
                              </span>
                            </span>
                          </button>
                          <ul className="profile-rollup-content list-style-none">
                            <li className="ml-0 py-1">
                              <div className="d-inline-block col-8 css-truncate css-truncate-target lh-condensed">
                                <a>IDriuk/gut</a>
                                <a className="f6 muted-link ml-1">38 commits</a>
                              </div>
                              <div className="col-3 d-inline-block float-right">
                                <div
                                  style={{width: "100%"}}
                                  className="tooltipped tooltipped-n"
                                  aria-label="100% of commits in June were made to IDriuk/gut "
                                >
                                  <span
                                    style={{backgroundColor: "#196127"}}
                                    className="d-flex anim-grow-x progress-bar mt-1"></span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <form className="col-10 ajax-pagination-form">
                      <button className="border-gray-dark btn btn-outline contribution-activity-show-more f6 mt-0 py-2 width-full ajax-pagination-btn">
                        Show more activity
                      </button>
                      <p className="text-gray f6 mt-4">
                        Seeing something unexpected? Take a look at the &shy;
                        <a>GitHub profile guide</a>
                        .
                      </p>
                    </form>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
