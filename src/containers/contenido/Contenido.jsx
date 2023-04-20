import React from "react";
import Feature from "../../components/feature/Feature"
import "./contenido.css";

const Contenido = () => {
  return(
    <div className="acad__contenido section__margin" id="contenido">
      <div className="acad__contenido-feature">
        <Feature title="¿Quiénes Somos?" text="Somos expertos magnánimos, comprometidos con la evolución estructural de una sociedad más equitativa a través del rol fundamental que tiene la educación, brindando recursos de excelencia en tecnologías de la información y la comunicación fomentando mancomunadamente el desarrollo de habilidades y capacidades logrando una formación profesional de nuestros estudiantes."/>
      </div>
      <div className="acad__contenido-heading">
          <h1 className="gradient__text">Somos tu mejor opción para potencializar tus habilidades</h1>
          <p>Explora nuestros cursos y servicios!</p>
      </div>
      <div className="acad__contenido-container">
          <Feature title="Calidad" text="Academit tiene la convicción de que, solamente si se le entrega una educación de calidad al estudiante, este podrá ser un profesional preparado para el ambiente laboral y de mayor servicio para la sociedad. Es por esto que colocamos todos nuestros esfuerzos en brindarle a nuestros estudiantes el conocimiento más novedoso." />
          <Feature  title="Enfoque" text="Estamos enfocados en brindarles a nuestros estudiantes las tecnologías más demandadas en el mercado; asegurándonos así que quienes hagan su formación con nosotros incursionen en el mundo laboral una vez finalicen los cursos." />
          <Feature  title="Accesibilidad" text="Academit ofrece un servicio de la calidad más alta por un precio que es accesible para cualquier individuo que quiera incursionar en el mundo del desarrollo web. Nuestra relación calidad-precio es de las mejores en el mercado."/>
      </div>
    </div>
  );
};

export default Contenido;
