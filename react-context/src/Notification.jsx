import React, { useContext, useState } from "react";
import AddNotification from "./AddNotification";
import DialogBox from "./dialogBox/DialogBox";

import NotificationList from "./NotificationList";
import {
  NotificationContext,
  Notification_ACTION,
} from "./NotificationProvider";

const Notification = () => {
  const [show, setShow] = useState(false);
  const { notificationDispatch } = useContext(NotificationContext);
  const addNotification = () => {
    setShow(true);
  };
  const getNotification = (newNotification) => {
    notificationDispatch({
      type: Notification_ACTION.add,
      payload: {
        id: Date.now(),
        title: newNotification,
        seen: false,
      },
    });
    setShow(false);
  };
  return (
    <div className="bordered" style={{ position: "relative" }}>
      Notification
      <button onClick={addNotification}>Add</button>
      <NotificationList />
      <DialogBox show={show} closeDialog={() => setShow(false)}>
        <AddNotification addNotification={getNotification} />
      </DialogBox>
    </div>
  );
};

export default Notification;
