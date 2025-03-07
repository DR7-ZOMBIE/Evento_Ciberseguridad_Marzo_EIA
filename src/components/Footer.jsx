// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2025 Evento de Ciberseguridad. Todos los derechos reservados.</p>
        <p>
          Desarrollado con <span className="text-blue-400">React</span> y <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
