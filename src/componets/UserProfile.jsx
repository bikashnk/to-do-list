import React, { Fragment } from 'react';
import HamburgerIcon from '../common/HamburgerIcon.jsx';
import happyman from '../images/happyman.jpg';

const UserProfile = props => {
  return (
    <Fragment>
      <div className="image-txt-container">
        <img
          className="profile-img"
          src={happyman}
          alt="Avatar"
        />
        <span className='profile-name'> Jacob Hardly </span>
      </div>
      <div className="menu-wrapper">
        <HamburgerIcon />
        <p style={{ paddingTop: '0.9em', marginLeft: '5em' }}>Team To-Do List</p>
      </div>
    </Fragment>
  );
};


export default UserProfile;