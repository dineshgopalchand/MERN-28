import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import MainContainer from './MainContainer';
const NotificationContext = React.createContext([]);


function App() {
  const [notificationList, setNotificationList] = useState([]);
  const addNotification = (newNotification) => {
    const newNotificationObj = {
      id: Date.now(),
      title: newNotification + Math.round(Math.random() * 10),
      seen: false
    }
    setNotificationList(prev => [...prev, newNotificationObj]);
  }
  const updateNotification = (notification) => {
    console.log(notification);
    const updatedNotification = { ...notification, seen: true };
    const getNotificationIndex = notificationList.findIndex(item => item.id === notification.id);
    setNotificationList(prevListState => {
      const list=[...prevListState];
      list.splice(getNotificationIndex, 1, updatedNotification);
      return list;
    })
  }
  return (
    <NotificationContext.Provider value={{ list: notificationList, addNewNotification: addNotification, updateNotification }}>
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
