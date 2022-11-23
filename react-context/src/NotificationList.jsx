import React from "react";
import { NotificationContext } from "./App";

const NotificationList = () => {
  return (
    <NotificationContext.Consumer>
      {(notificationCtx) => {
        // console.log(notificationCtx);
        const notificationList = notificationCtx.list;
        return (
          <div className="bordered">
            {notificationCtx.list.length > 0 ? (
              <ul>
                {notificationList.map((item) => {
                  return <li key={item.id}>{item.title}</li>;
                })}
              </ul>
            ) : (
              <p>No Notification Available</p>
            )}
          </div>
        );
      }}
    </NotificationContext.Consumer>
  );
};

export default NotificationList;
