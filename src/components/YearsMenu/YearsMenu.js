import React, { Component } from 'react';
import './YearsMenu.css';

class YearsMenu extends Component {
  render() {
    return (
      <div className="col-2 float-right pl-5">
        <ul className="filter-list small">
          {[8, 7, 6, 5, 4].map(i =>
            <li key={i} >
              <a className={`filter-item mb-2 px-3 py-2 ${i===8 ? "selected" : ""}`}>201{i}</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default YearsMenu;
