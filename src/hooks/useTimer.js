import { useState, useEffect, useRef } from 'react';
import { playAlarm } from '../utils/alarmUtils';

export const useTimer = (targetHours, targetMinutes, alarmEnabled, selectedSubject) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          
          const targetTotalSeconds = targetHours * 3600 + targetMinutes * 60;
          if (newTime === targetTotalSeconds && alarmEnabled && selectedSubject) {
            playAlarm(selectedSubject);
          }
          
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, targetHours, targetMinutes, alarmEnabled, selectedSubject]);

  const startTimer = () => {
    if (selectedSubject) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return {
    time,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    setTime
  };
};