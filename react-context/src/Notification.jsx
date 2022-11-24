import React, { useContext } from "react";
import { NotificationContext, Notification_ACTION } from "./App";
import NotificationList from "./NotificationList";

const Notification = () => {
  // const notificationCtx = useContext(NotificationContext);
  // const notificationDispatch = notificationCtx.notificationDispatch;
  const { notificationDispatch } = useContext(NotificationContext);
  const addNotification = () => {
    notificationDispatch({
      type: Notification_ACTION.add,
      payload: {
        id: Date.now(),
        title: "notication" + Math.round(Math.random() * 10),
        seen: false,
      },
    });
  };
  return (
    <div className="bordered">
      Notification
      <button onClick={addNotification}>Add</button>
      <NotificationList />
    </div>
  );
};

export default Notification;
