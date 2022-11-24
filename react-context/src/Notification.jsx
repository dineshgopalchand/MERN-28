import React from "react";
import { NotificationContext, Notification_ACTION } from "./App";
import NotificationList from "./NotificationList";

const Notification = () => {
  return (
    <NotificationContext.Consumer>
      {(notificationCtx) => {
        const notificationDispatch = notificationCtx.notificationDispatch;
        return (
          <div className="bordered">
            Notification
            <button
              onClick={() => {
                notificationDispatch({
                  type: Notification_ACTION.add,
                  payload: {
                    id: Date.now(),
                    title: "notication" + Math.round(Math.random() * 10),
                    seen: false,
                  },
                });
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
