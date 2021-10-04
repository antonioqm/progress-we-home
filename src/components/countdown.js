import React, { useState, useEffect } from 'react';



function Countdown() {
  const [currentDate, setCurrentDate] = useState( new Date());
  const [hours, setHours] = useState( 0);
  const [days, setDays] = useState( 0);
  const [minutes, setMinutes] = useState( 0);
  const [seconds, setSeconds] = useState( 0);
  
  
  useEffect(() => {

    // const initialDate =  new Date(`May 19 2021 18:00:00`)
    const endDate =  new Date(`October 31 2021 18:00:00`)
    const diference = endDate - currentDate

    setDays(Math.floor(diference / 1000 / 60 / 60 / 24))
    setHours(Math.floor(diference / 1000 / 60 / 60) % 24)
    setMinutes(Math.floor(diference / 1000 / 60) % 60)
  
    setSeconds(Math.floor(diference / 1000 ) % 60)
    
    const id = setInterval(() => {
      return setCurrentDate(new Date(), 1000)
    
    });

    
         
    return () => {
      clearInterval(id);
        }
  }, [currentDate, hours, days, seconds]);
  
  return (
      
    <div id="countdown" className="countdown">
          <div className="time">
            <h2 id="days">{days}</h2>
            <small>dias</small>
          </div>
          <div className="time">
            <h2 id="hours">{hours}</h2>
            <small>horas</small>
          </div>
          <div className="time">
            <h2 id="minutes">{minutes}</h2>
            <small>minutos</small>
          </div>
          <div className="time">
            <h2 id="seconds">{seconds}</h2>
            <small>segundos</small>
          </div>
        </div>

  );
}

export default Countdown