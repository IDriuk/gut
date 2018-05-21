import React, { Component } from 'react';
import './Main.css';

import CalendarGraph from './CalendarGraph';

class Main extends Component {
  render() {
    return (
      <div className="application-main ">
        <div>
          <div className="clearfix container-lg mt-4 px-3">
            <div className="h-card col-3 float-left pr-3">
              <a className="u-photo d-block tooltipped tooltipped-s">
                <img
                  className="avatar width-full rounded-2"
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

            <div className="col-9 float-left pl-2">
              <div className="UnderlineNav top-0 user-profile-nav">
                <nav className="UnderlineNav-body">
                  {
                    ["Overview", "Repositories", "Stars", "Followers", "Following"]
                      .map((title, index) =>
                        <a key={index} className={`UnderlineNav-item ${index === 0 ? "selected" : ""}`}>
                          {title} &nbsp;
                          {index > 0 && <span className="Counter">{index}</span>}
                        </a>)
                  }
                </nav>
              </div>

              <div className="position-relative">
                <div className="mt-4">

                  <div>
                    <details className="details-reset">
                      <summary className="btn-link muted-link float-right mt-1 pinned-repos-setting-link">Customize your pinned repositories</summary>
                    </details>
                    <h2 className="f4 mb-2 text-normal">Pinned repositories</h2>
                    <form>
                      <ol className="mb-4 pinned-repos-list">
                        {[
                          {name: "gut", desc: "reverse engineering of github frontend", language: "JavaScript"},
                          {name: "m_gut", desc: "reverse engineering mobile version of github frontend", language: "JavaScript"},
                          {name: "avato", desc: "Avito with React.js", language: "JavaScript"},
                          {name: "m_avato", desc: "Frontend of mobile avito with React.js", language: "JavaScript"},
                          {name: "yalp", desc: "Yelp frontend with React.js", language: "JavaScript"},
                          {name: "m_yalp", desc: "Frontend of mobile yelp with React.js", language: "JavaScript"},
                        ].map(({name, desc, language}, index) =>
                        <li key={index} className="border border-gray-dark mb-3 p-3 pinned-repo-item public reorderable rounded-1 sortable-button-item source">
                          <div className="pinned-repo-item-content">
                            <span className="d-block position-relative">
                              <span className="float-left pinned-repository-handle pr-2">
                                <svg className="octicon octicon-grabber" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true">
                                  <path fillRule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path>
                                </svg>
                              </span>
                              <a className="text-bold">
                                <span className="repo">{name}</span>
                              </a>
                            </span>
                            <p className="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">{desc}</p>
                            <p className="mb-0 f6 text-gray">
                              <span
                                className="repo-language-color pinned-repo-meta"
                                style={{backgroundColor: "#f1e05a"}}
                              ></span>
                              {language}
                            </p>
                          </div>
                        </li>
                        )}
                      </ol>
                    </form>
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
                    <span className="contributions-setting dropdown float-right">
                      <button className="btn-link contributions-setting-link muted-link select-menu-button text-normal">
                        Jump to
                      </button>
                    </span>
                  </h2>

                  <div
                    className="activity-listing contribution-activity"
                    style={{minHeight: 210}}
                  >
                    <div className="col-10 contribution-activity-listing float-left">
                      <div className="profile-timeline discussion-timeline width-full pb-4">
                        <h3 className="profile-timeline-month-heading bg-white d-inline-block h6 pr-2 py-1">
                          May <span className="text-gray"> 2018</span>
                        </h3>
                      </div>
                    </div>
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
