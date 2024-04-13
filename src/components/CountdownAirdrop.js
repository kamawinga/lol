import { useState, useEffect } from 'react';

const CountdownAirdrop = () => {
  const [airdropCountdown, setAirdropCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const airdropCountdownDate = new Date('April 24, 2024 23:59:59 UTC').getTime();

    const countdownAirdrop = setInterval(() => {
      const now = new Date().getTime();
      const airdropDistance = airdropCountdownDate - now;

      const airdropDays = Math.floor(airdropDistance / (1000 * 60 * 60 * 24));
      const airdropHours = Math.floor((airdropDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const airdropMinutes = Math.floor((airdropDistance % (1000 * 60 * 60)) / (1000 * 60));
      const airdropSeconds = Math.floor((airdropDistance % (1000 * 60)) / 1000);

      setAirdropCountdown({ days: airdropDays, hours: airdropHours, minutes: airdropMinutes, seconds: airdropSeconds });

      if (airdropDistance < 0) {
        clearInterval(countdownAirdrop);
        setAirdropCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(countdownAirdrop);
    };
  }, []);

  return (
    <div className="flip-card">
      <div className="flip-card-inner transition-transform duration-600 transform-style-preserve-3d">
        <div className="flip-card-front bg-gray-200 text-black">
          <div>Airdrop Ends In</div>
          {`${airdropCountdown.days}d ${airdropCountdown.hours}h ${airdropCountdown.minutes}m ${airdropCountdown.seconds}s`}
        </div>
      </div>
    </div>
  );
};

export default CountdownAirdrop;