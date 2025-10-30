import React, { useState, useEffect } from "react";

interface LaunchCountdownProps {
  launchDate: Date;
}

const LaunchCountdown: React.FC<LaunchCountdownProps> = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = launchDate.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown(); // run immediately
    const interval = setInterval(updateCountdown, 1000); // update every second

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div
      className="inline-flex items-center gap-2 px-6 py-2 text-[#082159]"
      style={{
        background:
          "linear-gradient(205.82deg, #FBFBFE 16.3%, #F1F0FB 86.48%)",
        border: "0.5px solid #F1F2F9",
        boxShadow:
          "inset 0px -1px 2.5px rgba(190, 186, 233, 0.25), inset 0px 2px 2px rgba(255, 255, 255, 0.77)",
        borderRadius: "200px",
      }}
    >
      <span className="font-semibold text-sm">Launching in</span>
      <span className="text-gray-700 text-sm font-medium">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </span>
    </div>
  );
};

export default LaunchCountdown;
