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
  return (
    <NotificationContext.Provider value={{ list: notificationList, addNewNotification: addNotification }}>
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
