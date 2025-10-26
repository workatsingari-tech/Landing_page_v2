import React, { useState, useEffect } from 'react';

interface LaunchCountdownProps {
  launchDate: Date;
}

const LaunchCountdown: React.FC<LaunchCountdownProps> = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const launch = launchDate.getTime();
      const difference = launch - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Call immediately
    calculateTimeLeft();
    
    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div 
      className="inline-flex items-center gap-2 px-6 py-2"
      style={{
        background: 'linear-gradient(205.82deg, #FBFBFE 16.3%, #F1F0FB 86.48%)',
        border: '0.5px solid #F1F2F9',
        boxShadow: 'inset 0px -1px 2.5px rgba(190, 186, 233, 0.25), inset 0px 2px 2px rgba(255, 255, 255, 0.77)',
        borderRadius: '200px'
      }}
    >
      <span className="text-[#082159] font-semibold text-sm">Launching in</span>
      <span className="text-gray-700 text-sm">
        {timeLeft.days}d {timeLeft.hours}hr {timeLeft.minutes}min {timeLeft.seconds}sec
      </span>
    </div>
  );
};

export default LaunchCountdown;

