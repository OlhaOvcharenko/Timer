import React, { useState, useEffect } from 'react';
import TimeDisplay from "./components/TimeDisplay/TimeDisplay";
import Button from './components/Buttons/Button';

const App = () => {

  const [currentTime, setCurrentTime] = useState(0); // Initialize with 0 milliseconds
  const [ timer, setTimer] = useState(false);

  useEffect(() => {
    if (timer) {
      const intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 100);
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timer]);

  const handleStartClick = () => {
    setTimer(true);
  };

  const handleStopClick = () => {
    setTimer(false);
  };

  const handleResetClick = () => {
    setTimer(false);
    setCurrentTime(0);
  };

  return (
    <div>
      <TimeDisplay time={currentTime}/>
      <Button onClick={handleStartClick}>Start</Button>
      <Button onClick={handleStopClick}>Stop</Button>
      <Button onClick={handleResetClick}>Reset</Button>
    </div>
  );
}

export default App;

