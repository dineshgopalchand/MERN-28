import React, { useContext, useState } from "react";
import DialogBox from "./dialogBox/DialogBox";

import NotificationList from "./NotificationList";
import { NotificationContext, Notification_ACTION } from "./NotificationProvider";

const Notification = () => {
  const [show, setShow] = useState(true);
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
    <div className="bordered" style={{position:'relative'}}>
      Notification
      <button onClick={addNotification}>Add</button>
      <NotificationList />
      <DialogBox show={show} closeDialog={()=>setShow(false)}>
        <h2>Some title</h2>
        <p>some details</p>
      </DialogBox>
    </div>
  );
};

export default Notification;
