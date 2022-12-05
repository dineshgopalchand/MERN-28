import React from 'react';
import './App.css';
import Header from './Header';
import MainContainer from './MainContainer';
import NotificationProvider from './NotificationProvider';

function App() {

  return (
    <NotificationProvider>
      <div className="App bordered">
        App component
        <Header />
        <MainContainer />
      </div>

    </NotificationProvider>

  );
}

export default App;

