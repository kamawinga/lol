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
    <div className="grid grid-cols-4 gap-4 items-center justify-center bg-primary dark:bg-primaryDark p-4 rounded-2xl border border-solid border-2 border-radialSunDark dark:border-primary">
      <div className="rounded text-center bg-radialSunDark dark:bg-primary w-20">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-radialSunDark' >
          {countdown.days}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-radialSunDark' >
          Days
        </div>
      </div>

      <div className="rounded text-center bg-radialSunDark dark:bg-primary">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-radialSunDark' >
          {countdown.hours}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-radialSunDark' >
          Hours
        </div>
      </div>

      <div className="rounded text-center bg-radialSunDark dark:bg-primary">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-radialSunDark' >
          {countdown.minutes}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-radialSunDark' >
          Minutes
        </div>
      </div>

      <div className="rounded text-center bg-radialSunDark dark:bg-primary">
        <div className='items-center justify-center font-bold text-3xl text-primary dark:text-radialSunDark' >
          {countdown.seconds}
        </div>
        <div className='items-center justify-center font-bold text-base text-primary dark:text-radialSunDark' >
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;