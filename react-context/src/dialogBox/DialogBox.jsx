import React from "react";
import ReactDOM from "react-dom";
import classes from "./DialogBox.module.css";


const DialogBox = ({ children, show,closeDialog }) => {
  function closeDialogBox() {
    console.log("close clickeed");
    closeDialog();
  }

  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          className={classes.overlayBackground}
          onClick={() => closeDialogBox()}
        >
          <div
            className={classes.DialogBoxContainer}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={classes.mainContainer}>
              <span className={classes.close} onClick={() => closeDialogBox()}>
                X
              </span>
              {children}
            </div>
          </div>
        </div>
      )}
    </>,document.getElementById('dialogroot')
  );
};

export default DialogBox;
