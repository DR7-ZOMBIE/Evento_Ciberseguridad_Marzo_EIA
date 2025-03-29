// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fijo en la parte superior */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      
      {/* Contenido principal centrado y con padding */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* Footer con fondo y padding para mantenerlo dentro del contenedor */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
