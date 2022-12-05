import React from 'react';
import { useState } from 'react';
import './App.css';
import DialogBox from './dialogBox/DialogBox';
import Header from './Header';
import MainContainer from './MainContainer';
import NotificationProvider from './NotificationProvider';

function App() {
  const [show, setShow] = useState(true);
  return (
    <NotificationProvider>
      <div className="App bordered">
        App component
        <Header />
        <MainContainer />
      </div>
      <DialogBox show={show} closeDialog={()=>setShow(false)}>
        <h2>Some title</h2>
        <p>some details</p>
      </DialogBox>
    </NotificationProvider>

  );
}

export default App;

