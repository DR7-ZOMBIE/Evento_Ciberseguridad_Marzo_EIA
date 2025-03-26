import React from 'react';

const Monologo = () => {
  // Solo necesitamos el arreglo de preguntas
  const questions = [
    { id: 1, question: '¿Cuáles son los mayores desafíos en la ciberseguridad que enfrentan las industrias actualmente?' },
    { id: 2, question: '¿Qué tendencias emergentes en ciberataques observa en la región?' },
    { id: 3, question: '¿Cómo pueden las empresas prepararse mejor ante ataques de phishing?' },
    { id: 4, question: '¿Cuál es el rol de la ingeniería social en los ataques cibernéticos modernos?' },
    { id: 5, question: '¿Cómo se integran las metodologías de Red Team y Blue Team en la estrategia de defensa?' },
    { id: 6, question: '¿Qué frameworks de seguridad considera más efectivos y por qué?' },
    { id: 7, question: '¿Cuáles son las claves para una implementación exitosa de DevSecOps?' },
    { id: 8, question: '¿Qué medidas de seguridad son imprescindibles en entornos de nube?' },
    { id: 9, question: '¿Cómo evalúa el impacto de las regulaciones de ciberseguridad en la industria?' },
    { id: 10, question: '¿Qué importancia tiene la capacitación continua para los profesionales de ciberseguridad?' },
    { id: 11, question: '¿Cómo se pueden anticipar y mitigar vulnerabilidades en sistemas críticos?' },
    { id: 12, question: '¿Cuál es el rol de la automatización y la inteligencia artificial en la detección de amenazas?' },
    { id: 13, question: '¿Qué herramientas OSINT considera fundamentales para la investigación de incidentes?' },
    { id: 14, question: '¿De qué manera la transformación digital afecta la postura de seguridad en las empresas?' },
    { id: 15, question: '¿Cómo se puede mejorar la colaboración entre equipos de seguridad y otras áreas de la empresa?' },
    { id: 16, question: '¿Qué habilidades técnicas y blandas son esenciales para un profesional en ciberseguridad?' },
    { id: 17, question: '¿Cómo se adaptan las estrategias de ciberseguridad a la evolución de las amenazas?' },
    { id: 18, question: '¿Qué impacto tiene el trabajo remoto en la seguridad corporativa?' },
    { id: 19, question: '¿Cómo se debe gestionar un incidente de seguridad en tiempo real?' },
    { id: 20, question: '¿Qué papel juegan las certificaciones en el desarrollo profesional en ciberseguridad?' },
    { id: 21, question: '¿Cómo pueden las empresas fomentar una cultura de seguridad entre sus empleados?' },
    { id: 22, question: '¿Qué lecciones ha aprendido de simulacros de ataques y ejercicios de ciberseguridad?' },
    { id: 23, question: '¿Cómo evaluar el riesgo de un ciberataque en un sector específico?' },
    { id: 24, question: '¿Qué estrategias utiliza para proteger activos críticos en la infraestructura empresarial?' },
    { id: 25, question: '¿Cuál es su perspectiva sobre la integración de soluciones de seguridad en entornos híbridos?' },
    { id: 26, question: '¿Cómo puede la inteligencia de amenazas mejorar la capacidad de respuesta ante incidentes?' },
    { id: 27, question: '¿Qué medidas recomienda para proteger las aplicaciones web contra vulnerabilidades?' },
    { id: 28, question: '¿Cómo evalúa la efectividad de los sistemas de firewall y detección de intrusiones?' },
    { id: 29, question: '¿Qué papel tiene el pentesting en la identificación de fallos de seguridad?' },
    { id: 30, question: '¿Cuáles son los mayores desafíos en la seguridad de las redes empresariales?' },
    { id: 31, question: '¿Qué metodologías utiliza para el análisis forense digital en incidentes cibernéticos?' },
    { id: 32, question: '¿Cómo se puede mejorar la resiliencia de una organización ante ataques cibernéticos?' },
    { id: 33, question: '¿Cuál es la importancia de realizar auditorías de seguridad de manera periódica?' },
    { id: 34, question: '¿Qué estrategias recomienda para prevenir ataques de ransomware?' },
    { id: 35, question: '¿Cómo influye la cultura organizacional en la gestión de la seguridad informática?' },
    { id: 36, question: '¿Qué papel juega la colaboración entre el sector público y privado en la ciberseguridad?' },
    { id: 37, question: '¿Cómo afecta la evolución tecnológica a las estrategias de defensa cibernética?' },
    { id: 38, question: '¿Qué desafíos presenta la seguridad en la era de la Internet de las cosas (IoT)?' },
    { id: 39, question: '¿Cuáles son las mejores prácticas para la protección de datos sensibles en las empresas?' },
    { id: 40, question: '¿Qué recomendaciones daría para implementar un plan de respuesta ante incidentes?' },
    { id: 41, question: '¿Cómo ve el futuro de la ciberseguridad en Latinoamérica?' },
    { id: 42, question: '¿Qué estrategias considera fundamentales para la protección de infraestructuras críticas?' },
    { id: 43, question: '¿Cuál es el impacto de las normativas internacionales en la ciberseguridad corporativa?' },
    { id: 44, question: '¿Qué papel tiene la formación académica en la preparación de nuevos profesionales de ciberseguridad?' },
    { id: 45, question: '¿Cómo puede la industria de ciberseguridad mejorar la retención de talento especializado?' },
    { id: 46, question: '¿Qué herramientas y tecnologías emergentes cree que revolucionarán la ciberseguridad?' },
    { id: 47, question: '¿Cómo se pueden balancear la innovación tecnológica y la seguridad en una empresa?' },
    { id: 48, question: '¿Qué importancia tiene la colaboración y el intercambio de información entre empresas?' },
    { id: 49, question: '¿Cómo abordar la brecha de género en el campo de la ciberseguridad?' },
    { id: 50, question: '¿Qué consejo daría a los estudiantes que desean iniciar una carrera en ciberseguridad?' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Preguntas para el panel de expertos</h1>
      
      {/* Ajusta la grid según tu preferencia de columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <h2 className="font-semibold text-lg mb-2">Pregunta {item.id}</h2>
            <p className="text-gray-700">{item.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monologo;
