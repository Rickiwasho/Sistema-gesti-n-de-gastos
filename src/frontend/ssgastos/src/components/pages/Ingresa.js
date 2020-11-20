
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
            <form>
              <input type='email' name='email' placeholder='Correo electrónico' className='email-input' />
              <input type='password' name='password' placeholder='Contraseña'/>
            </form>
              <Button buttonStyle='btn--outline' buttonSize='btn--primary'>Iniciar sesión</Button>
          </div>
          <Link to='/' className='help-links'>¿Olvidaste tu contraseña?</Link>

        </section>
    </div>
  );
}
export default Ingresa; 