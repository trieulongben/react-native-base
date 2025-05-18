import {useCallback, useEffect, useState} from 'react';

export const useAppCountdown = ({
  totalSeconds,
  onComplete,
}: {
  totalSeconds: number;
  onComplete?: () => void;
}) => {
  const [seconds, setSeconds] = useState<number>(totalSeconds);

  const reset = useCallback(() => {
    setSeconds(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [seconds]);

  const _onComplete = useCallback(() => {
    if (seconds === 0) {
      onComplete?.();
    }
  }, [onComplete, seconds]);

  useEffect(() => {
    _onComplete();
  }, [seconds, _onComplete]);

  return {seconds, onComplete, reset};
};

export default useAppCountdown;
