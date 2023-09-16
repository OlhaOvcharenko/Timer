import React, { useState, useEffect } from 'react';
import TimeDisplay from './Components/TimeDisplay/TimeDisplay';
import Button from './Components/Buttons/Button';
import Container from './Components/Container/Container';

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
    <Container>
      <TimeDisplay time={currentTime}/>
      <Button onClick={handleStartClick}>Start</Button>
      <Button onClick={handleStopClick}>Stop</Button>
      <Button onClick={handleResetClick}>Reset</Button>
    </Container>
  );
}

export default App;

