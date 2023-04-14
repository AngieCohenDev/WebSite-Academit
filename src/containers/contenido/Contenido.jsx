import React from 'react'
import {Feature} from '../../components/index';
import './contenido.css'


const Contenido = () => {
  return (
    <div className='acad__contenido section__margin' id='contenido'>
      <div className='acad__contenido-feature'>
        <Feature />
      </div>
      <div className='acad__contenido-heading'>
        <h1 className='gradient-text'> Somos tu mejor opción para potencializar tus habilidades </h1>
        <p>Explora nuestros cursos y servicios!</p>
      </div>
    </div>
  )
}

export default Contenido