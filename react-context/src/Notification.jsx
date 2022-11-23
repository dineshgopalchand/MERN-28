import React from "react";
import { NotificationContext } from "./App";
import NotificationList from "./NotificationList";

const Notification = () => {
  return (
    <NotificationContext.Consumer>
      {(notificationCtx) => {
        const addNewNotification = notificationCtx.addNewNotification;
        return (
          <div className="bordered">
            Notification
            <button
              onClick={() => {
                addNewNotification("Notification");
              }}
            >
              Add
            </button>
            <NotificationList />
          </div>
        );
      }}
    </NotificationContext.Consumer>
  );
};

export default Notification;
