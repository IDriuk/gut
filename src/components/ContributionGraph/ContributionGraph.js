import React, { Component } from 'react';
import './ContributionGraph.css';

import CalendarGraph from '../CalendarGraph/CalendarGraph';

class ContributionGraph extends Component {
  render() {
    return (
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
    );
  }
}

export default ContributionGraph;
