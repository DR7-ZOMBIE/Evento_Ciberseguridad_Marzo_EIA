import React from 'react';

const videos = [
  {
    id: 1,
    title: 'Introducción a ataques modernos: phishing, ransomware, APTs.',
    file: 'https://drive.google.com/file/d/1iSUmsvCCb_NGBgKvWHLsAJcyEJv4MD9G/preview',
    description: 'Una charla introductoria sobre ciberseguridad.'
  },
  {
    id: 2,
    title: 'Prueba Table Top de ciberseguridad enfocada a Ransomware',
    file: 'https://drive.google.com/file/d/14ePNDtweLta8aPzxKYo4gKXaLpE_w-mx/preview',
    description: 'Entendiendo la importancia de las pruebas de ciberseguridad y resolución de reto (CTF).'
  },
  {
    id: 3,
    title: 'Explotación Web bajo el marco OWASP Top 10 & Forense digital',
    file: 'https://drive.google.com/file/d/1cBfVeJkDb0RRxB1e0zFhhH6xEUb5wm-J/preview',
    description: 'Charla sobre las vulnerabilidades más comunes en aplicaciones web y resuelve retos.'
  },
  {
    id: 4,
    title: 'Panorama de ciberseguridad en latinoamérica',
    file: 'https://drive.google.com/file/d/1T75wSVbnpSThDp-yU2gt6ODWhrcdmsPV/preview',
    description: 'Comprende los comportamientos y tendencias de ciberseguridad en latinoamérica.'
  },
  {
    id: 5,
    title: 'Ingeniería social y phishing avanzado',
    file: 'https://drive.google.com/file/d/1M8LBpUQbVnn6ar_BRJDEivjBVqcT97gg/preview',
    description: 'Entiende cómo los atacantes utilizan la ingeniería social para engañar a las personas.'
  },
  {
    id: 6,
    title: 'Simulación de un ataque y contramedidas (Mitre Att&ck & NIST)',
    file: 'https://drive.google.com/file/d/1GU9M_bv1hjK6fFXtZhutKNZOes8FmjiL/preview',
    description: 'Simulación de un ataque y contramedidas utilizando el marco Mitre Att&ck y NIST.'
  },
  {
    id: 7,
    title: 'CTF relámpago de ciberseguridad',
    file: 'https://drive.google.com/file/d/1rdyzaVGoY2QzQ3K6G7c7CnlSpdnFxxph/preview',
    description: 'CTF relámpago de ciberseguridad y aprende a resolver retos.'
  }
];

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Contenedor principal */}
      <div className="flex-grow container mx-auto py-12 px-4 text-black">
        <h1 className="text-5xl font-bold text-center mb-12 drop-shadow-sm">
          Charlas de ciberseguridad
        </h1>
        
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white border border-gray-200 rounded-xl shadow-md transform hover:scale-105 transition duration-300 overflow-hidden"
            >
              {/* Contenedor del iframe */}
              <div className="relative">
                <iframe
                  title={video.title}
                  src={video.file}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
  
              {/* Información del video */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center mb-2">
                  {video.title}
                </h2>
                <p className="text-gray-600 text-center">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
