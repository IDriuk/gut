import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PinnedRepos.css';

import Grabber from '../../assets/icons/Grabber';

import Sortable from '../../libs/Sortable';

class PinnedRepos extends Component {
  componentDidMount() {

    /* trick: environment */
    if (process.env.NODE_ENV !== "test") {
      this.props.fetchPinnedRepos();

      const list = document.getElementById("list");

      Sortable.create(list, {
        handle: ".pinned-repository-handle",
        chosenClass: "is-dragging",
        animation: 150
      });
    }
  }

  render() {
    const { pinnedRepos } = this.props;

    return (
      <div>
        <details className="details-reset">
          <summary className="btn-link muted-link float-right mt-1 pinned-repos-setting-link">Customize your pinned repositories</summary>
        </details>
        <h2 className="f4 mb-2 text-normal">Pinned repositories</h2>
        <form>
          <ol id="list" className="mb-4 pinned-repos-list">
            {pinnedRepos.map(({name, desc, language, langColor}, index) =>
            <li key={index} className="border border-gray-dark mb-3 p-3 pinned-repo-item public reorderable rounded-1 sortable-button-item source">
              <div className="pinned-repo-item-content">
                <span className="d-block position-relative">
                  <span className="float-left pinned-repository-handle pr-2">
                    <Grabber />
                  </span>
                  <a className="text-bold">
                    <span className="repo">{name}</span>
                  </a>
                </span>
                <p className="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">{desc}</p>
                <p className="mb-0 f6 text-gray">
                  <span
                    className="repo-language-color pinned-repo-meta"
                    style={{backgroundColor: langColor}}
                  ></span>
                  &nbsp;
                  {language}
                </p>
              </div>
            </li>
            )}
          </ol>
        </form>
      </div>
    );
  }
}

PinnedRepos.propTypes = {
  pinnedRepos: PropTypes.array.isRequired
};

export default PinnedRepos;


// trick: javascript watch style change
// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutationRecord) {
//     console.log($el.attributes.style);
//   });
// });
// observer.observe($0, { attributes : true, attributeFilter : ['style'] });

// skey: drag, sortable.js, https://github.com/RubaXa/Sortable/blob/master/Sortable.js
