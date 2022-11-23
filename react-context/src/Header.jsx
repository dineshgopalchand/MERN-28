import React from "react";
import { NotificationContext } from "./App";

const Header = () => {
  return (
    <NotificationContext.Consumer>
      {(nCtx) => {
        // console.log(nCtx);
        return (
          <div className="bordered">
            Header
            <span style={{ color: "red" }}>Notification Count : {nCtx.list.length}</span>
          </div>
        );
      }}
    </NotificationContext.Consumer>
  );
};

export default Header;
