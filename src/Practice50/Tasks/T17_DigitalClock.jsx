import React, { useEffect, useState } from 'react'

const T17_DigitalClock = () => {
    const [time, setTime] = useState(new Date())
    
     useEffect(() => {
            const timerId = setInterval(() => {
                setTime(new Date());
            }, 1000);

            return () => {
                clearInterval(timerId);
            };
        }, [time]);
   
  return (
    <div>
        <h1>Digital Clock</h1>
        {/* <p>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</p> */}
        <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default T17_DigitalClock