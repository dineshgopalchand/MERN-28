import React, { useContext } from "react";
import { NotificationContext } from "./NotificationProvider";

const Header = () => {
  const nCtx = useContext(NotificationContext);
  return (
    <div className="bordered">
      Header
      <span style={{ color: "red" }}>
        Notification Count : {nCtx.list.length}
      </span>
    </div>
  );
};

export default Header;
