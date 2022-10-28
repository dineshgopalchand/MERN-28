import React from "react";
import "./Profile.css";

const Profile = (props) => {
  const userDetails = props.user;
  return (
    <div>
      <div className="user-img">
        <img src={ userDetails.avatar_url} alt="user-pic" />
      </div>
      <div className="user-name">
        {userDetails.login}
      </div>
    </div>
  );
};

export default Profile;
