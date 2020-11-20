import React from 'react'
import './Footer.css';
import {Button} from './Button'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Información</h2>
                        <Link to='/'>Equipo humano</Link>
                        <Link to='/'>Misión, Visión y Valores</Link>
                        <Link to='/'>Ética y diversidad</Link>
                        <Link to='/'>Proveedores</Link>
                        <Link to='/'>Comunidad y Medioambiente</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contáctanos</h2>
                        <Link to='/'>Contacto</Link>
                        <Link to='/'>Soporte</Link>
                        <Link to='/'>Casa matriz</Link>
                        <Link to='/'>Horario de Atención</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
          
                    <div class='footer-link-items'>
                        <h2>RRSS</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link  to='/' className='social-logo'>
                            <i class="fas fa-drafting-compass"/>
                        </Link>
                    </div>
                    <small className='website-rights'> Copyright © 2020 solucionesintegrales.cl - Todos los derechos reservados</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                        
                    </div>
                </div>
            </section>

        </div>
    );
}
export default Footer;