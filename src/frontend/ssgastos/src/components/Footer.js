import React from 'react'
import './Footer.css';
import {Button} from './Button'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subsciption'>


                <p className='footer-subscription-heading'>
                    Suscríbete a nuestro newsletter para recibir nuestras noticias
                </p>
                <p className='footer-subscription-text'>
                    Puedes desuscribirte cuando quieras!
                </p>


                <div className='input-areas'>
                    <form>
                        <input type='email'name='email' placeHolder='Tu email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Suscríbete</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Sobre nosotros</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
          
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
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
                            Soluciones Integrales <i class="fas fa-drafting-compass"/>
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