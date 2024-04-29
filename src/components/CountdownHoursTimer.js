import { useState, useEffect } from 'react';

const CountdownHoursTimer = ({countdownDate, countdownTitle}) => {
  const [countdown, setCountdown] = useState({
    // days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timeCountdown = setInterval(() => {
      const now = new Date().getTime();
      const Distance = countdownDate - now;

      const Days = Math.floor(Distance / (1000 * 60 * 60 * 24));
      const Hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        + (Days *24)
      );
      const Minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((Distance % (1000 * 60)) / 1000);

      setCountdown({
        // days: Days,
        hours: Hours,
        minutes: Minutes, 
        seconds: Seconds
      });

      if (Distance < 0) {
        clearInterval(timeCountdown);
        setCountdown({
          // days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => {
      clearInterval(timeCountdown);
    };
  }, []);

  return (
    <div className='items-center justify-center bg-radialMoonDark dark:bg-radialMoonLight p-4 rounded-2xl border border-solid border-2 border-primaryDark dark:border-primaryDark' >
      <div className='flex pb-2 items-center justify-center font-bold text-3xl text-primary dark:text-dark'>
        {countdownTitle} Closes In...
      </div>
      <div className="grid grid-cols-3 gap-4 items-center justify-center bg-primary dark:bg-primaryDark p-4 rounded-2xl border border-solid border-2 border-primaryDark dark:border-primaryDark">
        {/*         
        <div className="rounded text-center bg-radialSunDark dark:bg-radialMoonLight w-20">
          <div className='items-center justify-center font-bold text-3xl text-primary dark:text-dark' >
            {countdown.days}
          </div>
          <div className='items-center justify-center font-bold text-base text-primary dark:text-dark' >
            Days
          </div>
        </div>
        */}

        <div className="rounded text-center bg-radialSunDark dark:bg-radialMoonLight">
          <div className='items-center justify-center font-bold text-3xl text-primary dark:text-dark' >
            {countdown.hours}
          </div>
          <div className='items-center justify-center font-bold text-base text-primary dark:text-dark' >
            Hours
          </div>
        </div>

        <div className="rounded text-center bg-radialSunDark dark:bg-radialMoonLight">
          <div className='items-center justify-center font-bold text-3xl text-primary dark:text-dark' >
            {countdown.minutes}
          </div>
          <div className='items-center justify-center font-bold text-base text-primary dark:text-dark' >
            Minutes
          </div>
        </div>

        <div className="rounded text-center bg-radialSunDark dark:bg-radialMoonLight">
          <div className='items-center justify-center font-bold text-3xl text-primary dark:text-dark' >
            {countdown.seconds}
          </div>
          <div className='items-center justify-center font-bold text-base text-primary dark:text-dark' >
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownHoursTimer;