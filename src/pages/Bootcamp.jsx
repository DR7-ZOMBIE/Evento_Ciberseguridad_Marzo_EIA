// src/pages/Bootcamp.jsx
import React from 'react';

const Bootcamp = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-slate-800 text-center">
        Bootcamp [Ciberseguridad] - 2025/03/25
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
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                8:00 AM - 8:30 AM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Registro y bienvenida
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Introducción al bootcamp.<br />
                Presentación de los temas y metodología.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Dennis Juilland
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                8:30 AM - 10:30 AM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Fundamentos de ciberseguridad y amenazas modernas
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Modelos de seguridad y principios básicos.<br />
                Introducción a ataques modernos: phishing, ransomware, APTs.<br />
                Análisis de casos reales.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Juan Sierra
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                10:30 AM - 10:45 AM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Coffee Break
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Descanso
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                10:45 AM - 12:30 PM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Seguridad en redes y pentesting básico
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Arquitectura de redes seguras.<br />
                Firewall y filtrado de paquetes (configuración básica de pfSense).<br />
                Escaneo de puertos y análisis con Nmap.<br />
                Laboratorio: Identificación de vulnerabilidades en una red simulada.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Dennis Juilland
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                12:30 PM - 2:00 PM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Almuerzo
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Descanso
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                2:00 PM - 3:30 PM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Seguridad en aplicaciones web
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                OWASP Top 10 y explotación de vulnerabilidades.<br />
                Introducción a SQL Injection y XSS.<br />
                Laboratorio práctico: explotación de una aplicación vulnerable.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Juan Sierra
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                3:30 PM - 3:45 PM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Coffee Break
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Descanso
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800"></td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                3:45 PM - 5:30 PM
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Análisis Forense digital y cierre del día 1
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Métodos de análisis de incidentes.<br />
                Uso de herramientas forenses (Autopsy, Volatility).<br />
                Laboratorio: Extracción y análisis de evidencias de un ataque.<br />
                Conclusiones y preguntas.
              </td>
              <td className="px-6 py-4 text-center text-sm text-gray-800">
                Angel Alamillo
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bootcamp;
