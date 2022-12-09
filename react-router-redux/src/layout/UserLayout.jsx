import React from 'react'
import { Outlet } from 'react-router-dom';
import classes from './UserLayout.module.css'; 

const UserLayout = () => {
  return (
   <div className={classes.userBoard}>
    <div className={classes.sidebar}>Sidebar</div>
    <div className={classes.mainContent}>
        <Outlet/>
    </div>
   </div>
  )
}

export default UserLayout