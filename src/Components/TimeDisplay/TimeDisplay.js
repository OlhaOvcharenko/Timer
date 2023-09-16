import React from 'react';
import styles from '../TimeDisplay/TimeDisplay.module.scss'

function TimeDisplay({ time }) {// Accept 'time' as a prop

  const formatTime = (totalMilliseconds) => {

    const hours = Math.floor(totalMilliseconds / 3600000)
    .toString()
    .padStart(2, '0');

    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000)
    .toString()
    .padStart(2, '0');

    const seconds = Math.floor((totalMilliseconds % 60000) / 1000)
    .toString()
    .padStart(2, '0');

    const milliseconds = (totalMilliseconds % 1000).toString().padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

    return (
    <div >
      <p className={styles.clock}>{formatTime(time)}</p>
    </div>
    );
}

  
  export default TimeDisplay;
  
  