import React, { Component } from 'react';
import './PinnedRepos.css';

import Sortable from './Sortable';

class PinnedRepos extends Component {
  componentDidMount() {
    /* trick: environment */
    if (process.env.NODE_ENV !== "test") {
      const list = document.getElementById("list");
      Sortable.create(list, {
        handle: ".pinned-repository-handle",
        chosenClass: "is-dragging",
        animation: 150
      });
    }
  }

  render() {
    return (
      <form>
        <ol id="list" className="mb-4 pinned-repos-list">
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
                &nbsp;
                {language}
              </p>
            </div>
          </li>
          )}
        </ol>
      </form>
    );
  }
}

export default PinnedRepos;


// trick: javascript watch style change
// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutationRecord) {
//     console.log($el.attributes.style);
//   });
// });
// observer.observe($0, { attributes : true, attributeFilter : ['style'] });

// skey: drag, sortable.js, https://github.com/RubaXa/Sortable/blob/master/Sortable.js
