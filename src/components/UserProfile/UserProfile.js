import React, { Component } from 'react';
import './UserProfile.css';

import avatar1 from '../../assets/images/avatar1.jpg';
import avatar3 from '../../assets/images/avatar3.jpg';

import Location from '../../assets/icons/Location';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editBio: false,
      stickyAvatar: false
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
    const {editBio, stickyAvatar} = this.state;

    return (
      <div className="h-card col-3 float-left pr-3">

        <div className={`user-profile-sticky-bar ${stickyAvatar ? "is-stuck" : ""}`}>
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
            <span className="d-table-cell v-align-middle lh-condensed ">
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
    );
  }
}

export default UserProfile;
