// src/components/FsocietyAscii.jsx
import React from 'react';
import asciiText from '../assets/fsociety.ascii-CzCFeTNn.txt?raw';

const FsocietyAscii = () => {
  return (
    <div className="max-w-xl mx-auto my-8 p-4 bg-black rounded-lg shadow-lg overflow-x-auto border border-gray-700">
      <pre className="text-green-500 font-mono text-xs whitespace-pre-wrap">
        {asciiText}
      </pre>
      {/* Mini CTF: al pasar el cursor se muestra un mensaje */}
      <div className="mt-4 text-center">
        <div className="relative inline-block group">
          <span className="cursor-pointer text-gray-400 font-mono">[?]</span>
          <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
            sigue buscando...
          </div>
          {/* La flag está oculta en el DOM */}
          <div className="hidden" data-flag="CTF{paramoCTFcolombiaestamuycercanotelopierdas!!!}"></div>
        </div>
      </div>
    </div>
  );
};

export default FsocietyAscii;
