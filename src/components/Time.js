import React, { useState, useEffect } from 'react';

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    });

    return () => clearInterval(timer);

  }, []);

  const timeFormat = (data) => {
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let ampm = hours >= 12? 'Pm' : 'Am';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div style={{ fontSize: '2em', fontFamily: 'monospace', textAlign: 'center', margin: '20px' }}>
      <h3>INDIA</h3>
      {timeFormat(time)}
    </div>
  );

};
   

export default DigitalWatch;


