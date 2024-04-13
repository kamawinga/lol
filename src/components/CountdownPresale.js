import { useState, useEffect } from 'react';

const CountdownPresale = () => {
  const [presaleCountdown, setPresaleCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const presaleCountdownDate = new Date('April 20, 2024 23:59:59 UTC').getTime();

    const countdownPresale = setInterval(() => {
      const now = new Date().getTime();
      const presaleDistance = presaleCountdownDate - now;

      const presaleDays = Math.floor(presaleDistance / (1000 * 60 * 60 * 24));
      const presaleHours = Math.floor((presaleDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const presaleMinutes = Math.floor((presaleDistance % (1000 * 60 * 60)) / (1000 * 60));
      const presaleSeconds = Math.floor((presaleDistance % (1000 * 60)) / 1000);

      setPresaleCountdown({ days: presaleDays, hours: presaleHours, minutes: presaleMinutes, seconds: presaleSeconds });

      if (presaleDistance < 0) {
        clearInterval(countdownPresale);
        setPresaleCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(countdownPresale);
    };
  }, []);

  return (
    <div className="flip-card">
      <div className="flip-card-inner transition-transform duration-600 transform-style-preserve-3d">
        <div className="flip-card-front bg-gray-200 text-black">
          <div>Presale Ends In</div>
          {`${presaleCountdown.days}d ${presaleCountdown.hours}h ${presaleCountdown.minutes}m ${presaleCountdown.seconds}s`}
        </div>
      </div>
    </div>
  );
};

export default CountdownPresale;