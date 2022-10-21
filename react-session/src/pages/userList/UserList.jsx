import React from "react";
import Profile from "../profile/Profile";

const UserList = () => {
    const userDetailList=[
        {
            "login": "brahmareddy123",
            "avatar_url": "https://avatars.githubusercontent.com/u/33050494?v=4"
        },
        {
            "login": "KirtiBihari",
            "avatar_url": "https://avatars.githubusercontent.com/u/39719334?v=4"
        },
        {
            "login": "rohithcvijayan",
            "avatar_url": "https://avatars.githubusercontent.com/u/49511065?v=4"
        }
    ];
  return (
    <div>
      <Profile user={userDetailList[0]}/>
      <Profile user={userDetailList[1]}/>
      <Profile user={userDetailList[2]}/>
    </div>
  );
};

export default UserList;
