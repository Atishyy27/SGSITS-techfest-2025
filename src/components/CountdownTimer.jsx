import React from 'react';
import Countdown from 'react-countdown';

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="text-3xl md:text-4xl font-bold text-cyan-400">The Fest is LIVE!</span>;
  } else {
    const timeItems = [
      { label: 'Days', value: days },
      { label: 'Hours', value: hours },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds },
    ];
    return (
      <div className="flex gap-4 md:gap-8 justify-center">
        {timeItems.map(item => (
          <div key={item.label} className="text-center">
            <div className="text-3xl md:text-5xl font-extrabold">{item.value}</div>
            <div className="text-sm uppercase tracking-widest text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default function CountdownTimer() {
  // Expected Date: October 10, 2025
  const festDate = new Date("2025-10-10T09:00:00");

  return <Countdown date={festDate} renderer={CountdownRenderer} />;
}