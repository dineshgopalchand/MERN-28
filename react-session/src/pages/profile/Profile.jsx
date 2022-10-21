import React from "react";
import './Profile.css';

const Profile = () => {
  const userDetails = {
    login: "dineshgopalchand",
    avatar_url: "https://avatars.githubusercontent.com/u/8764623?v=4",
    name: "Dinesh Gopal Chand",
    company: "Nilam Software Solution",
    bio: "Working as a web developer and digital Marketing expert.",
  };
  return (
    <div>
      <div className="user-img">
        <img src={userDetails.avatar_url} alt="user-pic" />
      </div>
      <div className="user-name">
        {/* {userDetails.name + " (" + userDetails.login + ")"} */}
        {`${userDetails.name} (${userDetails.login})`}
      </div>
      <div className="user-company-name">{userDetails.company}</div>
      <div className="user-details">{userDetails.bio}</div>
    </div>
  );
};

export default Profile;
