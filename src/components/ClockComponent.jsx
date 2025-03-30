import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import moment from 'moment-timezone';

const ClockComponent = () => {
  const now = moment.tz('America/Bogota');
  // Establece el tiempo objetivo (hoy a las 20:00)
  let targetTime = moment.tz('America/Bogota').set({
    hour: 20,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  // Calcula el tiempo restante en segundos.
  const remainingSeconds = targetTime.diff(now, 'seconds');

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg shadow-lg">
      <h2 className="w-full text-center text-3xl font-bold mb-4 text-indigo-900">
        El reto comienza a las 8:00 p.m.
      </h2>
      <CountdownCircleTimer
        isPlaying
        duration={remainingSeconds}
        initialRemainingTime={remainingSeconds}
        colors={[
          ['#ff0000', 0.33],
          ['#ffa500', 0.33],
          ['#008000', 0.33],
        ]}
        size={220}
        strokeWidth={14}
      >
        {({ remainingTime }) => {
          const hours = Math.floor(remainingTime / 3600)
            .toString()
            .padStart(2, '0');
          const minutes = Math.floor((remainingTime % 3600) / 60)
            .toString()
            .padStart(2, '0');
          const seconds = (remainingTime % 60).toString().padStart(2, '0');
          return (
            <div className="flex items-center justify-center w-full h-full">
              <div
                className="text-4xl font-mono font-bold"
                style={{ color: '#333', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {hours}:{minutes}:{seconds}
              </div>
            </div>
          );
        }}
      </CountdownCircleTimer>
      <p className="mt-4 text-xl text-indigo-700 text-center">
        ¡Prepárate para el desafío!
      </p>
    </div>
  );
};

export default ClockComponent;
