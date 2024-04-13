import { useState, useEffect } from 'react';

const CountdownTimer = ({countdownDate}) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {

    const timeCountdown = setInterval(() => {
      const now = new Date().getTime();
      const Distance = countdownDate - now;

      const Days = Math.floor(Distance / (1000 * 60 * 60 * 24));
      const Hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const Minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((Distance % (1000 * 60)) / 1000);

      setCountdown({ days: Days, hours: Hours, minutes: Minutes, seconds: Seconds });

      if (Distance < 0) {
        clearInterval(timeCountdown);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(timeCountdown);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 items-center justify-center bg-primary dark:bg-primaryDark p-4 rounded-2xl">
      <div className="rounded text-center bg-primaryDark dark:bg-primary w-20">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-primaryDark' >
          {countdown.days}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-primaryDark' >
          Days
        </div>
      </div>

      <div className="rounded text-center bg-primaryDark dark:bg-primary">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-primaryDark' >
          {countdown.hours}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-primaryDark' >
          Hours
        </div>
      </div>

      <div className="rounded text-center bg-primaryDark dark:bg-primary">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-primaryDark' >
          {countdown.minutes}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-primaryDark' >
          Minutes
        </div>
      </div>

      <div className="rounded text-center bg-primaryDark dark:bg-primary">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-primaryDark' >
          {countdown.seconds}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-primaryDark' >
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;