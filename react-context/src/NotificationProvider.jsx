import React, { useReducer } from "react";
const NotificationContext = React.createContext([]);
const Notification_ACTION = {
  add: "add-notification",
  update: "update-notification",
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case Notification_ACTION.add:
      return [...state, action.payload];

    case Notification_ACTION.update:
      const updatedNotification = { ...action.payload, seen: true };
      const getNotificationIndex = state.findIndex(
        (item) => item.id === updatedNotification.id
      );
      const list = [...state];
      list.splice(getNotificationIndex, 1, updatedNotification);
      return list;

    default:
      return state;
  }
};
const NotificationProvider = (props) => {
  const [notificationList, notificationDispatch] = useReducer(
    notificationReducer,
    []
  );
  return (
    <NotificationContext.Provider
      value={{
        list: notificationList,
        notificationDispatch,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
export { NotificationContext, Notification_ACTION };
