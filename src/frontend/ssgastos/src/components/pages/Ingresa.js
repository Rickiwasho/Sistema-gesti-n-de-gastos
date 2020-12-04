
import {Button} from '../Button';
import React, {useState} from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import './Ingresa.css';
import './system/Inicio';
import { auth } from '../firebase';

function Ingresa () {

  const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // firebase login 
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                
                history.push('/Inicio')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // firebase register
        auth
            . createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }



  return (
    <div className='signin-container'>
        <section className='signin-section'>
          <h1> INICIAR SESIÓN</h1>
          <div className='input-areas'>
            <form className='campos'>
              <input type='email' name='email' placeholder='Correo electrónico' className='email-input' value={email} onChange={e => setEmail(e.target.value)} />
              <input type='password' name='password' placeholder='Contraseña'  value={password} onChange={e => setPassword(e.target.value)}/>
            </form>
          </div>

          <Button onClick={signIn} className='btn-login' buttonStyle='btn--outline' buttonSize='btn--large'>Iniciar sesión</Button>

          <div className='help-links'>

            <a to='/newpw'>¿Olvidaste tu contraseña?</a>


            <button onClick={register} className='login-registerButton'>Crea una cuenta</button>

            {/*<a to='/register'> Regístrate</a> */}
          </div>

        </section>
  
    </div>
  );
}
export default Ingresa; 