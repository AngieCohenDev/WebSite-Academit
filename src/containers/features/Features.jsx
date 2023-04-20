import React from "react";
import Feature from '../../components/feature/Feature';
import "./features.css";

const featuresData = [
  {
    title: "Capacitaciones síncronas y asíncronas en Tecnologías Frontend",
    text: "Se brinda material e instrucciones en las tecnologías más demandadas en la industria en el ámbito de frontend y ui/ux para lograr construir, administrar y gestionar interfaces de usuarios con librerías con React js.",
  },
  {
    title: "Capacitaciones síncronas y asíncronas en Tecnologías Backend.",
    text: "Se brinda material e instrucciones en las tecnologías más demandadas en la industria con respecto a backend de manera tal que se puedan construir, administrar y gestionar Api’s y servidores realizados bajo el entorno de ejecución de JavaScript NodeJs, prácticas de test unitario y prácticas de calidad; construir documentaciones a partir de herramientas especializadas como SwaggerUI.",
  },
  {
    title:
      "Capacitaciones síncronas y asíncronas en Base de Datos no Relacionales.",
    text: "Se brinda material e instrucciones en las tecnologías más demandadas en la industria a nivel de sistemas de gestión de bases de datos basadas en colecciones de objetos y cómo estas brindan una opción más rápida al momento de entregar valor a los proyectos de cualquier tipo, gracias a Mongodb y Firebase tendremos un marco teórico de gran alcance para el personal capacitado.",
  },
  {
    title:
      "Capacitaciones síncronas y asíncronas en Base de Datos Relacionales.",
    text: "Se brinda material e instrucciones en las tecnologías más demandadas en la industria a nivel de sistemas de gestión de bases de datos basadas en el estándar SQL, se podrán realizar consultas avanzadas y eficientes a diferentes tablas y bases, además de la construcción y gestión de bases de datos relacionales sobre Mysql, PostgresDb y MariaDb, creación de vistas y reportes.",
  },
  {
    title: "Capacitaciones síncronas y asíncronas en GIT.",
    text: "Se brinda al personal material e instrucciones en la herramienta más importante y por la cual el trabajo remoto se ha hecho posible, con el sistema de control de versiones GIT se podrá mantener, compartir, combinar y escalar cualquier proyecto en cualquier lenguaje de programación, además de acceder remotamente.",
  },
];

const Features = () => {
  return (
    <div className="acad__features section__padding" id="servicios">
      <div className="acad__features-heading">
        <h1 className="gradient__text">
        Tenemos excelentes servicios esperando por ti ¡Conócelos! 
        </h1>
        <p>contactanos para asesorarte  </p>
      </div>
      <div className="acad__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
