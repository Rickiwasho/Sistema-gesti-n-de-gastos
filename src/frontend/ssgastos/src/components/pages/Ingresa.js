
import React from 'react';
import {Button} from '../Button';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Ingresa.css'

function Ingresa () {
  return (
    <div className='signin-container'>
        <section className='signin-section'>
          <h1> INICIAR SESIÓN</h1>
          <div className='input-areas'>
            <form className='campos'>
              <input type='email' name='email' placeholder='Correo electrónico' className='email-input' />
              <input type='password' name='password' placeholder='Contraseña'/>
            </form>
          </div>
          <Button className='btn-login' buttonStyle='btn--outline' buttonSize='btn--large'>Iniciar sesión</Button>

          <div className='help-links'>
            <a to='/'>¿Olvidaste tu contraseña?</a>
            <a to='/'> Regístrate</a>
          </div>

        </section>
  
    </div>
  );
}
export default Ingresa; 