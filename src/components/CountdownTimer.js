import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [presaleCountdown, setPresaleCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [airdropCountdown, setAirdropCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const presaleCountdownDate = new Date('April 19, 2024 23:59:59').getTime();
    const airdropCountdownDate = new Date('April 24, 2024 23:59:59').getTime();

    const presaleCountdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const presaleDistance = presaleCountdownDate - now;

      const presaleDays = Math.floor(presaleDistance / (1000 * 60 * 60 * 24));
      const presaleHours = Math.floor((presaleDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const presaleMinutes = Math.floor((presaleDistance % (1000 * 60 * 60)) / (1000 * 60));
      const presaleSeconds = Math.floor((presaleDistance % (1000 * 60)) / 1000);

      setPresaleCountdown({ days: presaleDays, hours: presaleHours, minutes: presaleMinutes, seconds: presaleSeconds });

      if (presaleDistance < 0) {
        clearInterval(presaleCountdownTimer);
        setPresaleCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    const airdropCountdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const airdropDistance = airdropCountdownDate - now;

      const airdropDays = Math.floor(airdropDistance / (1000 * 60 * 60 * 24));
      const airdropHours = Math.floor((airdropDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const airdropMinutes = Math.floor((airdropDistance % (1000 * 60 * 60)) / (1000 * 60));
      const airdropSeconds = Math.floor((airdropDistance % (1000 * 60)) / 1000);

      setAirdropCountdown({ days: airdropDays, hours: airdropHours, minutes: airdropMinutes, seconds: airdropSeconds });

      if (airdropDistance < 0) {
        clearInterval(airdropCountdownTimer);
        setAirdropCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(presaleCountdownTimer);
      clearInterval(airdropCountdownTimer);
    };
  }, []);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-gray-200 text-black">
          <div>Presale Ending in</div>
          {`${presaleCountdown.days}d ${presaleCountdown.hours}h ${presaleCountdown.minutes}m ${presaleCountdown.seconds}s`}
        </div>
        <div className="flip-card-back bg-blue-500 text-white">
          <div>Airdrop Ending in</div>
          {`${airdropCountdown.days - 1}d ${airdropCountdown.hours - 1}h ${airdropCountdown.minutes - 1}m ${airdropCountdown.seconds - 1}s`}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;