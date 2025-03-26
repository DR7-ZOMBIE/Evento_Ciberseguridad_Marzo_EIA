import React from 'react';

const RegistrationCard = () => {
    return (
        <div className="max-w-md mx-auto mt-12 p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-extrabold leading-relaxed mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg px-2 py-1">
                Registro al evento
            </h2>
            <p className="text-center mb-4">Cupos disponibles: 0</p>
            <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-center font-medium">
                ¡Lo sentimos! Las inscripciones están cerradas. Se ha alcanzado el límite de cupos.
            </div>
        </div>
    );
};

export default RegistrationCard;
