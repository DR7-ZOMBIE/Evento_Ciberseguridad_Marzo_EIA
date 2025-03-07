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
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro al Evento</h2>
      {success && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4 text-center">
          ¡Registro exitoso!
        </div>
      )}
      {error && (
        <div className="bg-red-100 text-red-800 p-2 rounded mb-4 text-center">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Registro'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
