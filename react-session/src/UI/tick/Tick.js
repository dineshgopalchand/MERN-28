import React, { useState } from "react";

const Tick = () => {
  const [formattedDate, setFormattedDate] = useState("-- --- --,--:--:--");

  setInterval(() => {
    const currentDate = new Date();
    const fDate = currentDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      second: "numeric",
      minute: "numeric",
    });
    setFormattedDate(fDate);
  }, 500);

  return <div>{formattedDate}</div>;
};

export default Tick;
