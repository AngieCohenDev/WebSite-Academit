import React from 'react'
import logo from '../../assets/logo.jpg'
import './footer.css'

const Footer = () => {
  return (
    <div className='acad__footer section__padding' id='contacto'>
      <div className='acad__footer-heading'>
        <h1 className='gradient__text'>
          ¿Quieres pertenecer a la  élite?
        </h1>
      </div>
      <div className='acad__footer-btn'>
          <p>Nuestro contacto en WhatsApp</p>
      </div>
      <div className='acad__footer-links'>
        <div className='acad__footer-links_log'>
          <img src={logo} alt="logo" />
          <p>Carrera 23 #65-15 Barranquilla-Colombia</p>
        </div>
        <div className='acad__footer-links_div'>
            <h4>Links</h4>
            <p>Redes Sociales</p>
            <p>Contacto</p>
        </div>
        <div className='acad__footer-links_div'>
            <h4>Company</h4>
            <p>Terminos y condiciones </p>
            <p>Políticas de Privacidad </p>
            <p>Contacto</p>
        </div>
        <div className='acad__footer-links_div'>
            <h4>Información Legal</h4>
            <p>Calle 123 </p>
            <p> +54 11-5507-7296 </p>
            <p>academit.sa@gmail.com</p>
        </div>
      </div>
      <div className='acad__footer-copyrigth'>
          <p>Academit 2023. Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer