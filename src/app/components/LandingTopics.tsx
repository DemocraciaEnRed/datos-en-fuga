'use client'
import { useState } from "react";

const Card = ({ backgroundColor, title, description, size }: { backgroundColor: string, title: string, description: string, size:string }) => {
  const [showText, setShowText] = useState(true);

  return (
    <div
      className={`h-[260px] w-72 lg:w-[28vw] xl:w-96 flex flex-col justify-center items-center rounded-md relative overflow-hidden`}
      style={{ backgroundColor }}
      onMouseEnter={() => setShowText(false)}
      onMouseLeave={() => setShowText(true)}
    >
      <div className={`text-white text-center transition-all duration-500 ease-in-out transform ${showText ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <p className='uppercase text-2xl xl:text-3xl font-bold'>{title}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-white text-center transition-all duration-500 ease-in-out transform flex items-center flex-col my-8 max-[768px]:my-4">
        <div className={`transition-all duration-500 ease-in-out ${showText ? 'translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
          <p className='uppercase text-2xl xl:text-3xl font-bold'>{title}</p>
        </div>
        <div className={`transition-all duration-500 ease-in-out ${showText ? 'translate-y-[100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
          <p className={`uppercase my-2 mx-2 ${size} `}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const LandingTopics = () => {
  return (
    <div className='bg-white text-black text-center flex flex-col items-center justify-center p-12 w-full border-t-[#CC4356] border-t-4'>
      <h2 className='font-kanit font-bold text-4xl'>¿QUÉ ES #DatosEnFuga?</h2>
      <p className='uppercase'>Cuidar tus datos no solo depende de que tengas una contraseña segura</p>
      <div className='flex flex-col lg:flex-row flex-wrap justify-around gap-4 my-12 text-white'>
          <Card
            backgroundColor="#CC4356"
            title="Ley de datos personales"
            description="La Ley  25.326 establece normas para el tratamiento de información personal, garantizando que los ciudadanos tengan derechos de privacidad y control sobre sus datos personales, tanto en manos del sector público como privado. "
            size="text-sm"
          />
          <Card
            backgroundColor="#008BB4"
            title="Ciberseguridad"
            description="Es el conjunto de medidas y prácticas destinadas a proteger la integridad de la información en entornos digitales. Se busca prevenir y responder a amenazas, garantizando la seguridad de sistemas, redes, datos y la privacidad de los usuarios."
            size="text-sm"
          />
          <Card
            backgroundColor="#00D79E"
            title="Reportes de vulnerabilidades"
            description="Es el acto de informar sobre fallos de seguridad o debilidades en sistemas informáticos, aplicaciones o redes, a las autoridades competentes, empresas u organizaciones responsables, con el objetivo principal de mejorar la ciberseguridad al  al corregir riesgos antes de su explotación."
            size="text-xs"
          />
      </div>
    </div>
  );
};

export default LandingTopics;