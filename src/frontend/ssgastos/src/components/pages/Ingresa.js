
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
          <Button buttonStyle='btn--outline' buttonSize='btn--primary'>Iniciar sesión</Button>
          <div className='help-links'>
            <Link to='/'>¿Olvidaste tu contraseña?</Link>
            <Link to='/'> Regístrate</Link>
          </div>

        </section>
  
    </div>
  );
}
export default Ingresa; 