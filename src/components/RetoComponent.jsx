import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import ClockComponent from '../components/ClockComponent.jsx';

const RetoComponent = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = moment.tz('America/Bogota');
      const target = moment.tz('America/Bogota').set({
        hour: 20,
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      if (now.isSameOrAfter(target)) {
        setIsActive(true);
      }
    };

    checkTime(); // Verifica inmediatamente al montar
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Bienvenido a descifrando el caos digital
        </h1>
      </div>
      {isActive ? (
        <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full transform transition duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            Reto Activado
          </h2>
          <p className="mb-6 text-lg text-gray-600 text-center">
            Accede al repositorio para descargar el reto:
          </p>
          <div className="flex justify-center">
            <a 
              href="https://github.com/DR7-ZOMBIE/Descifrando_El_Caos_Digital/tree/main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition duration-300"
            >
              Ir al repositorio
            </a>
          </div>
        </div>
      ) : (
        <ClockComponent />
      )}
    </div>
  );
};

export default RetoComponent;
