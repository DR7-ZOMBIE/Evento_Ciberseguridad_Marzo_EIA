// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Bienvenidos al evento de ciberseguridad
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Descubre, aprende y conecta con los líderes del sector
          </p>
          <a
            href="#evento"
            className="bg-white text-slate-900 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-200 transition duration-300"
          >
            Descubre el Evento
          </a>
        </div>
      </section>

      {/* Sección Acerca de */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://i.pinimg.com/736x/c0/39/4b/c0394b72e5a6bc6ea14c2737b9f91944.jpg"
                alt="Evento de Ciberseguridad"
                className="w-64 md:w-80 rounded-xl shadow-lg border border-gray-300 mx-auto transform transition duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">¿Por qué asistir?</h2>
              <p className="mb-4 text-gray-700">
                Participa en este evento para acceder a conocimientos avanzados, descubrir las últimas tendencias y conectar con expertos en ciberseguridad.
              </p>
              <p className="text-gray-700">
                Aprende desde los fundamentos hasta técnicas avanzadas en un ambiente interactivo y colaborativo. ¡Transforma tu visión sobre la seguridad digital!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Fechas del Evento */}
      <section className="bg-slate-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Fechas del Evento</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">25 de marzo:</span> Bootcamp de Ciberseguridad
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">26 de marzo:</span> Charlas de Ciberseguridad
          </p>
        </div>
      </section>

      {/* Sección Próximo Evento */}
      <section id="evento" className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Próximo evento</h2>
            <p className="mb-6 text-gray-700">
              Conoce más sobre nuestro siguiente evento y prepárate para una experiencia única:
            </p>
            <a
              href="https://paramoctfcolombia.web.app/"
              className="inline-block bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition duration-300"
              target="_blank"
              rel="noreferrer"
            >
              Paramo CTF Colombia
            </a>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Únete a la revolución de la ciberseguridad
          </h2>
          <p className="mb-8 text-gray-700">
            Regístrate y forma parte de una experiencia transformadora en el mundo digital.
          </p>
          <a
            href="/registro"
            className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition duration-300"
          >
            Registrarse Ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
