// src/pages/Charlas.jsx
import React from 'react';

const Charlas = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-slate-800 text-center">
        Charlas del evento [Ciberseguridad] - 2025/03/26
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wide">
                Hora
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wide">
                Evento
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wide">
                Detalles
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wide">
                Responsable
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">8:00 AM - 8:30 AM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Registro y apertura del evento</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Dirigido a toda la universidad</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Dennis Juilland</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">8:30 AM - 9:30 AM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Conferencia 1: Panorama de la ciberseguridad en Latinoamérica
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Situación actual en Colombia.<br /> Tendencias de ataques y regulaciones.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Dennis Juilland</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">9:30 AM - 10:30 AM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Conferencia 2: Ingeniería social y phishing avanzado
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Métodos modernos de engaño.<br /> Análisis de ataques recientes.<br /> Herramientas OSINT y su uso en campañas de phishing.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Oscar Uribe</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">10:30 AM - 10:45 AM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Coffee Break</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Descanso</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">10:45 AM - 11:45 AM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Conferencia 3: Red Team vs. Blue Team – Estrategias de defensa y ataque
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Simulación de un ataque y contramedidas.<br /> Frameworks de defensa (MITRE ATT&CK, NIST).
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Juan Velasquez</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">11:45 AM - 12:45 PM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Conferencia 4: Seguridad en la nube y DevSecOps
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Buenas prácticas en entornos AWS, Azure y GCP.<br /> Implementación de pipelines seguros.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Pablo Peréz</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">12:45 PM - 2:00 PM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Almuerzo</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Descanso</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">2:00 PM - 3:00 PM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Panel de Expertos: Ciberseguridad en la industria y carreras profesionales
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Discusión con profesionales del sector.<br /> Preguntas del público.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Todos</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">3:00 PM - 4:00 PM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Cierre y Reto relámpago de CTF</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Desafío técnico rápido para los participantes.<br /> Premiación y entrega de certificados.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Angel Alamillo</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">4:00 PM - 4:30 PM</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Despedida y networking</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">Fin</td>
              <td className="px-6 py-4 text-center text-sm text-gray-800"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charlas;
