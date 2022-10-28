import React from "react";
import Profile from "../profile/Profile";
import "./UserList.css";

const UserList = () => {
  const userDetailList = [
    {
      login: "brahmareddy123",
      avatar_url: "https://avatars.githubusercontent.com/u/33050494?v=4",
    },
    {
      login: "KirtiBihari",
      avatar_url: "https://avatars.githubusercontent.com/u/39719334?v=4",
    },
    {
      login: "rohithcvijayan",
      avatar_url: "https://avatars.githubusercontent.com/u/49511065?v=4",
    },
    {
      login: "rohithcvijayan1",
      avatar_url: "https://avatars.githubusercontent.com/u/49511065?v=4",
    },
    {
      login: "KirtiBihari1",
      avatar_url: "https://avatars.githubusercontent.com/u/39719334?v=4",
    },
  ];
  return (
    <div className="flex">
      {userDetailList.map((userDetails) => {
        return <Profile user={userDetails} key={userDetails.login} />;
      })}
    </div>
  );
};

export default UserList;
