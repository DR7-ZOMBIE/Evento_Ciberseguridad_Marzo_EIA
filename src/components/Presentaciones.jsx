import React from 'react';

const presentaciones = [
  {
    name: "Ingeniería social y phishing avanzado",
    driveId: "1kuRnk-8yIvsIsJEJSwkptdyHw0AOFvDW",
  },
  {
    name: "Tabletop: simulación de ransomware y CTF",
    driveId: "14b2lET1LNVgeg3aPZnFJ4nr-6P0H7_qy",
  },
  {
    name: "Pentesting web",
    driveId: "102mPo10fzi3HL1nUdMuF2l0juFBIGGX_",
  },
  {
    name: "Panorama de ciberseguridad en latinoamérica",
    driveId: "1_1diKPfl41vVPD2S0EjLl8iDuRENmMB1",
  },
  {
    name: "Forense digital",
    driveId: "1QR1KxgEtqEe6EwZv0IqTGDeQ3FBGyktP",
  },
  {
    name: "Evolución del hacking",
    driveId: "1we3sKfNSLQRBCtvY86dbCIlv24Z9SSak",
  },
  {
    name: "CTF relámpago",
    driveId: "1XAAnqWRNe0VlXCp0018wGMYufJxRBXOF",
  },
  {
    name: "Ciberseguridad en la nube",
    driveId: "1mOWq-cmvVic7ce2XS-7gB5hcDozLYtQ5",
  },
];

const Presentaciones = () => {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Presentaciones</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {presentaciones.map((pres, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">{pres.name}</h2>
              <div className="relative pb-[56.25%] overflow-hidden rounded-md">
                <iframe
                  title={pres.name}
                  src={`https://drive.google.com/file/d/${pres.driveId}/preview`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Presentaciones;
