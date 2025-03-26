import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo que redirige al home */}
        <div className="text-white font-bold text-xl">
          <Link to="/" className="hover:text-gray-300">
            Evento Ciberseguridad
          </Link>
        </div>
        {/* Enlaces para pantallas medianas y superiores */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Inicio</Link>
          <Link to="/bootcamp" className="text-gray-300 hover:text-white">Bootcamp</Link>
          <Link to="/charlas" className="text-gray-300 hover:text-white">Charlas</Link>
          <Link to="/monologo" className="text-gray-300 hover:text-white">Monólogo</Link>
          <Link to="/registro" className="text-gray-300 hover:text-white">Registro</Link>
          <Link to="/mrrobot" className="text-gray-300 hover:text-white">Mr Robot</Link>
        </div>
        {/* Botón hamburguesa para mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            {isOpen ? (
              // Icono X (cerrar)
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Menú desplegable para mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-300 hover:text-white">Inicio</Link>
            <Link to="/bootcamp" className="block text-gray-300 hover:text-white">Bootcamp</Link>
            <Link to="/charlas" className="block text-gray-300 hover:text-white">Charlas</Link>
            <Link to="/monologo" className="block text-gray-300 hover:text-white">Monólogo</Link>
            <Link to="/registro" className="block text-gray-300 hover:text-white">Registro</Link>
            <Link to="/mrrobot" className="block text-gray-300 hover:text-white">Mr Robot</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
