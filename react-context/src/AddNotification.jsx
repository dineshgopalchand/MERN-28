import React from "react";
import { useState } from "react";

const AddNotification = ({addNotification}) => {
  const [notification, setNotification] = useState("");
  const notificationFormSubmit = (event) => {
    // console.log(notification);
    event.preventDefault();
    addNotification(notification);
    setNotification('');
  };
  return (
    <form onSubmit={notificationFormSubmit}>
      <h3>Add New Notification</h3>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add new notification"
          value={notification}
          onChange={(event) => setNotification(event.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn-primary">Add</button>
      </div>
    </form>
  );
};

export default AddNotification;
