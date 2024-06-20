import React, { useState, useEffect } from 'react';


const Timer = () => {
 const [seconds, setSeconds] = useState(0);


 useEffect(() => {
 // Code to run when the component mounts
 const interval = setInterval(() => {
 setSeconds(prevSeconds => prevSeconds + 1);
 }, 1000);


 // Cleanup code to run when the component unmounts
 return () => clearInterval(interval);
 }, []); // Empty dependency array ensures this effect runs only once


 return (
 <div>
 <h1>Seconds: {seconds}</h1>
 </div>
 );
};


export default Timer;


