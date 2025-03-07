// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { db } from '../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'registrations'), {
                name,
                email,
                message,
                timestamp: new Date()
            });
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setError('Error al enviar el registro.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-extrabold leading-relaxed mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg px-2 py-1">
                Registro al evento
            </h2>
            {success && (
                <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-center font-medium">
                    ¡Registro exitoso!
                </div>
            )}
            {error && (
                <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-center font-medium">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingresa tu nombre"
                        className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Déjanos un mensaje..."
                        rows="3"
                        className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-red-600 shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:via-red-600 hover:to-red-700"
                >
                    {loading ? 'Enviando...' : 'Enviar Registro'}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
