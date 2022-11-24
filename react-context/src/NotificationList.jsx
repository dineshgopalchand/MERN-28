import React, { useContext } from "react";
import { NotificationContext, Notification_ACTION } from "./App";

const NotificationList = () => {
  const { list: notificationList, notificationDispatch } =
    useContext(NotificationContext);
  return (
    <div className="bordered">
      {notificationList.length > 0 ? (
        <ul>
          {notificationList.map((item) => {
            return (
              <li
                key={item.id}
                className={`notification-list ${!item.seen && "bold"} `}
                onClick={() =>
                  notificationDispatch({
                    type: Notification_ACTION.update,
                    payload: item,
                  })
                }
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Notification Available</p>
      )}
    </div>
  );
};

export default NotificationList;
