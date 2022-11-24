import React, { useReducer, useState } from 'react';
import './App.css';
import Header from './Header';
import MainContainer from './MainContainer';
const NotificationContext = React.createContext([]);

export const Notification_ACTION = {
  add: 'add-notification',
  update: 'update-notification'
}
const notificationReducer = (state, action) => {
  switch (action.type) {
    case Notification_ACTION.add:
      return [...state, action.payload];

    case Notification_ACTION.update:
      const updatedNotification = { ...action.payload, seen: true };
      const getNotificationIndex = state.findIndex(item => item.id === updatedNotification.id);
      const list = [...state];
      list.splice(getNotificationIndex, 1, updatedNotification);
      return list;

    default:
      return state;
  }

}

function App() {
  const [notificationList, notificationDispatch] = useReducer(notificationReducer, []);

  return (
    <NotificationContext.Provider value={
      {
        list: notificationList,
        notificationDispatch
      }}>
      <div className="App bordered">
        App component
        <Header />
        <MainContainer />
      </div>
    </NotificationContext.Provider>

  );
}

export default App;
export { NotificationContext };
