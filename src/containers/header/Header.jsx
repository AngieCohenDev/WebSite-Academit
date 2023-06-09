import React from "react";
import people from "../../assets/people.png";
import academit from "../../assets/academit.png";
import "./header.css";

const Header = () => {
  return (
    <div className="acad__header section__padding" id="home">
      <div className="acad__header-content">
        <h1 className="gradient__text">
          Somos Academit, Programando la élite del mañana, hoy
        </h1>
        <p>
          Tenemos el objetivo de preparar, actualizar, potencializar y
          desarrollar las capacidades de las personas para el mundo laboral a
          través de nuestros cursos, capacitaciones, asesorías y carreras.
          Otorgando acceso educativo de calidad para crear profesionales que
          satisfactoriamente cumplirán a cabalidad con los más altos estándares
          y requerimientos que existan en el mercado. Ingresa tu email para ponerte en contacto con nosotros
        </p>
        <div className="acad__header-content_input">
          <input type="email" placeholder="Ingrese su Email, por favor…" />
          <button type="button">Empecemos</button>
        </div>
        <div className="acad__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 personas nos visitaron en las últimas 24 horas</p>
        </div>
      </div>
      <div className="acad__header-image">
          <img src={academit} alt="academit" />
        </div>
    </div>
  );
};

export default Header;
