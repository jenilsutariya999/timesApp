import React, { useState, useEffect } from "react";

const ForthWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeFormat = (data) => {
    let options = {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };

    let formatter = new Intl.DateTimeFormat([], options);
    return formatter.format(data);
  };

  return (
    <div
      style={{
        fontSize: "2em",
        fontFamily: "monospace",
        textAlign: "center",
        margin: "20px",
      }}
    >
      <h3>TOKYO</h3>
      {timeFormat(time)}
    </div>
  );
};

export default ForthWatch;
