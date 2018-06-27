import React, { Component } from 'react';
import './Main.css';

import UserProfile from '../UserProfile/UserProfile';
import UnderlineNav from '../../containers/UnderlineNavContainer';
import PinnedRepos from '../../containers/PinnedReposContainer';
import ContributionGraph from '../ContributionGraph/ContributionGraph';
import YearsMenu from '../YearsMenu/YearsMenu';
import ContributionActivity from '../ContributionActivity/ContributionActivity';

class Main extends Component {
  render() {
    return (
      <div className="application-main ">
        <div>
          <div className="clearfix container-lg mt-4 px-3">
            <UserProfile />

            <div className="col-9 float-left pl-2">
              <UnderlineNav />

              <div className="position-relative">
                <div className="mt-4">

                  <PinnedRepos />

                  <ContributionGraph />

                  <YearsMenu />

                  <ContributionActivity />

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
