import React from "react";
import classes from "./DialogBox.module.css";

const DialogBox = ({ children, show,closeDialog }) => {
  function closeDialogBox() {
    console.log("close clickeed");
    closeDialog();
  }

  return (
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
    </>
  );
};

export default DialogBox;
